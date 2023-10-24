import { DEFAULT_PUBLISHER_OPTIONS } from "../config/publisherDefaults.js";

export const filterValidOptions = (options) => {
  const validKeys = Object.keys(DEFAULT_PUBLISHER_OPTIONS);
  return validKeys.reduce((acc, key) => {
    if (options.hasOwnProperty(key)) {
      acc[key] = options[key];
    }
    return acc;
  }, {});
};
