import BaseModels from './bases/BaseModels'
import Post from './Post'

export default interface Posts extends BaseModels {
	list: [Post]
}
