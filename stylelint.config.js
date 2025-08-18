export default {
  extends: [
    "stylelint-config-standard", // Use a standard set of rules as a base
    "stylelint-config-html",
  ],
  plugins: [
    "stylelint-selector-bem-pattern", // Add the BEM plugin
  ],
  rules: {
    // Configure the BEM pattern for class selectors
    "plugin/selector-bem-pattern": {
      preset: "bem", // This uses a common BEM pattern
      // Example of what 'bem' preset enforces:
      // .block {}
      // .block__element {}
      // .block--modifier {}
      // .block__element--modifier {}
    },
    // Optional: relax the default kebab-case rule for selectors,
    // as BEM uses different conventions.
    "selector-class-pattern": null,
  },
};
