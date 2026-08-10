import { Provider, DynamicModule } from '@nestjs/common'

import { AwsS3Service } from './aws.service'
import { AwsS3ModuleAsyncOptions } from './options/aws.async.options'
import { AwsS3ModuleOptions } from './options/aws.options'
import { AWS_S3_MODULE_TOKEN } from './tokens'
import { AwsS3ModuleOptionsFactory } from './types'

export class AwsS3Module {
	public static forRoot(options: AwsS3ModuleOptions): DynamicModule {
		return {
			module: AwsS3Module,
			imports: [],
			global: true,
			providers: [
				{
					provide: AWS_S3_MODULE_TOKEN,
					useValue: options
				},
				AwsS3Service
			],
			exports: [AwsS3Service]
		}
	}

	public static forRootAsync(options: AwsS3ModuleAsyncOptions): DynamicModule {
		const providers: Array<Provider> = []

		if (options.useFactory) {
			providers.push({
				inject: options.inject || [],
				provide: AWS_S3_MODULE_TOKEN,
				useFactory: options.useFactory
			})
		} else {
			if (options.useClass || options.useExisting) {
				providers.push({
					inject: [options.useExisting || options.useClass],
					provide: AWS_S3_MODULE_TOKEN,
					useFactory: (factory: AwsS3ModuleOptionsFactory) => factory.useAwsS3OptionsFactory()
				})

				if (options.useClass) {
					providers.push({
						useClass: options.useClass,
						provide: options.useClass
					})
				}
			}
		}

		providers.push(AwsS3Service)

		return {
			module: AwsS3Module,
			global: true,
			imports: options.imports || [],
			providers,
			exports: [AwsS3Service]
		}
	}
}
