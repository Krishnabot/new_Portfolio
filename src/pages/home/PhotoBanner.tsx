import { useAppSelector } from "@/app/hooks";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";
import { useSlidingCarousel } from "@/components/ui/useSlidingCarousel";

export default function PhotoBanner() {
  const photos = useAppSelector((s) => s.home.photos);
  const [displayPhotos, setDisplayPhotos] = useState(photos);
  const [ignoreClick, setIgnoreClick] = useState(false);
  const wrapperRef = useRef<HTMLDivElement>(null);

  const rotations = ["rotate-2", "-rotate-2", "rotate-0", "rotate-2", "-rotate-2"];

  const { trackRef, firstItemRef, animStyle, onTransitionEnd, animateLeft, animateRight } =
    useSlidingCarousel({
      enabled: true, 
      durationMs: 280,
      easing: "cubic-bezier(0.22, 1, 0.36, 1)",
      onAfterShift: (dir) => {
        setDisplayPhotos((prev) =>
          dir === "left" ? [...prev.slice(1), prev[0]] : [prev[prev.length - 1], ...prev.slice(0, -1)]
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
      const absDelta = Math.abs(deltaX);

      if (absDelta > 50) {
        if (deltaX > 0) {
          animateRight();
        } else {
          animateLeft();
        }
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

const handlClick = (index: number) =>{
  if (ignoreClick) return;
  const midPoint = displayPhotos.length/2;
  if (index < midPoint) {
    animateLeft();
  } else {
    animateRight(); 
  }
}
  return (
    <div className="mt-16 sm:mt-20">
      <div ref={wrapperRef} className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        <div
          ref={trackRef}
          style={animStyle}
          onTransitionEnd={onTransitionEnd}
          className="flex gap-5 sm:gap-8"
        >
          {displayPhotos.map((src, i) => (
            <div
              key={`${src}-${i}`}
              ref={i === 0 ? firstItemRef : undefined}
              className={clsx(
                "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
                rotations[i % rotations.length]
              )}
              onClick={() => handlClick(i)}
            >
              <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
