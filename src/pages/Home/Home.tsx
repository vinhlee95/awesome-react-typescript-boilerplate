import * as React from 'react'
import {connect} from 'react-redux'
import i18next from 'i18next'
import {withTranslation} from 'react-i18next'
import {Language} from '../../constants'

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
	t: i18next.TFunction
	i18n: i18next.i18n
	tReady: boolean
}

class Home extends React.Component<Props, any> {
	componentDidMount() {
		this.props.getPosts()
	}

	onPostClicked = (id: number) => {
		this.props.getPost(id)
	}

	renderPostList = () => {
		const {loading, error, list} = this.props.posts

		if (loading) {
			return <p>Loading ...</p>
		}

		if (error) {
			return <p>Error: {error}</p>
		}

		return (
			list &&
			list.map(post => (
				<PostComponent onClick={this.onPostClicked} key={post.id} post={post} />
			))
		)
	}

	renderPostDetail = () => {
		const {post} = this.props
		const {loading, error} = post

		if (loading) {
			return <p>Loading ...</p>
		}

		if (error) {
			return <p>Error: {error}</p>
		}

		if (!post.body) {
			return <p>Post Detail</p>
		}

		return <PostDetail post={post} />
	}

	render() {
		const {t, changeLanguage} = this.props

		return (
			<div>
				<h2>{t('common.welcome')}</h2>
				<div className="language-selector">
					<LanguageSelector changeLanguage={changeLanguage} />
				</div>
				<div className="post-container">
					<div className="post-container__list">{this.renderPostList()}</div>
					<div className="post-container__detail">
						{this.renderPostDetail()}
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = ({posts, post}) => {
	return {
		posts,
		post,
	}
}

const mapDispatchToProps = {
	getPosts,
	getPost,
	changeLanguage,
}

export default connect(
	mapStateToProps,
	mapDispatchToProps,
)(withTranslation()(Home))
