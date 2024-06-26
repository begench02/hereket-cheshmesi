import { CSSProperties, ChangeEvent, FC, useState } from 'react'
import { useFormContext } from 'react-hook-form'
import clsx from 'clsx'
import Minus from 'assets/imgs/icons/minus.svg'
import Plus from 'assets/imgs/icons/plus.svg'
import styles from './number-input.module.sass'

export const NumberInput: FC<NumberInputProps> = (props) => {
	const { name, className, style } = props
	const { register } = useFormContext()
	const [count, setCount] = useState<number | undefined>(1)

	return (
		<div className={clsx(styles.number_input, className)} style={style}>
			<button
				onClick={() => setCount((prev) => prev - 1)}
				className={clsx(styles.number_input__button, styles.number_input__button_minus)}
			>
				<Minus fill='#fff' width='24px' />
			</button>
			<input
				value={count}
				onChange={(e: ChangeEvent<HTMLInputElement>) => setCount(+e.target.value)}
				{...register(name)}
				className={styles.number_input__input}
			/>
			<button
				onClick={() => setCount((prev) => prev + 1)}
				className={clsx(styles.number_input__button, styles.number_input__button_plus)}
			>
				<Plus fill='#fff' width='24px' />
			</button>
		</div>
	)
}

type NumberInputProps = {
	name: string
	className?: string
	style?: CSSProperties
}
