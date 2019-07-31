import * as React from 'react'
import {useEffect} from 'react'
import {connect} from 'react-redux'
import {useTranslation} from 'react-i18next'

// Components
import PostComponent from './component/Post/Post'
import PostDetail from './component/PostDetail/PostDetail'
import LanguageSelector from '../../shared/components/LanguageSelector/LanguageSelector'

// Models
import ModelState from '../../models/bases/ModelState'
import Post from '../../models/Post'

// Modules
import {getPost, postSelector} from '../../modules/Post'
import {getPosts, postsSelector} from '../../modules/Posts'
import {changeLanguage} from '../../modules/App'

import './Home.scss'

interface Props {
	posts: ModelState<Post[]>
	post: ModelState<Post>
	getPosts: () => any
	getPost: (id: string) => any
	changeLanguage: (language: string) => any
}

const Home: React.FunctionComponent<Props> = props => {
	const {post, posts, getPosts, getPost, changeLanguage} = props

	const [t] = useTranslation()

	useEffect(() => {
		getPosts()
	}, [])

	const onPostClicked = (id: string) => {
		getPost(id)
	}

	const renderPostList = () => {
		const {loading, error, data} = posts

		if (loading) {
			return <p data-testid="loading-post-list">Loading ...</p>
		}

		if (error) {
			return <p data-testid="error-post-list">Error: {error}</p>
		}

		return (
			data &&
			data.map(post => (
				<PostComponent onClick={onPostClicked} key={post.id} post={post} />
			))
		)
	}

	const renderPostDetail = () => {
		const {loading, error, data} = post

		if (loading) {
			return <p data-testid="loading-post-detail">Loading ...</p>
		}

		if (error) {
			return <p data-testid="error-post-detail">Error: {error}</p>
		}

		if (!data) {
			return <p>Post Detail</p>
		}

		return <PostDetail post={data} />
	}

	return (
		<div data-testid="home-page">
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

const mapStateToProps = state => {
	return {
		posts: postsSelector(state),
		post: postSelector(state),
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
