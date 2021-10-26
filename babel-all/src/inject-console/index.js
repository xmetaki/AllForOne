const { transformFromAstSync }  = require("@babel/core")
const parser = require("@babel/parser")
const consolePlugin = require('./plugin/consolePlugin')

const path = require('path')
const fs = require('fs')

const sourceCode = fs.readFileSync(path.join(__dirname, './assets/sourceCode.js'), {
  encoding: 'utf-8'
})

const ast = parser.parse(sourceCode, {
  plugins: ['jsx'],
  sourceType: 'unambiguous'
})

const { code }  = transformFromAstSync(ast,sourceCode, {
  plugins: [consolePlugin],
  filename: 'sourceCode.js'
})

fs.writeFile(path.join(__dirname,'./dist/bundle.js'), code,{
  flag: 'w'
}, err => {
  console.log(err)
})