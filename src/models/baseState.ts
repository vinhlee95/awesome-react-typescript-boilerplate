export default interface BaseState<T> {
	data?: T
	loading: boolean
	error?: string
}
