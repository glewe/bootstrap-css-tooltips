import fs from 'fs-extra'

try {
  fs.copySync('./src/assets/img', './dist/img')
  console.log('Assets copy success!')
} catch (error) {
  console.error(error)
}
