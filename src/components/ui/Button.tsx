import React, { forwardRef } from "react";
import clsx from "clsx";
import styles from "./Button.module.scss";
import { ButtonProps } from "@/types";

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
    ({ children, variant = "solid", size = "md", rounded = "md", className = "", ...props }, ref) => {
        const variants = {
            solid: styles.solid,
            outline: styles.outline,
            ghost: styles.ghost,
            link: styles.link,
        };

        const sizes = {
            sm: styles.sm,
            md: styles.md,
            lg: styles.lg,
            xl: styles.xl,
        };

        const roundedClasses = {
            none: 'rounded-none',
            sm: 'rounded-sm',
            md: 'rounded-md',
            lg: 'rounded-lg',
            xl: 'rounded-xl',
            '2xl': 'rounded-2xl',
            '3xl': 'rounded-3xl',
        };

        return (
            <button
                ref={ref}
                className={clsx(
                    styles.button,
                    variants[variant],
                    sizes[size],
                    roundedClasses[rounded],
                    className /** className is also use for override any style.*/
                )}
                {...props}
            >
                {children}
            </button>
        );
    });

Button.displayName = "Button";

export { Button };
export default Button;
