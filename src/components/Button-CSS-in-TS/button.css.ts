import { vars } from "../../assets/css-ts/base/_theme.css";
import { recipe, RecipeVariants } from "@vanilla-extract/recipes";
import { createVar, fallbackVar } from "@vanilla-extract/css";

export const sizeVar = createVar();

export const button = recipe({
  base: {
    position: "relative",
    inlineSize: "auto",
    blockSize: fallbackVar(sizeVar, "3em"),
    display: "flex",
    gap: vars.space.base,
    flexShrink: "initial",
    flexGrow: "initial",
    justifyContent: "flex-start",
    alignItems: "center",
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
        // set size
        vars: {
          [sizeVar]: "2.5em",
        },
        paddingLeft: vars.space[4],
        paddingRight: vars.space[4],
        textTransform: "none",
        borderRadius: "100px",
      },
      normal: {
        // set size
        vars: {
          [sizeVar]: "3em",
        },
        paddingLeft: vars.space[7],
        paddingRight: vars.space[7],
      },
    },
    fullWidth: {
      true: { inlineSize: "100%" },
    },
    iconButton: {
      true: {
        padding: 0,
        borderRadius: "100%",
        width: sizeVar,
        alignItems: "center",
        justifyContent: "center",
      },
    },
  },
  defaultVariants: {
    color: "primary",
    size: "normal",
  },
});

export type ButtonVariants = RecipeVariants<typeof button>;
