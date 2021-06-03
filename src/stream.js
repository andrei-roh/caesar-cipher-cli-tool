const stream = require('stream');

module.exports = class getStream extends stream.Transform {
  constructor(cipher, action, shift) {
    super();
    this.cipher = cipher;
    this.shift = this._getAction(action, shift)
  }

  _getAction(action, shift) {
    return action === 'encode' ? +shift : -shift;
  }

  _transform(data, encode, callback) {
    this.push(this.cipher(data.toString(), this.shift));
    callback();
  }
};
