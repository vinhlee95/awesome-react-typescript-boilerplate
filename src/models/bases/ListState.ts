export default interface ListState<T> {
	byIds: {[key: string]: T}
	allIds: string[]
}
