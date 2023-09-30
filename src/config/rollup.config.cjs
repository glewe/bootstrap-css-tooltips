const typescript = require('@rollup/plugin-typescript')
const pkg = require('../../package.json')
const year = new Date().getFullYear()
let lastCompile = new Date()
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
  ' (UTC)'

const banner = `/*!
 * ${pkg.title}
 * Version ${pkg.version}
 * Copyright 2023-${year} ${pkg.author} <${pkg.homepage}>
 * Source: <${pkg.repository.url}>
 * Licensed under ${pkg.license}
 * Compiled: ${lastCompile}
 */`

module.exports = {
  input: 'src/ts/bsc-tooltips.ts',
  output: {
    file: 'dist/js/bsc-tooltips.js',
    format: 'umd',
    banner,
    name: 'bsc-tooltips',
  },
  plugins: [typescript()]
}
