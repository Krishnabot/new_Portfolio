import { useAppSelector } from "@/app/hooks";
import clsx from "clsx";
import { useEffect, useRef, useState } from "react";

export default function PhotoBanner() {
  const photos = useAppSelector((s) => s.home.photos);
  const [displayPhotos, setDisplayPhotos] = useState(photos);
  const [ignoreClick, setIgnoreClick] = useState(false);
  const photosRef = useRef<HTMLDivElement>(null);
  const rotations = ["rotate-2", "-rotate-2", "rotate-2", "rotate-2", "-rotate-2"];

  const shiftLeft = () => {
    setDisplayPhotos((prev) => [...prev.slice(1), prev[0]]);
  };

  const shiftRight = () => {
    setDisplayPhotos((prev) => [prev[prev.length - 1], ...prev.slice(0, -1)]);
  };

  useEffect(() => {
    const el = photosRef.current;
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
          shiftRight();
        } else {
          shiftLeft();
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
  }, []);

  return (
    <div className="mt-16 sm:mt-20">
      <div ref={photosRef} className="-my-4 flex justify-center gap-5 overflow-hidden py-4 sm:gap-8">
        {displayPhotos.map((src, i) => (
          <div
            key={src}
            className={clsx(
              "relative aspect-[9/10] w-44 flex-none overflow-hidden rounded-xl bg-zinc-100 sm:w-72 sm:rounded-2xl dark:bg-zinc-800",
              rotations[i % rotations.length]
            )}
            onClick={() => {
              if (ignoreClick) return;
              const midPoint = displayPhotos.length / 2;
              if (i < midPoint) {
                shiftLeft();
              } else {
                shiftRight();
              }
            }}
          >
            <img src={src} alt="" className="absolute inset-0 h-full w-full object-cover" />
          </div>
        ))}
      </div>
    </div>
  );
}