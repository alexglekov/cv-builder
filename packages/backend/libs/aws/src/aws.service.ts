import {
	GetObjectCommand,
	PutObjectCommand,
	S3Client,
	ListObjectsCommand,
	DeleteObjectCommand,
	PutObjectCommandInput
} from '@aws-sdk/client-s3'
import { getSignedUrl } from '@aws-sdk/s3-request-presigner'
import { Inject, Injectable } from '@nestjs/common'
//import * as fs from 'fs'

import { AwsS3ModuleOptions } from './options/aws.options'
import { AWS_S3_MODULE_TOKEN } from './tokens'
import { GetFileUriParams, GetFileUriResult, PutFileParams, PutFileResult } from './types/aws.interface'

@Injectable()
export class AwsS3Service {
	private readonly s3: S3Client
	private readonly acl: string
	private readonly bucketName: string
	private readonly expiresIn: number

	constructor(@Inject(AWS_S3_MODULE_TOKEN) options: AwsS3ModuleOptions) {
		const { acl, bucketName, expiresIn, ...s3Options } = options

		this.acl = acl
		this.bucketName = bucketName
		this.expiresIn = expiresIn

		this.s3 = new S3Client(s3Options)
	}

	public async putFile({ file, name, subPath }: PutFileParams): Promise<PutFileResult> {
		const key = `${subPath}.${name}`

		const param = {
			ACL: this.acl,
			Body: file,
			Bucket: this.bucketName,
			ContentType: 'application/pdf',
			Key: key,
			Metadata: {
				s: 's'
			}
		} as PutObjectCommandInput

		const command = new PutObjectCommand(param)

		await this.s3.send(command)

		return {
			key
		}
	}

	public async getFileUri({ key }: GetFileUriParams): Promise<GetFileUriResult> {
		const command = new GetObjectCommand({
			Bucket: this.bucketName,
			Key: key
		})

		const signedUri = await getSignedUrl(this.s3, command, {
			expiresIn: this.expiresIn
		})

		return {
			key,
			uri: signedUri
		}
	}

	public async getAllPdfByUserId(userId: number) {
		const listObjectsCommand = new ListObjectsCommand({
			Bucket: this.bucketName
		})
		const { Contents } = await this.s3.send(listObjectsCommand)

		const list = Contents.filter((a) => a.Key.split('.')[0].trim() == userId.toString())

		return list.map((a) => a.Key)
	}

	public async deletePdfByKey(key: string) {
		const deleteObjectCommand = new DeleteObjectCommand({
			Bucket: this.bucketName,
			Key: key
		})
		const result = await this.s3.send(deleteObjectCommand)

		return result
	}
}
