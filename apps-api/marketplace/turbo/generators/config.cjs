const prettier = require('prettier')
const fs = require('fs/promises')
const path = require('path')

module.exports = function generator(plop) {
  plop.setActionType('format', async function (_answers, config, plop) {
    const basePath = plop.getDestBasePath()
    if (config && config.path && plop) {
      const filePath = path.join(basePath, config.path)
      const code = await fs.readFile(filePath, 'utf8')
      const prettierConfig = await prettier.resolveConfig(filePath)
      const formattedCode = await prettier.format(code, {
        ...prettierConfig,
        filepath: filePath,
      })
      await fs.writeFile(filePath, formattedCode, 'utf8')
      return `Formatted ${config.path}`
    }

    throw new Error('Formatting skipped')
  })

  plop.setGenerator('module', {
    description: 'Marketplace module generator',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your module name?',
      },
      {
        type: 'checkbox',
        name: 'structure',
        message: 'What type of module do you want to generate?',
        choices: ['controller', 'service', 'repository'],
      },
    ],
    actions: function (data) {
      if (!data) return []
      const actions = []

      const pascalCaseName = data.name
        .split('-')
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join('')

      const camelCaseName = data.name.replace(/-([a-z])/g, function (g) {
        return g[1].toUpperCase()
      })

      if (data.structure.includes('controller')) {
        actions.push({
          type: 'add',
          path: 'src/modules/{{kebabCase name}}/{{kebabCase name}}.controller.ts',
          templateFile: 'templates/controller.hbs',
          data: {
            name: data.name,
            service: data.structure.includes('service'),
            pascalCaseName,
            camelCaseName,
          },
        })

        const routerPath = 'src/router/index.ts'
        actions.push(
          {
            type: 'append',
            path: routerPath,
            pattern: /\/\/ IMPORT CONTROLLER/g,
            template:
              "import { {{pascalCaseName}}Controller } from '@app/modules/{{kebabCase name}}'",
            data: {
              name: data.name,
              pascalCaseName,
            },
          },
          {
            type: 'append',
            path: routerPath,
            pattern: /\/\/ REGISTER CONTROLLER/g,
            template: '  container.get<{{pascalCaseName}}Controller>()',
            data: {
              name: data.name,
              pascalCaseName,
            },
          },
          {
            type: 'format',
            path: routerPath,
          }
        )
      }

      if (data.structure.includes('service')) {
        actions.push({
          type: 'add',
          path: 'src/modules/{{kebabCase name}}/{{kebabCase name}}.service.ts',
          templateFile: 'templates/service.hbs',
          data: {
            name: data.name,
            repository: data.structure.includes('repository'),
            pascalCaseName,
            camelCaseName,
          },
        })
      }

      if (data.structure.includes('repository')) {
        actions.push({
          type: 'add',
          path: 'src/modules/{{kebabCase name}}/{{kebabCase name}}.repository.ts',
          templateFile: 'templates/repository.hbs',
          data: {
            name: data.name,
            pascalCaseName,
            camelCaseName,
          },
        })
      }

      actions.push({
        type: 'add',
        path: 'src/modules/{{kebabCase name}}/index.ts',
        templateFile: 'templates/index.hbs',
        data: {
          name: data.name,
          service: data.structure.includes('service'),
          repository: data.structure.includes('repository'),
          controller: data.structure.includes('controller'),
        },
      })

      const registerPath = 'src/container/register.ts'
      actions.push(
        {
          type: 'append',
          path: registerPath,
          pattern: /\/\/ IMPORT MODULE/g,
          template: "import '@app/modules/{{kebabCase name}}'",
        },
        {
          type: 'format',
          path: registerPath,
        }
      )

      return actions
    },
  })
}
