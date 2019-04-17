import * as React from 'react'
import {Language} from '../../../constants'
import {useTranslation} from 'react-i18next'

interface Props {
	changeLanguage: (language: string) => void
}

const LanguageSelector = (props: Props) => {
	const {t, i18n} = useTranslation()

	const changeLanguage = e => {
		props.changeLanguage(e.target.value)
	}

	return (
		<select defaultValue={i18n.language} onChange={changeLanguage}>
			<option value={Language.en}>{t('common.en')}</option>
			<option value={Language.de}>{t('common.de')}</option>
		</select>
	)
}

export default LanguageSelector
