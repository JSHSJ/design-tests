import React, { FC, useMemo } from "react";
import { button, ButtonVariants } from "./button.css";

export type ButtonProps = {
  disabled?: boolean;
  onClick(): void;
  ariaLabel?: string;
  type?: "submit" | "button" | "reset";
  flexGrow?: boolean;
  contentAlign?: string;
  className?: string;
  variants: ButtonVariants;
};

export const ButtonCSSinTS: FC<ButtonProps> = ({
  disabled = false,
  children,
  onClick,
  ariaLabel,
  type = "button",
  flexGrow = false,
  contentAlign = "left",
  className = "",
  variants,
}) => {
  const isSubmitButton = type === "submit";

  return (
    <button
      role="button"
      className={button({
        ...variants,
      })}
      disabled={disabled}
      aria-label={ariaLabel || ""}
      type={type}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
