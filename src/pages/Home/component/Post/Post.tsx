import * as React from 'react'
import PostModel from '../../../../models/Post'
import './Post.scss'

interface Props {
	post: PostModel
	onClick: (id: string) => void
}

const Post = (props: Props) => {
	const {post, onClick} = props

	const onPostClick = () => onClick(post.id)

	return (
		post && (
			<div
				data-testid="post-component"
				className="post"
				key={post.id}
				onClick={onPostClick}
			>
				<p className="post__id">id: {post.id}</p>
				<p className="post__title">title: {post.title}</p>
			</div>
		)
	)
}

export default Post
