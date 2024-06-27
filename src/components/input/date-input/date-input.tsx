import { useFormContext } from 'react-hook-form'
import styles from './date-input.module.sass'
import { FC } from 'react'

export const DateInput: FC<DateProps> = (props) => {
	const { name, required, placeholder } = props
	const { register } = useFormContext()

	return (
		<input type='date' {...register(name, { required })} placeholder={placeholder} className={styles.date_input} />
	)
}

type DateProps = {
	name: string
	placeholder?: string
	required?: boolean
}
