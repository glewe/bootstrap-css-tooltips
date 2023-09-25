import fs from 'fs-extra'

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
try {
  fs.writeFile('./src/scss/_timestamp.scss', '$compileTimestamp: "' + lastCompile + '"')
  console.log('_timestamp.scss created!')
} catch (error) {
  console.error(error)
}
