import { MAP_IMPLEMENT_BY_SUBCLASS } from "../../constants/errors.js";

class ApiBase {
  constructor(config) {
    this.name = config.name;
    this.baseUrl = config.baseUrl;
    this.appType = config.appType;
    this.apiKey = config.apiKey;
    this.count = config.count;
    this.listProperty = config.listProperty;
    this.typeProperty = config.typeProperty;
  }

  map(apiData) {
    throw new Error(MAP_IMPLEMENT_BY_SUBCLASS);
  }
}

export default ApiBase;
