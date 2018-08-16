export default class Base {
  constructor(options) {
    this.setOptions(options);
  }

  setOptions(options) {
    this.options = Object.assign(this.options || {}, options);
  }
}
