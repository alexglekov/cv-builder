/* eslint-disable max-len */
import PDFDocument from 'pdfkit'
import { getTehnSkills } from './pdf-creator.utilities'

import { IProject, ISkill, ISkillWithExpYears, IUser } from './interface'

// console.log(doc.page.width, doc.page.height); // 595.28 841.89

const MARGIN_LEFT = 40

const EXP_IN_YEARS_X = MARGIN_LEFT + 305
const LAST_USED_X = MARGIN_LEFT + 455

export class CVBuilder {
	public static generateNewCV() {
		const doc = new PDFDocument({
			size: 'a4',
			margin: 0,
			autoFirstPage: false
		})

		return doc
	}

	public static newPage(document: PDFKit.PDFDocument, options?: PDFKit.PDFDocumentOptions) {
		document.addPage(options)
		this.__generatePageLayout(document)
		document.y = 50
	}

	public static addProfessionalSkills(doc: PDFKit.PDFDocument, info: Array<ISkillWithExpYears>, dbtechtypes: string[]) {
		const techTypes = []

		for (const key of dbtechtypes) {
			techTypes.push(key)
		}

		this.newPage(doc)

		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 24)
			.fillColor('#202124')
			.text('Professional skills', MARGIN_LEFT, 65)
		this.__addProfessionalSkillsHeader(doc.page.document, 40)

		const techSkills = info.reduce((techs, value) => {
			if (!techs[value.type]) {
				techs[value.type] = []
			}

			techs[value.type].push(value)

			return techs
		}, {} as Record<string, Array<ISkillWithExpYears>>)

		const filteredTechTypes = techTypes.filter((techType) => techSkills[techType])

		for (const key of filteredTechTypes) {
			const y = this.__addProfessionalSkillsContent(doc.page.document, key, techSkills[key])

			doc
				.moveTo(MARGIN_LEFT - 10, y + 20) // set the current point
				.lineTo(doc.page.width - MARGIN_LEFT + 10, y + 20) // draw another line
				.lineWidth(1)
				.stroke(filteredTechTypes[filteredTechTypes.length - 1] == key ? '#cccccc' : '#C93C3D') // stroke the path

			doc.y = y + 10
		}
	}

	public static __addProfessionalSkillsContent(doc: PDFKit.PDFDocument, type: string, techs: ISkillWithExpYears[]): number {
		const startY = doc.y

		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 10)
			.fillColor('#C93C3D')
			.text(type.toUpperCase(), MARGIN_LEFT, startY + 20, {
				width: 130
			})

		let firstColumnSizeY = doc.y

		doc.y = startY + 10
		let sizeMaxY = 0

		for (const tech of techs) {
			let y = doc.y + 10

			sizeMaxY = Math.max(
				doc.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 10).fillColor('#202124').widthOfString(tech.name, {
					width: 170,
					align: 'center'
				}),
				doc.font('libs/pdf-creator/styles/fonts/Mulish-Medium.ttf', 10).fillColor('#202124').widthOfString(`${tech.total}`, {
					width: 111,
					align: 'center'
				}),
				doc.font('libs/pdf-creator/styles/fonts/Mulish-Medium.ttf', 10).fillColor('#202124').widthOfString(`${tech.last}`, {
					width: 56,
					align: 'center'
				})
			)

			if (doc.y + sizeMaxY > 760) {
				this.newPage(doc)
				this.__addProfessionalSkillsHeader(doc, 20)
				firstColumnSizeY = 0
				y = doc.y + 20
			}

			doc
				.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 10)
				.fillColor('#202124')
				.text(tech.name, MARGIN_LEFT + 130, y, {
					width: 170,
					align: 'center'
				})

			doc
				.font('libs/pdf-creator/styles/fonts/Mulish-Medium.ttf', 10)
				.fillColor('#202124')
				.text(`${tech.total}`, EXP_IN_YEARS_X, y, {
					width: 111,
					align: 'center'
				})
			doc
				.font('libs/pdf-creator/styles/fonts/Mulish-Medium.ttf', 10)
				.fillColor('#202124')
				.text(`${tech.last}`, LAST_USED_X, y, {
					width: 56,
					align: 'center'
				})
		}

		return Math.max(firstColumnSizeY, doc.y)
	}

	public static __addProfessionalSkillsHeader(doc: PDFKit.PDFDocument, margingTop: number) {
		const margingtop = margingTop + doc.y

		doc.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 10).fillColor('#202124').text('SKILLS', MARGIN_LEFT, margingtop)
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 10)
			.fillColor('#202124')
			.text('EXPERIENCE IN YEARS', EXP_IN_YEARS_X, margingtop)
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 10)
			.fillColor('#202124')
			.text('LAST USED', LAST_USED_X, margingtop)

		doc
			.moveTo(MARGIN_LEFT - 10, margingtop + 25) // set the current point
			.lineTo(doc.page.width - MARGIN_LEFT + 10, margingtop + 25) // draw another line
			.lineWidth(2)
			.stroke('#C93C3D') // stroke the path
	}

	public static addProfileInfo(doc: PDFKit.PDFDocument, info: IUser, dbtechtypes: string[]) {
		this.newPage(doc)
		doc.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 24).fillColor('#202124').text(info.name, MARGIN_LEFT, 65)

		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Medium.ttf', 12)
			.fillColor('#353535')
			.text(info.education.toUpperCase(), MARGIN_LEFT, doc.y + 10)

		let specialtyY = doc.y
		const sepX = 210

		// Education
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 12)
			.fillColor('#202124')
			.text('Education', MARGIN_LEFT, specialtyY + 25)
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Medium.ttf', 12)
			.fillColor('#353535')
			.text(info.education, MARGIN_LEFT, doc.y + 5, { width: sepX - 10 })

		// Languages

		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 12)
			.fillColor('#202124')
			.text('Language proficiency', MARGIN_LEFT, doc.y + 15)

		for (const language of info.languages) {
			doc
				.font('libs/pdf-creator/styles/fonts/Mulish-Medium.ttf', 12)
				.fillColor('#353535')
				.text(`${language.Langnames?.name || ''} - ${language.rank}`, MARGIN_LEFT, doc.y + 5, {
					width: sepX - 10
				})
		}

		// Domains
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 12)
			.fillColor('#202124')
			.text('Domains', MARGIN_LEFT, doc.y + 15)
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Medium.ttf', 12)
			.fillColor('#353535')
			.text(info.domains.join(', '), MARGIN_LEFT, doc.y + 5, {
				width: sepX - 70
			})

		let leftY = doc.y

		// biography
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 12)
			.fillColor('#202124')
			.text(
				`${info.specialty} with ${
					info.expInYears < 1 ? `${Math.floor(info.expInYears * 12)} months` : `${info.expInYears} years`
				} of experience.`,
				sepX + 25,
				specialtyY + 25,
				{
					width: 320
				}
			)
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Regular.ttf', 12)
			.fillColor('#353535')
			.text(info.biography, sepX + 25, doc.y + 15, {
				width: 320,
				lineGap: 2,
				align: 'justify'
			})

		const skills = getTehnSkills(info, dbtechtypes)

		for (const skill of skills) {
			const sizeY =
				doc.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 12).heightOfString(skill.title, {
					width: 320
				}) +
				doc.font('libs/pdf-creator/styles/fonts/Mulish-Regular.ttf', 12).heightOfString(skill.body, {
					width: 320
				}) +
				5 +
				(skills[0] === skill ? 25 : 15)

			if (doc.y + sizeY > 760) {
				doc
					.moveTo(sepX, specialtyY + 15)
					.lineTo(sepX, Math.max(leftY, doc.y) + 10) // draw another line
					.stroke('#C93C3D') // stroke the path
				this.newPage(doc)
				specialtyY = doc.y
				leftY = 0
			}

			doc
				.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 12)
				.fillColor('#202124')
				.text(skill.title, sepX + 25, doc.y + (skills[0] === skill ? 25 : 15), {
					width: 320
				})
			doc
				.font('libs/pdf-creator/styles/fonts/Mulish-Regular.ttf', 12)
				.fillColor('#353535')
				.text(skill.body, sepX + 25, doc.y + 5, {
					width: 320
				})
		}

		const rightY = doc.y

		doc
			.moveTo(sepX, specialtyY + 15) // set the current point
			.lineTo(sepX, Math.max(leftY, rightY) + 20) // draw another line
			.stroke('#C93C3D') // stroke the path

		// doc.list
	}

	public static addProjectsInfo(doc: PDFKit.PDFDocument, projects: Array<IProject>, skills: Array<ISkill>) {
		const skillsMap = new Map<number, { name: string; value: string }>(
			skills.map((skill) => [skill.id, { value: skill.name, name: skill.type }])
		)

		this.newPage(doc)

		doc.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 24).fillColor('#202124').text('Projects', MARGIN_LEFT, 65)

		doc.y += 30

		for (const project of projects) {
			if (projects[0] !== project) {
				this.newPage(doc)
			}

			this.__addProject(doc, project, skillsMap)
		}
	}

	private static __addProject(
		doc: PDFKit.PDFDocument,
		project: IProject,
		skills: Map<number, { name: string; value: string }>
	) {
		const projY = doc.y
		const sepX = 300

		// title
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 12)
			.fillColor('#C93C3D')
			.text(project.title.toUpperCase(), MARGIN_LEFT, doc.y + 10, {
				width: sepX - MARGIN_LEFT - 15
			})

		// description
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Regular.ttf', 12)
			.fillColor('#353535')
			.text(project.description, MARGIN_LEFT, doc.y + 20, {
				width: sepX - MARGIN_LEFT - 15,
				align: 'justify'
			})

		const leftMaxY = doc.y

		// Roles
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 12)
			.fillColor('#353535')
			.text('Project roles', sepX + 25, projY + 10, {
				width: 220
			})
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Regular.ttf', 12)
			.fillColor('#353535')
			.text(project.position, sepX + 25, doc.y + 5, {
				width: sepX - 70
			})

		// Period
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 12)
			.fillColor('#353535')
			.text('Period', sepX + 25, doc.y + 15, {
				width: 220
			})
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Regular.ttf', 12)
			.fillColor('#353535')
			.text(
				`${new Date(project.start).toISOString().slice(0, 7).split('-').reverse().join('.')} - ${new Date(project.end)
					.toISOString()
					.slice(0, 7)
					.split('-')
					.reverse()
					.join('.')}`,
				sepX + 25,
				doc.y + 5,
				{
					width: sepX - 70
				}
			)

		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 12)
			.fillColor('#353535')
			.text('Responsibilities & achievements', sepX + 25, doc.y + 15, {
				width: 220
			})

		for (const resp of project.respAndAchs) {
			doc
				.fillColor('#C93C3D')
				.list([' '], sepX + 35, doc.y + (project.respAndAchs[0] === resp ? 5 : 3), {
					continued: true,
					bulletRadius: 2,
					listType: 'bullet'
				})
				.font('libs/pdf-creator/styles/fonts/Mulish-Regular.ttf', 12)
				.fillColor('#353535')
				.text(resp + ';', sepX + 50, doc.y - 2, {
					width: sepX - 70,
					lineGap: 3
				})
		}

		// Environment
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Bold.ttf', 12)
			.fillColor('#353535')
			.text('Environment', sepX + 25, doc.y + 15, {
				width: 220
			})
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Regular.ttf', 12)
			.fillColor('#353535')
			.text(project.technologies.map((id) => skills.get(id)?.value || '').join(', '), sepX + 25, doc.y + 5, {
				width: sepX - 70
			})

		const rightMaxY = doc.y

		doc
			.moveTo(sepX, projY) // set the current point
			.lineTo(sepX, Math.max(leftMaxY, rightMaxY) + 20) // draw another line
			.stroke('#C93C3D') // stroke the path
	}

	private static __generatePageLayout(doc: PDFKit.PDFDocument) {
		this.__generateHeader(doc.page.document)
		this.__generateFooter(doc.page.document)
	}

	private static __generateHeader(doc: PDFKit.PDFDocument) {
		doc
			.image('libs/pdf-creator/styles/logo.jpg', 500.28, 10, { width: 74, height: 16 })
			.moveTo(23, 35) // set the current point
			.lineTo(572.28, 35) // draw another line
			.stroke('#C93C3D') // stroke the path
	}

	private static __generateFooter(doc: PDFKit.PDFDocument) {
		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Medium.ttf', 9)
			.fillColor('#b4b3b3', 1)
			.text(
				`Confidential information Innowise Group. Distribution without the written consent of CV-Builder Group is strictly forbidden.`,
				50,
				790,
				{
					width: doc.page.width / 2.3
				}
			)

		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Medium.ttf', 9)
			.fillColor('#b4b3b3', 1)
			.text('app.cvbuilder.space', doc.page.width / 2.3 + 100, 800, {
				width: doc.page.width / 2.3
			})

		const pages = doc.bufferedPageRange()

		doc
			.font('libs/pdf-creator/styles/fonts/Mulish-Medium.ttf', 10)
			.fillColor('#b4b3b3', 1)
			.text(`${pages.count + pages.start}`, doc.page.width - 50, 798)
	}
}
