import BaseModels from './baseModels'
import Post from './post'

export default interface Posts extends BaseModels {
	list?: [Post]
}
