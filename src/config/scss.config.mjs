import fs from 'fs-extra'
const version = process.env.npm_package_version;
const year = new Date().getFullYear()

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
console.log('-------------------------------------------------------------------------------\nCreating _timestamp.scss...\n')
try {
  fs.writeFile('./src/scss/_timestamp.scss', "$version: \"" + version + "\";\n" + '$timestamp: "' + lastCompile + '";\n' + '$year: "' + year + '";')
  console.log('...done!\n-------------------------------------------------------------------------------')
} catch (error) {
  console.error(error + '\n-------------------------------------------------------------------------------')
}
