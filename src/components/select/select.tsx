import { FC } from 'react'
import ReactSelect from 'react-select'
import styles from './select.module.sass'

export const Select: FC<SelectProps> = (props) => {
	const { options } = props

	return <ReactSelect options={options} className={styles.main} />
}

type SelectProps = {
	options: Option[]
}

type Option = {
	value: string
	label: string
}
