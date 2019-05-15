import * as React from 'react'
import {useEffect} from 'react'
import {connect} from 'react-redux'
import {useTranslation} from 'react-i18next'

import PostComponent from './component/Post/Post'
import PostDetail from './component/PostDetail/PostDetail'
import LanguageSelector from '../../shared/components/LanguageSelector/LanguageSelector'

import Post from '../../models/Post'

import {getPost} from '../../modules/Post'
import {getPosts} from '../../modules/Posts'
import {changeLanguage} from '../../modules/App'

import './Home.scss'
import {
	getDataSelector,
	getErrorSelector,
	getListDataSelector,
	getLoadingSelector,
} from '../../modules/reducers'
import ModuleName from '../../modules/commons/ModuleName'

interface Props {
	posts: Post[]
	postsLoading: boolean
	postsError: string
	post: Post
	postLoading: boolean
	postError: string
	getPosts: () => any
	getPost: (id: number) => any
	changeLanguage: (language: string) => any
}

const Home: React.FunctionComponent<Props> = props => {
	const [t] = useTranslation()
	const {
		post,
		postLoading,
		postError,
		posts,
		postsLoading,
		postsError,
		getPosts,
		getPost,
		changeLanguage,
	} = props

	useEffect(() => {
		getPosts()
	}, [])

	const onPostClicked = (id: number) => {
		getPost(id)
	}

	const renderPostList = () => {
		if (postsLoading) {
			return <p data-testid="loading-post-list">Loading ...</p>
		}

		if (postsError) {
			return <p data-testid="error-post-list">Error: {postsError}</p>
		}

		return (
			posts &&
			posts.map(post => (
				<PostComponent onClick={onPostClicked} key={post.id} post={post} />
			))
		)
	}

	const renderPostDetail = () => {
		if (postLoading) {
			return <p data-testid="loading-post-detail">Loading ...</p>
		}

		if (postError) {
			return <p data-testid="error-post-detail">Error: {postError}</p>
		}

		if (!post) {
			return <p>Post Detail</p>
		}

		return <PostDetail post={post} />
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
		posts: getListDataSelector(state, ModuleName.posts),
		postsLoading: getLoadingSelector(state, ModuleName.posts),
		postsError: getErrorSelector(state, ModuleName.posts),
		post: getDataSelector(state, ModuleName.post),
		postLoading: getLoadingSelector(state, ModuleName.post),
		postError: getErrorSelector(state, ModuleName.post),
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
