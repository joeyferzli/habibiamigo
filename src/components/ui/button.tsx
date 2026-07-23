import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap font-medium tracking-wide uppercase transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-foreground text-background hover:bg-foreground/90 rounded-sm",
        destructive: "bg-destructive text-destructive-foreground hover:bg-destructive/90 rounded-sm",
        outline: "border-2 border-foreground bg-transparent hover:bg-foreground hover:text-background text-foreground rounded-sm",
        secondary: "bg-secondary text-secondary-foreground hover:bg-stone rounded-sm",
        ghost: "hover:bg-accent hover:text-accent-foreground rounded-sm",
        link: "text-foreground underline-offset-4 hover:underline",
        premium: "bg-foreground text-background hover:bg-charcoal rounded-none font-display text-lg tracking-widest",
        nav: "text-foreground/70 hover:text-foreground bg-transparent font-sans text-sm tracking-normal normal-case",
        accent: "bg-rust text-rust-foreground hover:bg-rust/90 rounded-none font-display text-lg tracking-widest",
      },
      size: {
        default: "h-12 px-8 py-3 text-sm",
        sm: "h-10 px-6 text-xs",
        lg: "h-14 px-12 text-base",
        xl: "h-16 px-16 text-lg",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
