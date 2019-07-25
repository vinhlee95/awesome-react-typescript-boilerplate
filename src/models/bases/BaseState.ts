export type LoadingStatus = 'fetching' | 'saving'

export default interface BaseState {
	error: string
	loading: LoadingStatus
}
