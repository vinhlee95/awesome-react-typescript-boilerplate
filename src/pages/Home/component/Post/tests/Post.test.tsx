import * as React from 'react'
import {fireEvent, render} from 'react-testing-library'
import 'jest-dom/extend-expect'
import Post from '../Post'
import PostModel from '../../../../../models/Post'
import {postBuilder} from '../../../../../utils/mockUtils'

const renderPost = () => {
	// Arrange
	const mockPost: PostModel = postBuilder()
	const mockOnClick = jest.fn()

	const utils = render(<Post post={mockPost} onClick={mockOnClick} />)

	return {...utils, mockPost, mockOnClick}
}

describe('<Post/>', () => {
	it('should render Post', () => {
		// Act
		const {getByText, mockPost} = renderPost()

		// Assert
		expect(getByText(`id: ${mockPost.id}`)).toBeInTheDocument()
		expect(getByText(`title: ${mockPost.title}`)).toBeInTheDocument()
	})

	it('should be able to click on Post', () => {
		// Act
		const {getByTestId, mockPost, mockOnClick} = renderPost()

		fireEvent.click(getByTestId('post-component'))

		// Assert
		expect(mockOnClick).toHaveBeenCalledTimes(1)
		expect(mockOnClick).toHaveBeenCalledWith(mockPost.id)
	})
})
