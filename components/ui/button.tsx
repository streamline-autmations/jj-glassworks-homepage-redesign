import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary: "bg-primary text-primary-foreground hover:bg-primary/90",
        outline:
          "border border-primary/40 text-primary hover:bg-primary/5 hover:border-primary/55",
        white:
          "bg-white text-primary border border-white/70 hover:bg-white/90 hover:border-white/80",
        inverseOutline:
          "border border-white/65 text-white hover:bg-white/10 hover:border-white/85",
        ghost: "text-foreground/80 hover:text-foreground hover:bg-accent",
      },
      size: {
        sm: "px-5 py-2.5 text-xs font-extrabold tracking-[0.12em] uppercase",
        md: "px-7 py-3 text-xs font-extrabold tracking-[0.12em] uppercase",
        lg: "px-8 py-3.5 text-sm font-extrabold tracking-[0.12em] uppercase",
      },
      shape: {
        soft: "rounded-2xl",
        pill: "rounded-full",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "md",
      shape: "soft",
    },
  }
);

export function buttonClassName({
  className,
  ...props
}: VariantProps<typeof buttonVariants> & { className?: string }) {
  return cn(buttonVariants(props), className);
}
