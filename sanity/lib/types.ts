export type CreateType = {
  _id: string
  _createdAt: string
  _updatedAt: string
  _rev: string
}

export type OmitCreateType<T> = Omit<
  T,
  '_id' | '_createdAt' | '_updatedAt' | '_rev'
>
