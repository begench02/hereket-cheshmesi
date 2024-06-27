import { CSSProperties, FC } from 'react'
import { useFormContext } from 'react-hook-form'
import clsx from 'clsx'
import styles from './text-input.module.sass'

export const TextInput: FC<InputProps> = (props) => {
	const { placeholder, required = false, style, fullWidth = false, className, name, ...rest } = props
	const {
		register,
		formState: { errors },
	} = useFormContext()

	return (
		<input
			placeholder={placeholder}
			className={clsx(styles.text_input, errors[name] && styles['text_input--error'], className)}
			style={style}
			{...register(name, { required })}
			{...rest}
		/>
	)
}

type InputProps = {
	name: string
	required?: boolean
	placeholder?: string
	fullWidth?: boolean
	style?: CSSProperties
	className?: string
}
