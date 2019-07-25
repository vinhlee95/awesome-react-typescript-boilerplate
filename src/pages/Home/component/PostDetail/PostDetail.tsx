import * as React from 'react'
import Post from '../../../../models/Post'

interface Props {
	post: Post
}

const PostDetail = (props: Props) => {
	const {post} = props

	return (
		post && (
			<div className="post-detail" key={post.id}>
				<p className="post-detail__id">id: {post.id}</p>
				<p className="post-detail__title">title: {post.title}</p>
				<p className="post-detail__body">body: {post.body}</p>
			</div>
		)
	)
}

export default PostDetail
