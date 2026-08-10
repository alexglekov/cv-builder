import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { JwtModule } from '@nestjs/jwt'
import { UsersModule } from '../users'

import { GoogleAuth20Controller, AuthController, LocalAuthController } from './controllers'
import { RefreshTokenMiddleware } from './middlewares'
import { AuthRepository } from './repositories'
import { GoogleAuth20Service, AuthService, LocalAuthService } from './services'

@Module({
	controllers: [LocalAuthController, GoogleAuth20Controller, AuthController],
	imports: [JwtModule, UsersModule],
	providers: [GoogleAuth20Service, AuthService, LocalAuthService, AuthRepository]
})
export class AuthModule implements NestModule {
	public configure(consumer: MiddlewareConsumer) {
		consumer.apply(RefreshTokenMiddleware).forRoutes('*')
	}
}
