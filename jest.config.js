module.exports = {
  testEnvironment: "jest-environment-jsdom",
  clearMocks: true,
  setupFilesAfterEnv: ["<rootDir>/jest.setup.js"],
  moduleFileExtensions: ["js", "jsx", "ts", "tsx", "json"],
  rootDir: ".",
  testRegex: ".*\\.(test|spec)\\.[jt]sx?$",
  transform: {
    "^.+\\.(t|j)sx?$": ["@swc/jest"]
  },
  collectCoverageFrom: [
    "**/*.{js,jsx,ts,tsx}",
    "!**/node_modules/**",
    "!**/.next/**",
    "!**/coverage/**",
    "!jest.config.js",
    "!jest.config.ts",
    "!next.config.js",
    "!next.config.ts",
    "!**/*.d.ts"
  ],
  coverageDirectory: "./coverage",
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "\\.module\\.(css|scss)$": "identity-obj-proxy",
    "^@/(.*)$": "<rootDir>/src/$1",
    "^src/(.*)$": "<rootDir>/src/$1"
  },
  transformIgnorePatterns: ["/node_modules/", "^.+\\.module\\.(css|sass|scss)$"],
  testPathIgnorePatterns: ["<rootDir>/node_modules/", "<rootDir>/.next/"]
};
