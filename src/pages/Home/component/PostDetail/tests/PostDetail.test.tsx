import * as React from 'react'
import PostDetail from '../PostDetail'
import 'jest-dom/extend-expect'
import Post from '../../../../../models/Post'
import {postBuilder} from '../../../../../utils/mockUtils'
import {render} from '../../../../../utils/testUtils'

describe('<PostDetail/>', () => {
	it('should render PostDetail', () => {
		// Arrange
		const mockPost: Post = postBuilder()

		// Act
		const {getByText} = render(<PostDetail post={mockPost} />)

		// Assert
		expect(getByText(`id: ${mockPost.id}`)).toBeInTheDocument()
		expect(getByText(`title: ${mockPost.title}`)).toBeInTheDocument()
		expect(getByText(`body: ${mockPost.body}`)).toBeInTheDocument()
	})
})
