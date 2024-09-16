module.exports = {
    testEnvironment: "jsdom",
    testEnvironmentOptions: {
      customExportConditions: [""],
      url:"http://localhost:5173"
    },
    transform: {
      "^.+\\.(ts|tsx)$": "babel-jest",
      "^.+\\.(js|jsx)$": "babel-jest",
    },
    moduleNameMapper: {
      "\\.(css|less|sass|scss)$": "identity-obj-proxy",
      "\\.(svg)$": "<rootDir>/src/mocks/fileMock.js",
    },
    setupFilesAfterEnv: ["<rootDir>/src/jest.setup.ts"],
    moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  };
  