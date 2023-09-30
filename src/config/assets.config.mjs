import fs from 'fs-extra'
import consoleStamp from 'console-stamp';

consoleStamp(console, {format: ':date("yyyy-mm-dd HH:MM:ss").white.bgBlue'});
let action = 'Copying Astro public files'

console.log('Begin::' + action)
try {
  fs.copySync('./src/assets/img', './dist/img')
  console.log('End::' + action)
} catch (error) {
  console.log('Error::Copying asset files\n' + error + '\n-------------------------------------------------------------------------------')
}
