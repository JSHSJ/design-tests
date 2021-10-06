import React, { FC, useMemo } from "react";

export enum ButtonVariants {
  PRIMARY = "primary",
  OUTLINE = "outline",
}

export enum ButtonSizes {
  SMALL = "small",
  NORMAL = "normal",
}

export type ButtonProps = {
  disabled?: boolean;
  variant?: ButtonVariants;
  size?: ButtonSizes;
  onClick(): void;
  ariaLabel?: string;
  type?: "submit" | "button" | "reset";
  fullWidth?: boolean;
  flexGrow?: boolean;
  contentAlign?: string;
  className?: string;
};

export const ButtonTailwind: FC<ButtonProps> = ({
  disabled = false,
  variant = ButtonVariants.PRIMARY,
  size = ButtonSizes.NORMAL,
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

  const getVariationClasses = (variant: ButtonVariants) => {
    switch (variant) {
      case ButtonVariants.PRIMARY:
        return "bg-primary-base text-light-4 hover:bg-primary-2 active:bg-primary-1";
      case ButtonVariants.OUTLINE:
        return "bg-light-4 text-primary-base shadow-xs hover:text-primary-2 hover:shadow-md hover:bg-light-3 active:text-primary-1 active:shadow-xs active:bg-light-3";
      default:
        return "bg-primary-base text-light-4 hover:bg-primary-2 active:bg-primary-1";
    }
  };

  const getSizeClasses = (size: ButtonSizes) => {
    switch (size) {
      case ButtonSizes.NORMAL:
        return "px-7 py-4";
      case ButtonSizes.SMALL:
        return "px-4 py-2 normal-case rounded-full";
      default:
        return "px-7 py-4";
    }
  };

  const classNames = {
    base: "relative flex flex-shrink-0 border-0 outline-0 cursor-pointer overflow-hidden font-base font-medium uppercase transition-all appearance-none rounded",
    width: fullWidth ? "w-full" : "w-auto",
    flexGrow: flexGrow ? "flex-grow-1" : "flex-grow-0",
    alignment: contentAlign === "left" ? "justify-start" : contentAlign,
    variant: getVariationClasses(variant),
    size: getSizeClasses(size),
    disabled:
      "disabled:bg-status-disabled disabled:shadow-none disabled:text-accent-3 disabled:hover:bg-status-disabled disabled:hover:shadow-none disabled:hover:text-accent-3 disabled:active:bg-status-disabled disabled:active:shadow-none disabled:active:text-accent-3 disabled:cursor-not-allowed disabled:pointer-events-none",
  };

  return (
    <button
      role="button"
      disabled={disabled}
      aria-label={ariaLabel || ""}
      type={type}
      className={[
        classNames.base,
        classNames.width,
        classNames.flexGrow,
        classNames.alignment,
        classNames.variant,
        classNames.size,
        classNames.disabled,
        className,
      ].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
