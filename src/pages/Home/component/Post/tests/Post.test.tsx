import * as React from 'react'
import {render} from 'react-testing-library'
import 'jest-dom/extend-expect'
import Post from '../Post'
import PostModel from '../../../../../models/Post'
import {postBuilder} from '../../../../../utils/testUtils'

const renderPost = () => {
	const mockPost: PostModel = postBuilder()
	const mockOnClick = jest.fn()

	const utils = render(<Post post={mockPost} onClick={mockOnClick} />)

	return {...utils, mockPost}
}

describe('<Post/>', () => {
	it('should render Post', () => {
		// Act
		const {getByText, mockPost} = renderPost()

		// Assert
		expect(getByText(`id: ${mockPost.id}`)).toBeInTheDocument()
		expect(getByText(`title: ${mockPost.title}`)).toBeInTheDocument()
	})
})
