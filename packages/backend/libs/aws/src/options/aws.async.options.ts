import { InjectionToken, Type } from '@nestjs/common'
import { AwsS3ModuleOptionsFactory } from '../types/aws.factory.interface'
import { AwsS3ModuleOptions } from './aws.options'

export interface AwsS3ModuleAsyncOptions {
	imports?: Array<any>
	useFactory?: (...args: any[]) => AwsS3ModuleOptions
	useClass?: Type<AwsS3ModuleOptionsFactory>
	useExisting?: Type<AwsS3ModuleOptionsFactory>
	inject?: Array<InjectionToken>
}
