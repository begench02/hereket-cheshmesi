import { CSSProperties, FC } from 'react'
import styles from './input.module.sass'
import clsx from 'clsx'

export const Input: FC<InputProps> = (props) => {
	const { placeholder, style, className, ...rest } = props

	return <input placeholder={placeholder} className={clsx(styles.input, className)} style={style} {...rest} />
}

type InputProps = {
	placeholder?: string
	style?: CSSProperties
	className?: string
}
