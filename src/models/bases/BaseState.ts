export type RequestStatus = 'idle' | 'fetching' | 'saving' | 'success' | 'error'

export default interface BaseState {
	error: string
	status: RequestStatus
}
