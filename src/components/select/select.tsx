import { FC } from 'react'
import ReactSelect from 'react-select'
import styles from './select.module.sass'

const theme = (theme) => ({
	...theme,
	colors: {
		...theme.colors,
		primary: '#48C126',
		primary25: '#f3f3f3',
		primary50: '#D4F2BB',
	},
})

const colorStyles = {
	control: (styles) => ({ ...styles, border: 'none', minHeight: '50px' }),
	option: (styles, { _, isDisabled, isFocused, isSelected, isActive }) => {
		return {
			...styles,
			color: isActive || isSelected ? '#fff' : '#000',
		}
	},
}

export const Select: FC<SelectProps> = (props) => {
	const { options } = props

	return (
		<ReactSelect
			options={options}
			defaultValue={options[0]}
			theme={theme}
			//@ts-ignore
			styles={colorStyles}
			className={styles.main}
		/>
	)
}

type SelectProps = {
	options: Option[]
}

type Option = {
	value: string
	label: string
}
