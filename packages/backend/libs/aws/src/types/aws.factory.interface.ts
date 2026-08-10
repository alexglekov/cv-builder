import { AwsS3ModuleOptions } from '../options/aws.options'

export interface AwsS3ModuleOptionsFactory {
	useAwsS3OptionsFactory: () => AwsS3ModuleOptions
}
