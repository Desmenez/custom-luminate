type FieldResolver<T, R> = (item: T) => Promise<R>
type ExtendedItem<T, Resolvers> = Resolvers extends [
  FieldResolver<T, infer R extends object>,
  ...infer RestResolvers,
]
  ? ExtendedItem<T, RestResolvers> & R
  : T

export async function extendFields<
  T extends object,
  Resolvers extends readonly FieldResolver<T, object>[],
>(items: T[], ...resolvers: Resolvers): Promise<ExtendedItem<T, Resolvers>[]> {
  return await Promise.all(
    items.map(async (item) => {
      return await extendFieldsItem(item, ...resolvers)
    })
  )
}

export async function extendFieldsItem<
  T extends object,
  Resolvers extends readonly FieldResolver<T, object>[],
>(item: T, ...resolvers: Resolvers): Promise<ExtendedItem<T, Resolvers>> {
  const extensions = await Promise.all(
    resolvers.map(async (resolver) => {
      return await resolver(item)
    })
  )
  const newItem: any = { ...item }
  for (const extension of extensions) {
    Object.assign(newItem, extension)
  }
  return newItem
}
