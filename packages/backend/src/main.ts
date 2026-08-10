import { ValidationPipe } from '@nestjs/common'
import * as express from 'express'
import * as https from 'https'
import * as http from 'http'
import { ConfigService } from '@nestjs/config'
import { NestFactory } from '@nestjs/core'
import { ExpressAdapter } from '@nestjs/platform-express'
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger'
import * as cookieParser from 'cookie-parser'

import { validationExceptionFactory, MainExceptionFilter } from '@cvb/exceptions'
import { PrismaService } from '@cvb/prisma'

import { AppModule } from './modules'
import { Config } from './config'
import { useContainer } from 'class-validator'

// import { readFileSync } from 'fs'
// import { resolve } from 'path'

async function bootstrap() {
	const requestListener = express()

	const app = await NestFactory.create(AppModule, new ExpressAdapter(requestListener), {
		// httpsOptions: {
		// 	key: readFileSync(resolve(process.cwd(), 'ssl', 'key.pem'), 'utf8'),
		// 	cert: readFileSync(resolve(process.cwd(), 'ssl', 'cert.pem'), 'utf8'),
		// 	passphrase: 'my secret'
		// }
	})

	app.enableCors({
		origin: ['http://127.0.0.1:3001', 'http://localhost:3001'],
		credentials: true
	})

	app.use(cookieParser())

	app.setGlobalPrefix('/api')

	// pipes
	app.useGlobalPipes(
		new ValidationPipe({
			exceptionFactory: validationExceptionFactory,
			skipMissingProperties: false,
			skipUndefinedProperties: false,
			transform: true,
			whitelist: true
		})
	)

	app.useGlobalFilters(new MainExceptionFilter())

	// swagger
	const builder = new DocumentBuilder()
		.addBearerAuth()
		.setTitle('CV Builder')
		.setDescription('Some description')
		.setVersion('1.0')
		.build()

	const document = SwaggerModule.createDocument(app, builder)

	SwaggerModule.setup('/docs', app, document)

	await app.init()

	const prismaService = app.get(PrismaService)

	await prismaService.enableShutdownHooks(app)

	useContainer(app.select(AppModule), { fallbackOnErrors: true })

	const configService = app.get<ConfigService<Config>>(ConfigService)
	const { port, protocol, ssl } = configService.get('app')

	let server: http.Server

	if (protocol === 'https') {
		server = https.createServer({ ...ssl }, requestListener)
	} else {
		server = http.createServer(requestListener)
	}

	server.listen(port, () => {
		console.log(`[SERVER STARTING] Server listens to ${protocol}://127.0.0.1:${port}`)
	})
}

bootstrap()
