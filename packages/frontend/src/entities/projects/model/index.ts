export * from './projects.model'
export * as projectsSagasWatchers from './async'
export * from './hooks'
export * as projectsSelectors from './selectors'
export type { IProject } from './projects.types'

export { EditedProjectInfoAction, DeletedProjectInfoAction, NewProjectCreatedAction } from './actions'
