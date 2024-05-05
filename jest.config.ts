import type { Config } from "jest";

const config: Config = {
  clearMocks: true,
  collectCoverage: true,
  transform: {
    "^.+\\.(t|j)sx?$": "@swc/jest",
  },
  verbose: true,
};

export default config;
