import React, { FC, useMemo } from "react";

export enum ButtonVariantClass {
  PRIMARY = "-primary",
  OUTLINE = "-outline",
}

export enum ButtonSizeClass {
  SMALL = "-small",
  NORMAL = "-normal",
}

export type ButtonProps = {
  disabled?: boolean;
  variant?: ButtonVariantClass;
  size?: ButtonSizeClass;
  onClick(): void;
  ariaLabel?: string;
  type?: "submit" | "button" | "reset";
  fullWidth?: boolean;
  flexGrow?: boolean;
  contentAlign?: string;
  className?: string;
};

export const ButtonCSS: FC<ButtonProps> = ({
  disabled = false,
  variant = ButtonVariantClass.PRIMARY,
  size = ButtonSizeClass.NORMAL,
  children,
  onClick,
  ariaLabel,
  type = "button",
  fullWidth = false,
  flexGrow = false,
  contentAlign = "left", // TODO: Change to mapping or plain tailwind class,
  className = "",
}) => {
  const isSubmitButton = type === "submit";

  return (
    <button
      role="button"
      disabled={disabled}
      aria-label={ariaLabel || ""}
      type={type}
      className={["btn", variant, size, className].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
