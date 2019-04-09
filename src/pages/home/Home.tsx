import * as React from 'react'
import { connect } from 'react-redux'
import { getPosts } from '../../actions'

interface Props {
	posts
	getPosts: any
}

class Home extends React.Component<Props, any> {
	componentDidMount() {
		this.props.getPosts()
	}

	render() {
		const { data, loading, error } = this.props.posts

		if (loading) {
			return <p>Loading ...</p>
		}

		if (error) {
			return <p>Error: {error}</p>
		}

		return (
			<div>
				{data &&
					data.map(post => (
						<div key={post.id}>
							<p>userId: {post.userId}</p>
							<p>id: {post.id}</p>
							<p>title: {post.title}</p>
							<p>body: {post.body}</p>
						</div>
					))}
			</div>
		)
	}
}

const mapStateToProps = reducer => {
	return {
		posts: reducer.posts,
	}
}

const mapDispatchToProps = {
	getPosts,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home)
