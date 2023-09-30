/**
 * The files are needed in public folder for astro serve
 */
import fs from 'fs-extra'
import consoleStamp from 'console-stamp';

consoleStamp(console, {format: ':date("yyyy-mm-dd HH:MM:ss").white.bgBlue'});
let action = 'Copying Astro public files'

console.log('Begin::' + action)
try {
  fs.copySync('./dist/img', './public/img')
} catch (error) {
  consoleStamp(console, {format: ':date("yyyy-mm-dd HH:MM:ss").white.bgRed'});
  console.log('Error::' + action + '\n' + error)
}

try {
  fs.copySync('./dist/css', './public/css')
} catch (error) {
  console.log('Error::' + action + '\n' + error)
}

try {
  fs.copySync('./dist/js', './public/js')
  console.log('End::' + action)
} catch (error) {
  consoleStamp(console, {format: ':date("yyyy-mm-dd HH:MM:ss").white.bgRed'});
  console.log('Error::' + action + '\n' + error + '\n-------------------------------------------------------------------------------')
}
