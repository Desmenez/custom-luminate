const fs = require('fs')
const glob = require('glob')

/**
 * The function checks if the path is a root workspace
 * @param {string} path - path to check if it is a root workspace
 */
function isRootWorkspace(path) {
  return fs.existsSync(`${path}/pnpm-workspace.yaml`)
}

/**
 * The function finds the root workspace
 * @param {string} path - path to start to find the root workspace
 * @returns
 */
function findRootWorkspace(path = process.cwd()) {
  // If the path has no parent, throw an error
  if (!path) throw new Error('No root workspace found')

  // If the path is root workspace, return it
  if (isRootWorkspace(path)) return path

  const parent = path.split('/').slice(0, -1).join('/')
  return findRootWorkspace(parent)
}

/**
 * The function finds all package.json metadata in workspaces
 * @param {string[]} omitPathPatterns - Regex patterns to omit from the search
 * @returns
 */
function findAllPackageMetadatas(omitPathPatterns = []) {
  const rootWorkspace = findRootWorkspace()
  // const packageJson = require(`${rootWorkspace}/package.json`)
  // const workspaces = packageJson.workspaces.packages || packageJson.workspaces

  // TODO: read from yaml
  const workspaces = ['apps-*/*', 'packages/*', 'softnetics/*']

  // Find all package.json files in workspaces
  const pathToPackageJSONs = []
  for (const w of workspaces) {
    const paths = glob.sync(`${rootWorkspace}/${w}/package.json`, {
      ignore: omitPathPatterns.map((p) => `${rootWorkspace}/${p}/*`),
    })
    pathToPackageJSONs.push(...paths)
  }

  // Get all pacakge names
  const packageMetadatas = pathToPackageJSONs.map((p) => {
    const packageJson = require(p)
    return {
      path: p,
      name: packageJson.name,
    }
  })

  return packageMetadatas
}

module.exports = {
  findAllPackageMetadatas: findAllPackageMetadatas,
}
