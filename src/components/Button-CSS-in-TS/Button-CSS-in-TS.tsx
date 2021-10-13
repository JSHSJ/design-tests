import React, { FC, useMemo } from "react";
import { button } from "./button.css";

export enum ButtonVariant {
  PRIMARY = "primary",
  OUTLINED = "outlined",
}

export enum ButtonSize {
  SMALL = "small",
  NORMAL = "normal",
}

export type ButtonProps = {
  disabled?: boolean;
  variant?: ButtonVariant;
  size?: ButtonSize;
  onClick(): void;
  ariaLabel?: string;
  type?: "submit" | "button" | "reset";
  fullWidth?: boolean;
  flexGrow?: boolean;
  contentAlign?: string;
  className?: string;
};

export const ButtonCSSinTS: FC<ButtonProps> = ({
  disabled = false,
  variant = ButtonVariant.PRIMARY,
  size = ButtonSize.NORMAL,
  children,
  onClick,
  ariaLabel,
  type = "button",
  fullWidth = false,
  flexGrow = false,
  contentAlign = "left",
  className = "",
}) => {
  const isSubmitButton = type === "submit";

  return (
    <button
      role="button"
      className={button({
        color: variant,
        size: size,
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
