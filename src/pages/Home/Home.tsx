import * as React from 'react'
import {useEffect} from 'react'
import {connect} from 'react-redux'
import {useTranslation} from 'react-i18next'

// Components
import PostComponent from './component/Post/Post'
import PostDetail from './component/PostDetail/PostDetail'
import LanguageSelector from '../../shared/components/LanguageSelector/LanguageSelector'

// Models
import Post from '../../models/Post'
import Posts from '../../models/Posts'

// Modules
import {getPost} from '../../modules/Post'
import {getPosts} from '../../modules/Posts'
import {changeLanguage} from '../../modules/App'

import './Home.scss'

interface Props {
	posts: Posts
	post: Post
	getPosts: () => any
	getPost: (id: number) => any
	changeLanguage: (language: string) => any
}

const Home: React.FunctionComponent<Props> = ({
	post,
	posts,
	getPosts,
	getPost,
	changeLanguage,
}) => {
	const [t] = useTranslation()

	useEffect(() => {
		getPosts()
	}, [])

	const onPostClicked = (id: number) => {
		getPost(id)
	}

	const renderPostList = () => {
		const {loading, error, list} = posts

		if (loading) {
			return <p>Loading ...</p>
		}

		if (error) {
			return <p data-testid="error-post-list">Error: {error}</p>
		}

		return (
			list &&
			list.map(post => (
				<PostComponent onClick={onPostClicked} key={post.id} post={post} />
			))
		)
	}

	const renderPostDetail = () => {
		const {loading, error} = post

		if (loading) {
			return <p>Loading ...</p>
		}

		if (error) {
			return <p data-testid="error-post-detail">Error: {error}</p>
		}

		if (!post.body) {
			return <p>Post Detail</p>
		}

		return <PostDetail post={post} />
	}

	return (
		<div>
			<h2>{t('common.welcome')}</h2>
			<div className="language-selector">
				<LanguageSelector onChangeLanguage={changeLanguage} />
			</div>
			<div className="post-container">
				<div className="post-container__list">{renderPostList()}</div>
				<div className="post-container__detail">{renderPostDetail()}</div>
			</div>
		</div>
	)
}

const mapStateToProps = ({posts, post}) => {
	return {
		posts,
		post,
	}
}

const mapDispatchToProps = {
	changeLanguage,
	getPosts,
	getPost,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home)
