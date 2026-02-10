import * as React from "react";

import { cn } from "@/lib/utils";

export const selectClassName =
  "flex h-12 w-full rounded-2xl border border-input bg-background px-4 text-sm text-foreground transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50";

export const Select = React.forwardRef<HTMLSelectElement, React.ComponentProps<"select">>(
  ({ className, children, ...props }, ref) => {
    return (
      <select ref={ref} className={cn(selectClassName, className)} {...props}>
        {children}
      </select>
    );
  }
);

Select.displayName = "Select";
