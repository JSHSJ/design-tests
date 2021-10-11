import React, { FC, useMemo } from "react";

import styles from './Button-CSS-Modules.module.scss';

export enum ButtonVariantClass {
  PRIMARY = "primary",
  OUTLINE = "outline",
}

export enum ButtonSizeClass {
  SMALL = "small",
  NORMAL = "normal",
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

export interface IChildren {
  type: {
    name: string,
  }
}

const hasIcon = (children: IChildren) => {
  // Workaround: Using the code snippet below causes bug with addon-controls.
  // See Bug Issue: https://github.com/storybookjs/storybook/issues/12401
  // const hasIcon = children.type?.name === 'Icon';

  if (React.isValidElement(children)) {
    const hasIconTypes = children?.type !== undefined ? children.type.name : false;
    return hasIconTypes === (<div />).type.name;
  }
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
      className={[styles.btn, styles[variant], styles[size], className, ...hasIcon ? [styles.hasIcon] : []].join(" ")}
      onClick={onClick}
    >
      {children}
    </button>
  );
};
