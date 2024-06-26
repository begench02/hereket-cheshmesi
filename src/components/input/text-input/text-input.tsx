import { CSSProperties, FC } from 'react'
import { useFormContext } from 'react-hook-form'
import clsx from 'clsx'
import styles from './text-input.module.sass'

export const TextInput: FC<InputProps> = (props) => {
	const { placeholder, style, fullWidth = false, className, name, ...rest } = props
	const { register } = useFormContext()

	return (
		<input
			placeholder={placeholder}
			className={clsx(styles.text_input, className)}
			style={style}
			{...register(name)}
			{...rest}
		/>
	)
}

type InputProps = {
	name: string
	placeholder?: string
	fullWidth?: boolean
	style?: CSSProperties
	className?: string
}
