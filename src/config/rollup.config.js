const typescript = require('@rollup/plugin-typescript')
const pkg = require('../../package.json')

const year = new Date().getFullYear()
const banner = `/*!
 * AdminLTE v${pkg.version} (${pkg.homepage})
 * Copyright 2014-${year} ${pkg.author}
 * Licensed under MIT (https://github.com/ColorlibHQ/AdminLTE/blob/master/LICENSE)
 */`

module.exports = {
  input: 'src/ts/bsc-tooltips.ts',
  output: {
    file: 'dist/js/bsc-tooltips.js',
    format: 'umd',
    banner,
    name: 'bsc-tooltips'
  },
  plugins: [typescript()]
}
