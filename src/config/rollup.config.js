const typescript = require('@rollup/plugin-typescript')
const pkg = require('../../package.json')

const year = new Date().getFullYear()
const banner = `/*!
 * Bootstrap CSS Tooltips v${pkg.version} (${pkg.homepage})
 * Copyright 2023-${year} ${pkg.author}
 * Licensed under MIT (https://github.com/glewe/bootstrap-css-tooltips/blob/master/LICENSE)
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
