import * as React from 'react'
import {fireEvent, render} from 'react-testing-library'
import 'jest-dom/extend-expect'
import LanguageSelector from '../LanguageSelector'
import {enumToValues} from '../../../utils/utils'
import {Language} from '../../../services/i18n'

const renderLanguageSelector = () => {
	// Arrange
	const mockOnChangeLanguage = jest.fn()

	const utils = render(
		<LanguageSelector onChangeLanguage={mockOnChangeLanguage} />,
	)

	return {...utils, mockOnChangeLanguage}
}

describe('<Post/>', () => {
	it('should render Language selectors with all options', () => {
		// Act
		const {getByText} = renderLanguageSelector()

		// Assert
		enumToValues(Language).forEach(language => {
			expect(getByText(`common.${language}`)).toBeInTheDocument()
		})
	})

	it('should be able to select value in selector', () => {
		// Arrange
		const mockSelectedLanguage = Language.en

		// Act
		const {getByTestId, mockOnChangeLanguage} = renderLanguageSelector()

		fireEvent.change(getByTestId('language-selector-component'), {
			target: {value: mockSelectedLanguage},
		})

		// Assert
		expect(mockOnChangeLanguage).toBeCalledTimes(1)
		expect(mockOnChangeLanguage).toBeCalledWith(mockSelectedLanguage)
	})
})
