module.exports = {
  collectCoverage: true,
  collectCoverageFrom: ["src/**/*.{js,vue,ts}"],
  coverageReporters: ["text", "lcov"],
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
};
