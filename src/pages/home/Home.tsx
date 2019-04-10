import * as React from 'react'
import { connect } from 'react-redux'
import { getPosts, getPost } from '../../actions'
import Post from './component/Post/Post'
import PostDetail from './component/PostDetail/PostDetail'
import PostModel from '../../models/post'
import BaseState from '../../models/baseState'
import './Home.scss'

interface Props {
	posts: BaseState<[PostModel]>
	post: BaseState<PostModel>
	getPosts
	getPost
}

class Home extends React.Component<Props, any> {
	componentDidMount() {
		this.props.getPosts()
	}

	onPostClicked = (id: number) => {
		this.props.getPost(id)
	}

	renderPostList = () => {
		const { data, loading, error } = this.props.posts

		if (loading) {
			return <p>Loading ...</p>
		}

		if (error) {
			return <p>Error: {error}</p>
		}

		return (
			data &&
			data.map(post => (
				<Post onClick={this.onPostClicked} key={post.id} post={post} />
			))
		)
	}

	renderPostDetail = () => {
		const { data, loading, error } = this.props.post

		if (loading) {
			return <p>Loading ...</p>
		}

		if (error) {
			return <p>Error: {error}</p>
		}

		if (!data) {
			return <p>Post Detail</p>
		}

		return <PostDetail post={data} />
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
	getPosts,
	getPost,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home)
