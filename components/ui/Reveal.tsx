"use client";

import { useEffect, useRef, useState, type ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Reveal({
  children,
  className,
  delay = 0,
}: {
  children: ReactNode;
  className?: string;
  delay?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 639px)");

    const updateMobile = () => {
      setIsMobile(mediaQuery.matches);
    };

    updateMobile();
    mediaQuery.addEventListener("change", updateMobile);

    return () => {
      mediaQuery.removeEventListener("change", updateMobile);
    };
  }, []);

  useEffect(() => {
    const node = ref.current;
    if (!node) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -60px 0px",
      }
    );

    observer.observe(node);

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={ref}
      style={{
        transitionDelay: isMobile && visible ? "0ms" : `${delay}ms`,
      }}
      className={cn(
        "transition-all duration-150 ease-out sm:duration-700 motion-reduce:transition-none",
        visible
          ? "opacity-100 translate-y-0"
          : "opacity-0 translate-y-2 sm:translate-y-4",
        className
      )}
    >
      {children}
    </div>
  );
}