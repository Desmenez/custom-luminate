module.exports = function generator(plop) {
  plop.setGenerator('contract', {
    description: 'TS-Rest contract generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your contract name?',
      },
    ],
    actions: function (data) {
      if (!data) return []
      const actions = []

      const camelCaseName = data.name.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase()
      })

      const contractName = `${camelCaseName}Contract`

      actions.push({
        type: 'add',
        path: 'src/features/{{kebabCase name}}/index.ts',
        templateFile: 'templates/contract/index.hbs',
        data: {
          name: data.name,
          contractName: contractName,
        },
      })

      actions.push({
        type: 'add',
        path: 'src/features/{{kebabCase name}}/dto/query.ts',
        templateFile: 'templates/contract/empty-module.hbs',
      })

      actions.push({
        type: 'add',
        path: 'src/features/{{kebabCase name}}/dto/mutation.ts',
        templateFile: 'templates/contract/empty-module.hbs',
      })

      actions.push({
        type: 'add',
        path: 'src/features/{{kebabCase name}}/dto/index.ts',
        templateFile: 'templates/contract/dto/index.hbs',
      })

      return actions
    },
  })
}
