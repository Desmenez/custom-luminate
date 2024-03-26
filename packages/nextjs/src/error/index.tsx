export class PageError {
  constructor(
    public readonly statusCode: number,
    public readonly message: string
  ) {}
}

export class NotFoundError extends PageError {
  constructor() {
    super(404, 'ขออภัย ไม่พบหน้าที่ต้องการ')
  }
}

export class UnauthorizedError extends PageError {
  constructor() {
    super(401, 'ขออภัย คุณไม่มีสิทธิ์เข้าถึงหน้านี้')
  }
}

interface TsRestResponse {
  status: number
}

export function errorFromResponse<TResponse extends TsRestResponse>(response: TResponse) {
  if (response.status === 404) {
    return new NotFoundError()
  }

  return new PageError(response.status, 'ขออภัย มีบางอย่างผิดพลาด')
}

export function throwFromResponse<TResponse extends TsRestResponse>(response: TResponse): never {
  throw errorFromResponse(response)
}
