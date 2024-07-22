import { FC } from 'react'
import styles from './textarea.module.sass'
import { useFormContext } from 'react-hook-form'

export const Textarea: FC<TextareaProps> = (props) => {
	const { placeholder, name } = props
	const { register } = useFormContext()

	return <textarea placeholder={placeholder} className={styles.textarea} {...register(name)} />
}

type TextareaProps = {
	placeholder: string
	name: string
}
