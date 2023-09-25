import fs from 'fs-extra'

try {
  fs.copySync('./src/html', './dist')
  console.log('HTML copy success!')
} catch (error) {
  console.error(error)
}
