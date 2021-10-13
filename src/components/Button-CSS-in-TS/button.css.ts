import { vars } from "../../assets/css-ts/base/_theme.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";

export const button = recipe({
  base: {
    position: "relative",
    inlineSize: "auto",
    blockSize: "fit-content",
    display: "flex",
    gap: vars.space.base,
    flexShrink: "initial",
    flexGrow: "initial",
    justifyContent: "flex-start",
    border: "none",
    outline: "none",
    cursor: "pointer",
    overflow: "hidden",

    fontWeight: vars.fontWeights.medium,
    fontSize: vars.fontSizes.base,
    letterSpacing: vars.letterSpacings[3],
    borderRadius: vars.radii.base,
    textTransform: "uppercase",
    textDecoration: "none",
    userSelect: "none",
    transition:
      "background-color 0.3s ease, color 0.3s ease, box-shadow 0.3s ease",
    appearance: "none",

    ":disabled": {
      backgroundColor: vars.colors.status.disabled,
      boxShadow: "none",
      color: vars.colors.accent[3],
      cursor: "not-allowed",
    },
    selectors: {
      "&:disabled:hover": {
        backgroundColor: vars.colors.status.disabled,
        boxShadow: "none",
        color: vars.colors.accent[3],
        cursor: "not-allowed",
      },
    },
  },
  variants: {
    color: {
      primary: {
        backgroundColor: vars.colors.primary.base,
        color: vars.colors.light[4],
        ":hover": {
          backgroundColor: vars.colors.primary[2],
        },
        ":active": {
          backgroundColor: vars.colors.primary[1],
        },
      },
      outlined: {
        backgroundColor: vars.colors.light[4],
        boxShadow: `inset 0 0 0 1px ${vars.colors.primary.base}`,
        color: vars.colors.primary.base,
        ":hover": {
          color: vars.colors.primary[2],
          boxShadow: `inset 0 0 0 1px ${vars.colors.primary[2]}`,
          backgroundColor: vars.colors.light[3],
        },
        ":active": {
          color: vars.colors.primary[1],
          boxShadow: `inset 0 0 0 1px ${vars.colors.primary[1]}`,
          backgroundColor: vars.colors.light[3],
        },
      },
    },
    size: {
      small: {
        paddingLeft: vars.space[4],
        paddingRight: vars.space[4],
        paddingTop: vars.space[2],
        paddingBottom: vars.space[2],
        textTransform: "none",
        borderRadius: "100px",
      },
      normal: {
        paddingLeft: vars.space[7],
        paddingRight: vars.space[7],
        paddingTop: vars.space[4],
        paddingBottom: vars.space[4],
      },
    },
    fullWidth: {
      true: { inlineSize: "100%" },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "normal",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
