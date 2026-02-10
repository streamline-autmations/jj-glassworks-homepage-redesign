import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const cardVariants = cva(
  "bg-background ring-1 ring-border/60 shadow-sm",
  {
    variants: {
      variant: {
        tile: "overflow-hidden rounded-3xl transition duration-300 hover:-translate-y-0.5 hover:shadow-md",
        panel: "rounded-3xl",
        accent:
          "rounded-3xl bg-secondary ring-border/60 border-l-2 border-primary shadow-sm",
      },
      padding: {
        none: "",
        sm: "p-6",
        md: "p-8 md:p-10",
      },
    },
    defaultVariants: {
      variant: "panel",
      padding: "none",
    },
  }
);

export function cardClassName({
  className,
  ...props
}: VariantProps<typeof cardVariants> & { className?: string }) {
  return cn(cardVariants(props), className);
}

