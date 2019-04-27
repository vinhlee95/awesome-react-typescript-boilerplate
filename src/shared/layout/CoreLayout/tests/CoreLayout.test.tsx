import * as React from 'react'
import 'jest-dom/extend-expect'
import {renderWithRouter} from '../../../../utils/testUtils'
import CoreLayout from '../CoreLayout'

describe('<CoreLayout/>', () => {
	it('should render Nav in CoreLayout', () => {
		// Act
		const {getByTestId} = renderWithRouter(<CoreLayout />)

		// Assert
		expect(getByTestId('nav-component')).toBeInTheDocument()
	})
})
