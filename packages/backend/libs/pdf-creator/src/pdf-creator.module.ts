import { Module } from '@nestjs/common'
import { PdfCreatorService } from './pdf-creator.service'

@Module({
	providers: [PdfCreatorService],
	exports: [PdfCreatorService]
})
export class PdfCreatorModule {}
