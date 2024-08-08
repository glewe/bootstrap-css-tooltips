import fs from 'fs-extra'
import pkg from '../../package.json' with { type: "json" };
import consoleStamp from 'console-stamp';

const version = pkg.version;
const year = new Date().getFullYear()

consoleStamp(console, {format: ':date("yyyy-mm-dd HH:MM:ss").white.bgBlue'});
const action = 'Creating _timestamp.scss'

var lastCompile = new Date();
//
// Format to custom ISO 8601
//
lastCompile =
  lastCompile.getUTCFullYear() + '-' +
  String(lastCompile.getUTCMonth() + 1).padStart(2, '0') + '-' +
  String(lastCompile.getUTCDate()).padStart(2, '0') + ' ' +
  String(lastCompile.getUTCHours()).padStart(2, '0') + ':' +
  String(lastCompile.getUTCMinutes()).padStart(2, '0') +
  ':' + String(lastCompile.getUTCSeconds()).padStart(2, '0') +
  ' (UTC)';

//
// Create timestamp file to import in .scss files
//
console.log('Begin::' + action)
try {
  fs.writeFile('./src/scss/_timestamp.scss', "$version: \"" + version + "\" !default;\n" + '$timestamp: "' + lastCompile + '" !default;\n' + '$year: "' + year + '" !default;\n')
  console.log('End::' + action)
} catch (error) {
  consoleStamp(console, {format: ':date("yyyy-mm-dd HH:MM:ss").white.bgRed'});
  console.log('Error::' + action + '\n' + error + '\n-------------------------------------------------------------------------------')
}
