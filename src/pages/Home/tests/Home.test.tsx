import * as React from 'react'
import 'jest-dom/extend-expect'
import {fireEvent, wait} from 'react-testing-library'
import {renderWithStore} from '../../../utils/testUtils'
import {postBuilder} from '../../../utils/mockUtils'
import {getRequest} from '../../../services/api'
import Home from '../Home'

jest.mock('../../../services/api', () => {
	return {getRequest: jest.fn()}
})

describe('<Home/>', () => {
	let mockGetRequest
	let mockPosts
	let mockPost1

	let mockErrorMessage

	beforeEach(() => {
		// Arrange

		mockPost1 = postBuilder()
		const mockPost2 = postBuilder()
		const mockPost3 = postBuilder()

		mockPosts = [mockPost1, mockPost2, mockPost3]

		mockErrorMessage = 'This is the error'

		mockGetRequest = getRequest as jest.Mock<any>
		mockGetRequest.mockResolvedValue(mockPosts)
	})

	it('should render Welcome text', () => {
		// Act
		const {getByText} = renderWithStore(<Home />)

		// Assert
		expect(getByText('common.welcome')).toBeInTheDocument()
	})

	it('should fetch Posts on mount and display them', async () => {
		// Act
		const {getByText, getByTestId, queryByTestId} = renderWithStore(<Home />)

		// Assert
		expect(mockGetRequest).toHaveBeenCalledTimes(1)
		expect(getByTestId('loading-post-list')).toBeInTheDocument()

		await wait(() => expect(queryByTestId('loading-post-list')).toBeNull())

		mockPosts.forEach(mockPost => {
			expect(getByText(`id: ${mockPost.id}`)).toBeInTheDocument()
			expect(getByText(`title: ${mockPost.title}`)).toBeInTheDocument()
		})
	})

	it('should display error when fetch Posts fail', async () => {
		// Arrange
		mockGetRequest.mockRejectedValueOnce(new Error(mockErrorMessage))

		// Act
		const {getByTestId, queryByTestId} = renderWithStore(<Home />)

		// Assert
		expect(getByTestId('loading-post-list')).toBeInTheDocument()

		await wait(() => expect(queryByTestId('loading-post-list')).toBeNull())

		expect(getByTestId('error-post-list')).toHaveTextContent(
			`Error: ${mockErrorMessage}`,
		)
	})

	it('should render Post Detail as default text', () => {
		// Act
		const {getByText} = renderWithStore(<Home />)

		expect(getByText('Post Detail')).toBeInTheDocument()
	})

	it('should fetch Post Detail when click on single Post', async () => {
		// Arrange
		mockGetRequest.mockResolvedValueOnce(mockPosts) // Fetch Posts
		mockGetRequest.mockResolvedValueOnce(mockPost1) // Fetch Post Detail

		// Act
		const {
			getByText,
			getAllByTestId,
			getByTestId,
			queryByTestId,
		} = renderWithStore(<Home />)

		await wait(() =>
			expect(getAllByTestId('post-component')[0]).toBeInTheDocument(),
		)

		fireEvent.click(getAllByTestId('post-component')[0])

		expect(getByTestId('loading-post-detail')).toBeInTheDocument()

		await wait(() => expect(queryByTestId('loading-post-detail')).toBeNull())

		expect(getByText(`id: ${mockPost1.id}`)).toBeInTheDocument()
		expect(getByText(`title: ${mockPost1.title}`)).toBeInTheDocument()
		expect(getByText(`body: ${mockPost1.body}`)).toBeInTheDocument()
	})

	it('should display error when fetch single Post fail', async () => {
		// Arrange
		mockGetRequest.mockResolvedValueOnce(mockPosts) // Fetch Posts
		mockGetRequest.mockRejectedValueOnce(new Error(mockErrorMessage)) // Fetch Post Detail

		// Act
		const {getAllByTestId, getByTestId, queryByTestId} = renderWithStore(
			<Home />,
		)

		await wait(() =>
			expect(getAllByTestId('post-component')[0]).toBeInTheDocument(),
		)

		fireEvent.click(getAllByTestId('post-component')[0])

		expect(getByTestId('loading-post-detail')).toBeInTheDocument()

		await wait(() => expect(queryByTestId('loading-post-detail')).toBeNull())

		expect(getByTestId('error-post-detail')).toHaveTextContent(
			`Error: ${mockErrorMessage}`,
		)
	})
})
