const StyleDictionary = require("style-dictionary").extend(
  "./style-dictionary.config.json"
);

const getNestedValues = (property) => {
  if (property.value) {
    return property.value;
  } else if (typeof property === "object") {
    return Object.entries(property).reduce(
      (props, [propertyName, propertyValue]) => {
        return {
          ...props,
          [propertyName]: getNestedValues(propertyValue),
        };
      },
      {}
    );
  }

  return property;
};

StyleDictionary.registerFormat({
  name: "css-in-ts",
  formatter({ dictionary, options, file }) {
    let { properties } = dictionary;

    const output = getNestedValues(properties);

    return `import {
  createGlobalTheme
} from '@vanilla-extract/css';

export const vars = createGlobalTheme(':root',
${JSON.stringify(output, null, 2)}
)`;
  },
});

StyleDictionary.buildAllPlatforms();
