import { CSSProperties, FC } from 'react'
import clsx from 'clsx'
import styles from './input.module.sass'
import { useFormContext } from 'react-hook-form'

export const Input: FC<InputProps> = (props) => {
	const { placeholder, style, fullWidth = false, className, name, ...rest } = props
	const { register } = useFormContext()

	return (
		<input
			placeholder={placeholder}
			className={clsx(styles.input, className)}
			style={{ ...style, width: fullWidth ? '100%' : undefined }}
			{...register(name)}
			{...rest}
		/>
	)
}

type InputProps = {
	placeholder?: string
	fullWidth?: boolean
	name: string
	style?: CSSProperties
	className?: string
}
