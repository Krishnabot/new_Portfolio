import { useCallback, useEffect, useLayoutEffect, useRef, useState } from "react";

export type ShiftDirection = "left" | "right";

type Options = {
  enabled?: boolean;            
  durationMs?: number;          
  easing?: string;             
  microSmooth?: boolean;    
  onAfterShift: (dir: ShiftDirection) => void; 
};

export function useSlidingCarousel({
  enabled = true,
  durationMs = 280,
  easing = "cubic-bezier(0.22, 1, 0.36, 1)",
  microSmooth = true,
  onAfterShift,
}: Options) {
  const trackRef = useRef<HTMLDivElement>(null);
  const firstItemRef = useRef<HTMLDivElement>(null);

  const [delta, setDelta] = useState(0);    
  const [tx, setTx] = useState(0);          
  const [animating, setAnimating] = useState(false);
  const directionRef = useRef<ShiftDirection | null>(null);

  const measure = useCallback(() => {
    const item = firstItemRef.current;
    const track = trackRef.current;
    if (!item || !track) return;

    const itemWidth = item.offsetWidth;
    const styles = window.getComputedStyle(track);
    const gap = parseFloat(styles.columnGap || "0");
    setDelta(itemWidth + gap);
  }, []);

  useLayoutEffect(() => {
    measure();
    const onResize = () => measure();
    window.addEventListener("resize", onResize);
    return () => window.removeEventListener("resize", onResize);
  }, [measure]);

  const animateLeft = useCallback(() => {
    if (!enabled) { onAfterShift("left"); return; }
    if (animating || !delta) return;
    directionRef.current = "left";
    setAnimating(true);
    setTx(-delta);
  }, [animating, delta, enabled, onAfterShift]);

  const animateRight = useCallback(() => {
    if (!enabled) { onAfterShift("right"); return; }
    if (animating || !delta) return;
    directionRef.current = "right";
    setAnimating(true);
    setTx(delta);
  }, [animating, delta, enabled, onAfterShift]);

  const onTransitionEnd = useCallback(() => {
    if (!enabled) return;
    const dir = directionRef.current;
    if (!dir) return;

    onAfterShift(dir);

    directionRef.current = null;
    setAnimating(false);

    if (microSmooth) {
      requestAnimationFrame(() => {
        setTx(0);
      });
    } else {
      setTx(0);
    }
  }, [enabled, microSmooth, onAfterShift]);

  const animStyle: React.CSSProperties = enabled
    ? {
        transform: `translateX(${tx}px)`,
        transition: animating ? `transform ${durationMs}ms ${easing}` : "none",
        willChange: "transform",
      }
    : {};

  return {
    trackRef,
    firstItemRef,
    animStyle,
    onTransitionEnd,
    animateLeft,
    animateRight,
    isAnimating: animating,
  };
}
