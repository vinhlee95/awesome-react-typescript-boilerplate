export type RequestStatus = 'idle' | 'fetching' | 'saving' | 'success' | 'error'

export default interface ModelState<T> {
	data: T
	error: string
	status: RequestStatus
}
