
class ExternalAdapter {
  constructor(cid, config, specs, capabilities, reporter) {
    this.cid = cid;
    this.config = config;
    this.capabilities = capabilities;
    this.specs = specs;

    if (this.config.externalFrameworkOptions && this.config.externalFrameworkOptions.adapter) {
      this.adapter = new this.config.externalFrameworkOptions.adapter(cid, config, specs, capabilities, reporter);
    }
  }

  async init() {
    const self = this;
    let result = null;
    if (this.adapter) {
      result = await this.adapter.init();
    }
    return result;
  }
  
  async run() {
    const self = this;
    let result = null;
    if (this.adapter) {
      result = await this.adapter.run();
    }
    return result;
  }
}

const adapterFactory = {};
adapterFactory.init = async function (...args) {
  const adapter = new ExternalAdapter(...args);
  const result = await adapter.run();
  return result;
};

export default adapterFactory;
export { ExternalAdapter, adapterFactory };
