import { DEFAULT_PUBLISHER_OPTIONS } from "../config/publisherDefaults.js";
import { filterValidOptions } from "../utils/publishers.utils.js";

class PublisherBase {
  constructor(options = {}) {
    const filteredOptions = filterValidOptions(options);
    Object.assign(this, { ...DEFAULT_PUBLISHER_OPTIONS, ...filteredOptions });
  }
}

export default PublisherBase;
