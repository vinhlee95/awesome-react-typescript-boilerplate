import BaseModel from './bases/BaseModel'

export default interface Post extends BaseModel {
	userid: number
	title: string
	body: string
}
