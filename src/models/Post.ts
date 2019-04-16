import BaseModel from './bases/BaseModel'

export default interface Post extends BaseModel {
	id: number
	userid: number
	title: string
	body: string
}
