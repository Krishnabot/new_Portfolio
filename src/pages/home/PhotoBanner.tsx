import { useAppSelector } from "@/app/hooks";
import clsx from "clsx";
import { useEffect, useMemo, useRef, useState } from "react";
import { useSlidingCarousel } from "@/components/ui/useSlidingCarousel";

export default function PhotoBanner() {
  const photos = useAppSelector((s) => s.home.photos);

  const [startIndex, setStartIndex] = useState(0);
  const [ignoreClick, setIgnoreClick] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const rotations = ["rotate-2", "-rotate-2", "rotate-0", "rotate-2", "-rotate-2"];

  const orderedPhotos = useMemo(() => {
    const len = photos.length || 0;
    if (len === 0) return [];
    return Array.from({ length: len }, (_, slot) => photos[(startIndex + slot) % len]);
  }, [photos, startIndex]);

  const { trackRef, firstItemRef, animStyle, onTransitionEnd, animateLeft, animateRight } =
    useSlidingCarousel({
      enabled: true,
      durationMs: 280,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      onAfterShift: (dir) => {
        const len = photos.length || 1;
        setStartIndex((prev) =>
          dir === "left" ? (prev + 1) % len : (prev - 1 + len) % len
        );
      },
    });

  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;

    let startX = 0;
    const handleTouchStart = (e: TouchEvent) => {
      startX = e.touches[0].clientX;
    };
    const handleTouchEnd = (e: TouchEvent) => {
      const endX = e.changedTouches[0].clientX;
      const deltaX = endX - startX;
      if (Math.abs(deltaX) > 50) {
        deltaX > 0 ? animateRight() : animateLeft();
        setIgnoreClick(true);
        setTimeout(() => setIgnoreClick(false), 300);
      }
    };

    el.addEventListener("touchstart", handleTouchStart);
    el.addEventListener("touchend", handleTouchEnd);
    return () => {
      el.removeEventListener("touchstart", handleTouchStart);
      el.removeEventListener("touchend", handleTouchEnd);
    };
  }, [animateLeft, animateRight]);

  const handleClick = (slotIndex: number) => {
    if (ignoreClick || orderedPhotos.length === 0) return;
    const mid = orderedPhotos.length / 2;
    slotIndex < mid ? animateLeft() : animateRight();
  };

  return (
    <div className="mt-16 sm:mt-20">
      <div ref={wrapperRef} className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <div
          ref={trackRef}
          style={animStyle}
          onTransitionEnd={onTransitionEnd}
          className="flex gap-5 sm:gap-8"
        >
          {orderedPhotos.map((src, slot) => (
            <div
              key={slot}                         
              ref={slot === 0 ? firstItemRef : undefined}
              className={clsx(
                "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
                rotations[slot % rotations.length] 
              )}
              onClick={() => handleClick(slot)}
            >
              <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
