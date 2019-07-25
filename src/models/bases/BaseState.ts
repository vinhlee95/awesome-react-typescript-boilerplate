export type RequestStatus = 'idle' | 'pending' | 'success' | 'error'

export default interface BaseState {
	error: string
	loading: RequestStatus
	saving: RequestStatus
}
