const fs = require('fs');
const path = require('path');
const { pipeline } = require('stream');
const getCaesarCipher = require('./src/cipherOfCaesar');
const getStream = require('./src/stream');
const commander = require('./src/commander');
const { action, shift, input, output } = commander.opts();

pipeline(
  input ? fs.createReadStream(path.join(__dirname, input)) : process.stdin,
  new getStream(getCaesarCipher, action, shift),
  output ? fs.createWriteStream(path.join(__dirname, output), { flags: 'a+' }) : process.stdout,
  (err) => {
    return err
    ? console.error('Operation failed.', err)
    : console.log('Operation succeeded.');
});
