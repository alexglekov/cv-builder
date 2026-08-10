import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common'
import { ConfigModule } from '@nestjs/config'

import { PrismaModule } from '@cvb/prisma'
import { configLoader, envValidator } from '../config'

import { AuthModule, JwtMiddleware } from './auth'
import { UsersModule } from './users'
import { JwtModule } from '@nestjs/jwt'
import { ProfileModule } from './profiles'
import { ProjectsModule } from './projects'
import { AwsS3Module } from '@cvb/aws'
import { AwsS3ConfigService } from '../config/aws'
import { StorageModule } from './storage/storage.module'
import { AdminModule } from './admin'
import { PdfCreatorModule } from 'libs/pdf-creator'
import { VacanciesModule } from './vacancies/vacancies.module'

@Module({
	imports: [
		AwsS3Module.forRootAsync({
			useClass: AwsS3ConfigService
		}),
		ConfigModule.forRoot({
			// ignoreEnvFile: true, // for prod and using docker-compose
			isGlobal: true,
			load: configLoader,
			validate: envValidator
		}),
		JwtModule,
		PrismaModule,
		UsersModule,
		AuthModule,
		ProfileModule,
		ProjectsModule,
		StorageModule,
		AdminModule,
		PdfCreatorModule,
		VacanciesModule
	]
})
export class AppModule implements NestModule {
	public configure(consumer: MiddlewareConsumer) {
		consumer.apply(JwtMiddleware).forRoutes('*')
	}
}
