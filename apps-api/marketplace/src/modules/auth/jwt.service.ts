import { environments } from '@app/common/env'
import { container } from '@app/container'
import { JwtLibrary } from '@softnetics/jwt'

export class JwtService extends JwtLibrary {
  constructor() {
    super({
      secret: environments.JWT_SECRET,
    })
  }
}

container.registerSingleton<JwtService, JwtService>()
