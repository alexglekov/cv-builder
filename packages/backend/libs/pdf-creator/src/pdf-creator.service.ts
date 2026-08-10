import { Injectable } from '@nestjs/common'
import { Writable } from 'stream'
import { IProject, ISkill, ISkillWithExpYears, IUser } from './interface'

import { CVBuilder } from './pdf-creator.CVBuilder'

@Injectable()
export class PdfCreatorService {
	public async createPdf(
		profiles: IUser,
		projects: IProject[],
		skills: ISkill[],
		professionalSkills: ISkillWithExpYears[],
		techtypes: string[]
	) {
		const newCV = CVBuilder.generateNewCV()

		CVBuilder.addProfileInfo(newCV, profiles, techtypes)
		CVBuilder.addProjectsInfo(newCV, projects, skills)

		CVBuilder.addProfessionalSkills(newCV, professionalSkills, techtypes)
		newCV.end()

		const answer = await new Promise((res) => {
			const chunks = []
			let pdfData = null
			const bufferStream = new Writable({
				write(chunk, encoding, callback) {
					chunks.push(chunk)
					callback()
				},
				final(callback) {
					callback()
				}
			})

			bufferStream.on('finish', () => {
				pdfData = Buffer.concat(chunks)
				res(pdfData)
			})

			newCV.pipe(bufferStream)
		})

		return answer
	}
}
