import * as React from 'react'
import {Language} from '../../../constants'
import {useTranslation} from 'react-i18next'

interface Props {
	onChangeLanguage: (language: string) => void
}

const LanguageSelector = (props: Props) => {
	const [t, i18n] = useTranslation()

	const changeLanguage = e => {
		props.onChangeLanguage(e.target.value)
	}

	return (
		<select
			data-testid="language-selector-component"
			defaultValue={i18n.language}
			onChange={changeLanguage}
		>
			<option value={Language.en}>{t('common.en')}</option>
			<option value={Language.de}>{t('common.de')}</option>
		</select>
	)
}

export default LanguageSelector
