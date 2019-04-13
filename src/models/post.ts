import BaseModel from './bases/baseModel'

export default interface Post extends BaseModel {
	id: number
	userid: number
	title: string
	body: string
}
