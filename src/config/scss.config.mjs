import fs from 'fs-extra'
import pkg from '../../package.json' assert { type: "json" };

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
  fs.writeFile('./src/scss/_timestamp.scss', "$compileTimestamp: \"" + lastCompile + "\"\n")
  console.log('_timestamp.scss created!')
} catch (error) {
  console.error(error)
}

try {
  fs.appendFile('./src/scss/_timestamp.scss', '$pkgVersion: v"' + pkg.version + '"')
  console.log('_timestamp.scss appended!')
} catch (error) {
  console.error(error)
}
