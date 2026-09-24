import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export default function Section({
  id,
  children,
  className,
  soft = false,
}: {
  id?: string;
  children: ReactNode;
  className?: string;
  soft?: boolean;
}) {
  return (
    <section
      id={id}
      className={cn(
        "relative scroll-mt-24 px-6 py-20 sm:px-10 sm:py-28 lg:px-16",
        soft && "bg-bg-soft",
        className
      )}
    >
      <div className="mx-auto w-full max-w-content">{children}</div>
    </section>
  );
}
