export interface ErrorInterface {
  [key: string]: ErrorInterfaceDetail
}

export interface ErrorInterfaceDetail {
  code?: string
  message: string
  description?: string
  display?: string
}
