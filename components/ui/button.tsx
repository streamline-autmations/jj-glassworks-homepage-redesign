import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

export const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap ui-transition ui-transition-colors ui-transition-shadow transition-transform focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        primary:
          "border-2 border-primary bg-primary text-primary-foreground hover:bg-transparent hover:text-primary hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none",
        outline:
          "border-2 border-primary bg-transparent text-primary hover:bg-primary hover:text-primary-foreground hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none",
        white:
          "border-2 border-white/70 bg-white text-primary hover:bg-white/95 hover:border-white/80 hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none",
        inverseOutline:
          "border-2 border-white/65 bg-transparent text-white hover:bg-white hover:text-primary hover:-translate-y-0.5 hover:shadow-[0_8px_20px_rgba(0,0,0,0.08)] motion-reduce:hover:translate-y-0 motion-reduce:hover:shadow-none",
        ghost:
          "bg-transparent text-foreground/80 hover:text-foreground hover:bg-accent hover:-translate-y-0.5 motion-reduce:hover:translate-y-0",
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
