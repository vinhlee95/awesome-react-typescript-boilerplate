import BaseState from './BaseState'

export default interface ModelState<T> extends BaseState {
	data: T
}
