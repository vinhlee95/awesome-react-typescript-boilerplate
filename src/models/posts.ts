import BaseModel from './baseModel'
import Post from './post'

export default interface Posts extends BaseModel {
	list?: [Post]
}
