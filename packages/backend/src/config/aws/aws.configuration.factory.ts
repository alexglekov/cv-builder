import { Injectable } from '@nestjs/common'
import { ConfigService } from '@nestjs/config'

import { AwsS3ModuleOptions } from '../../../libs/aws/src/options'

import { AwsS3Configuration } from './aws.configuration.type'
import { AwsS3ModuleOptionsFactory } from '../../../libs/aws/src/types'
import { ObjectCannedACL } from '@aws-sdk/client-s3'

@Injectable()
export class AwsS3ConfigService implements AwsS3ModuleOptionsFactory {
	constructor(private readonly configService: ConfigService<AwsS3Configuration>) {}

	public useAwsS3OptionsFactory(): AwsS3ModuleOptions {
		const { accessKeyId, bucket, endpoint, region, secretAccessKey, expiresIn } = this.configService.get('awsS3')

		return {
			acl: ObjectCannedACL.private,
			bucketName: bucket,
			endpoint,
			apiVersion: 'latest',
			credentials: {
				accessKeyId,
				secretAccessKey
			},
			region,
			forcePathStyle: true, // for MINIO
			expiresIn
		}
	}
}
