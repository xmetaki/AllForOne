const parse = require("@babel/parser")
const traverse = require("@babel/traverse").default
const generate = require("@babel/generator").default
const types = require("@babel/types")

const sourceCode = `
  console.log('sup?');
  
  function fn() {
    console.info('fine');
  }
  fn()

  // class Superme {
  //   say() {
  //     console.debug('extremely high');
  //   }

  //   render() {
  //     return <div>{console.error('hell no')}</div>
  //   }
  // }
`

const ast = parse.parse(sourceCode, {
  sourceType: 'unambiguous',
  plugins: ['jsx']
})

const validTargetNames = ['log', 'debug', 'error', 'info'].map(item => `console.${item}`)

traverse(ast, {
  CallExpression(path) {
    const targetName = path.get('callee').toString()
    if (validTargetNames.includes(targetName)) {
      const { line, column } = path.node.loc.start
      path.node.arguments.unshift(types.stringLiteral(`[line,column]: ${line} ${column} \n[result]:`))
    }
  }
})

const { code, map } = generate(ast) 

// console.log(code, map)

eval(code)