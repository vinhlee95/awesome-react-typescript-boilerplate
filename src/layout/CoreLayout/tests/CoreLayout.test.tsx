import * as React from 'react'
import 'jest-dom/extend-expect'
import {render} from '../../../utils/testUtils'
import CoreLayout from '../CoreLayout'

describe('<CoreLayout/>', () => {
	it('should render Nav in CoreLayout', () => {
		// Act
		const {getByTestId} = render(<CoreLayout />)

		// Assert
		expect(getByTestId('nav-component')).toBeInTheDocument()
	})
})
