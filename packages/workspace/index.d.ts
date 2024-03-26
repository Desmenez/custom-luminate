interface PackageMetadata {
  name: string
  path: string
}

export function findAllPackageMetadatas(omitPathPatterns: string[]): PackageMetadata[]
