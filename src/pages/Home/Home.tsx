import * as React from 'react'
import {useEffect} from 'react'
import {connect} from 'react-redux'
import {useTranslation} from 'react-i18next'

// Components
import PostComponent from './component/Post/Post'
import PostDetail from './component/PostDetail/PostDetail'
import LanguageSelector from '../../components/LanguageSelector/LanguageSelector'

// Models
import ModelState from '../../models/bases/ModelState'
import Post from '../../models/Post'

// Modules
import {getPost, cancelGetPost} from '../../modules/Post'
import {getPosts, cancelGetPosts} from '../../modules/Posts'
import {changeLanguage} from '../../modules/App'
import {PostContainer, PostDetailcontainer, PostListContainer} from './style'

interface Props {
	posts: ModelState<Post[]>
	post: ModelState<Post>
	getPosts: () => any
	getPost: (id: string) => any
	cancelPostRequest: () => any
	cancelPostsRequest: () => any
	changeLanguage: (language: string) => any
}

const Home: React.FunctionComponent<Props> = props => {
	const {
		post,
		posts,
		getPosts,
		getPost,
		changeLanguage,
		cancelPostsRequest,
		cancelPostRequest,
	} = props

	const [t] = useTranslation()

	useEffect(() => {
		getPosts()

		return () => {
			cancelPostRequest()
			cancelPostsRequest()
		}
	}, [])

	const onPostClicked = (id: string) => {
		getPost(id)
	}

	const renderPostList = () => {
		const {status, error, data} = posts

		if (status === 'fetching') {
			return <p data-testid="loading-post-list">Loading ...</p>
		}

		if (status === 'error') {
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
		const {status, error, data} = post

		if (status === 'fetching') {
			return <p data-testid="loading-post-detail">Loading ...</p>
		}

		if (status === 'error') {
			return <p data-testid="error-post-detail">Error: {error}</p>
		}

		if (status === 'idle') {
			return <p>Post Detail</p>
		}

		return <PostDetail post={data} />
	}

	return (
		<div data-testid="home-page">
			<h2>{t('common.welcome')}</h2>
			<LanguageSelector onChangeLanguage={changeLanguage} />
			<PostContainer>
				<PostListContainer>{renderPostList()}</PostListContainer>
				<PostDetailcontainer>{renderPostDetail()}</PostDetailcontainer>
			</PostContainer>
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
	cancelPostRequest: cancelGetPost,
	cancelPostsRequest: cancelGetPosts,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(Home)
