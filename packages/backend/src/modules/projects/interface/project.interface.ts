import { ProjectInputDto } from '../dto'

export interface ProjectInterface extends ProjectInputDto {}

export interface ProjectsTechnologiesInterface {
	projectId: number
	technologyId: number
}
