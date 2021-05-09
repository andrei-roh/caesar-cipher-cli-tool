const fs = require('fs');
const { program } = require('commander');

module.exports = program
  .storeOptionsAsProperties(false)
  .requiredOption('-s, --shift <number>', 'a shift')
  .option('-i, --input <filename>', 'an input file')
  .option('-o, --output <filename>', 'an output file')
  .requiredOption('-a, --action [type],', 'an action encode/decode')
  .parse(process.argv);

const { action, shift, output } = program.opts();

fs.stat(`${output}`, err => {
  return err === null
  ? (program.correctWay = true)
  : process.on('exit', () => {
    program.correctWay = false;
  });
});

(action === 'undefined')
  ? (
    process.stderr.write('Require Action option!\n'),
    process.exit(1)
  )
  : null;

(action !== 'encode' && action !== 'decode')
  ? (
    process.stderr.write('Incorrect parameter! Only encode/decode has to use for action parameter\n'),
    process.exit(1)
  )
  : null;

(shift === 'undefined')
  ? (
    process.stderr.write('Require Shift option!\n'),
    process.exit(1)
  )
  : null;

(shift.match(/\D+/))
  ? (
    process.stderr.write('Incorrect parameter! Only number has to use as shift parameter\n'),
    process.exit(1)
  )
  : null;
