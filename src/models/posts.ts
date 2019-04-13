import BaseModels from './bases/baseModels'
import Post from './post'

export default interface Posts extends BaseModels {
	list: [Post]
}
