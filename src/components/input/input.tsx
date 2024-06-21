import { CSSProperties, FC } from 'react'
import styles from './input.module.sass'

export const Input: FC<InputProps> = (props) => {
	const { placeholder, style, className, ...rest } = props

	return <input placeholder={placeholder} {...rest} className={styles.input} />
}

type InputProps = {
	placeholder?: string
	style?: CSSProperties
	className?: string
}
