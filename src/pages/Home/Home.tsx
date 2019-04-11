import * as React from 'react'
import { connect } from 'react-redux'
import PostComponent from './component/Post/Post'
import PostDetail from './component/PostDetail/PostDetail'
import Post from '../../models/post'
import Posts from '../../models/posts'
import { actions as postActions } from '../../modules/post'
import { actions as postsActions } from '../../modules/posts'
import './Home.scss'

interface Props {
	posts: Posts
	post: Post
	getPosts: () => any
	getPost: (id: number) => any
}

class Home extends React.Component<Props, any> {
	componentDidMount() {
		this.props.getPosts()
	}

	onPostClicked = (id: number) => {
		this.props.getPost(id)
	}

	renderPostList = () => {
		const { loading, error, list } = this.props.posts

		if (loading) {
			return <p>Loading ...</p>
		}

		if (error) {
			return <p>Error: {error}</p>
		}

		return (
			list &&
			list.map(post => (
				<PostComponent onClick={this.onPostClicked} key={post.id} post={post} />
			))
		)
	}

	renderPostDetail = () => {
		const { post } = this.props
		const { loading, error } = post

		if (loading) {
			return <p>Loading ...</p>
		}

		if (error) {
			return <p>Error: {error}</p>
		}

		if (!post.body) {
			return <p>Post Detail</p>
		}

		return <PostDetail post={post} />
	}

	render() {
		return (
			<div className="post-container">
				<div className="post-container__list">{this.renderPostList()}</div>
				<div className="post-container__detail">{this.renderPostDetail()}</div>
			</div>
		)
	}
}

const mapStateToProps = ({ posts, post }) => {
	return {
		posts,
		post,
	}
}

const mapDispatchToProps = {
	getPosts: postsActions.getPosts,
	getPost: postActions.getPost,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home)
