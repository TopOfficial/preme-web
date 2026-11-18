"use client";
import { useEffect, useRef, type ReactNode } from "react";

/** Content stays visible without JavaScript, IntersectionObserver or motion support. */
export function Reveal({
  children,
  className,
  direction = "up",
  delay = 0,
  duration = 700,
}: {
  children: ReactNode;
  className?: string;
  direction?: "up" | "left" | "right";
  delay?: number;
  duration?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    const element = ref.current;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    if (!element || preference.matches || !("IntersectionObserver" in window) || !element.animate)
      return;
    let animation: Animation | undefined;
    const observer = new IntersectionObserver(
      (entries) => {
        if (!entries.some((entry) => entry.isIntersecting)) return;
        observer.disconnect();
        if (preference.matches) return;
        const transform =
          direction === "up"
            ? "translateY(24px)"
            : `translateX(${direction === "left" ? -24 : 24}px)`;
        animation = element.animate(
          [
            { opacity: 0.25, transform },
            { opacity: 1, transform: "translate(0, 0)" },
          ],
          {
            duration,
            delay,
            easing: "cubic-bezier(0.16, 1, 0.3, 1)",
            fill: "backwards",
          },
        );
      },
      { threshold: 0.08 },
    );
    observer.observe(element);
    const stopMotion = () => {
      if (preference.matches) {
        observer.disconnect();
        animation?.cancel();
      }
    };
    preference.addEventListener("change", stopMotion);
    return () => {
      observer.disconnect();
      animation?.cancel();
      preference.removeEventListener("change", stopMotion);
    };
  }, [direction, delay, duration]);
  return (
    <div ref={ref} className={className}>
      {children}
    </div>
  );
}
