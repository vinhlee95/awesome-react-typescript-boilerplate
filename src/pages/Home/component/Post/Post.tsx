import * as React from 'react'
import PostModel from '../../../../models/Post'
import {SPost} from './style'

interface Props {
	post: PostModel
	onClick: (id: string) => void
}

const Post = (props: Props) => {
	const {post, onClick} = props

	const onPostClick = () => onClick(post.id)

	return (
		post && (
			<SPost data-testid="post-component" key={post.id} onClick={onPostClick}>
				<p>id: {post.id}</p>
				<p>title: {post.title}</p>
			</SPost>
		)
	)
}

export default Post
