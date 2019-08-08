import * as React from 'react'
import Post from '../../../../models/Post'

interface Props {
	post: Post
}

const PostDetail = (props: Props) => {
	const {post} = props

	return (
		post && (
			<div key={post.id}>
				<p>id: {post.id}</p>
				<p>title: {post.title}</p>
				<p>body: {post.body}</p>
			</div>
		)
	)
}

export default PostDetail
