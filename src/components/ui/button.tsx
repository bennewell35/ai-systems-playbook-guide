
import * as React from "react"
import { Slot } from "@radix-ui/react-slot"
import { cva, type VariantProps } from "class-variance-authority"
import { cn } from "@/lib/utils"

const buttonVariants = cva(
  // Base styles to match React Native mobile button:
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-[12px] text-[16px] font-bold ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-[20px] [&_svg]:shrink-0 h-[44px] px-[18px] min-w-[44px] mb-3 last:mb-0 mx-0 sm:mx-0", // height, padding, radius, font, icon, margin
  {
    variants: {
      variant: {
        default: "bg-primary text-white hover:bg-primary/90 active:scale-95 shadow transition-transform",
        accent:
          "bg-accent text-white hover:bg-accent/90 active:scale-95 shadow transition-transform",
        destructive:
          "bg-destructive text-destructive-foreground hover:bg-destructive/90",
        outline:
          "border border-input bg-background hover:bg-accent/10 hover:text-accent-foreground",
        secondary:
          "bg-secondary text-secondary-foreground hover:bg-secondary/80",
        ghost: "hover:bg-accent/10 hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline",
      },
      size: {
        default: "h-[44px] px-[18px] min-w-[44px]",
        sm: "h-10 rounded-[10px] px-3",
        lg: "h-[48px] rounded-[14px] px-8",
        icon: "h-[44px] w-[44px] p-0",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
)

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, children, ...props }, ref) => {
    const Comp = asChild ? Slot : "button"
    return (
      <Comp
        className={cn(
          buttonVariants({ variant, size }),
          // Spacing: minimum 16px from screen edge on mobile, 12px below (handled by mb-3 above), prevent overflow
          "max-w-full mx-[16px] sm:mx-0",
          // Make icon always left of text with 8px (gap-2 ~8px) - already in base
          className
        )}
        ref={ref}
        {...props}
      >
        {children}
      </Comp>
    )
  }
)
Button.displayName = "Button"

export { Button, buttonVariants }
