"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.adapterFactory = exports.ExternalAdapter = exports.default = void 0;

class ExternalAdapter {
  constructor(cid, config, specs, capabilities, reporter) {
    this.cid = cid;
    this.config = config;
    this.capabilities = capabilities;
    this.specs = specs;
  }

  async run() {
    const self = this;

    return result;
  }
}

exports.ExternalAdapter = ExternalAdapter;
const adapterFactory = {};
exports.adapterFactory = adapterFactory;

adapterFactory.run = async function (...args) {
  const adapter = new ExternalAdapter(...args);
  const result = await adapter.run();
  return result;
};

var _default = adapterFactory;
exports.default = _default;