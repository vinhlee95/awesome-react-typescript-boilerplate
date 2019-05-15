export default interface EntityState<T> {
	byId: {[key: string]: T}
	id: string
}
