const calleeNames = ['debug', 'log', 'error', 'info'].map(item => `console.${item}`)

const consolePlugin = ({ template, types }) => {
  return {
    visitor: {
      CallExpression(path, state) {
        if (path.node.isNew) {
          return
        }
        const fileName = `[${state.file.opts.filename || 'Unknown File'}]:`
        const calleeName = path.get('callee').toString()
        if (calleeNames.includes(calleeName)) {
          const { line, column } = path.node.loc.start
          const newNode = template.expression(`console.log("${fileName}(${line},${column})")`)()
          newNode.isNew = true
          if(path.findParent(path => path.isJSXElement())) {
            path.replaceWith(types.arrayExpression([newNode, path.node]))
            path.skip()
          } else {
            path.insertBefore(newNode)
          }
        }
      }
    }
  }
}

module.exports = consolePlugin