import { CSSProperties, ChangeEvent, FC, useState } from 'react'
import clsx from 'clsx'
import inputStyles from '../input.module.sass'
import Minus from 'assets/imgs/icons/minus.svg'
import Plus from 'assets/imgs/icons/plus.svg'
import styles from './number-input.module.sass'

export const NumberInput: FC<NumberInputProps> = (props) => {
	const { placeholder, className, style, label } = props
	const [count, setCount] = useState<number | undefined>(1)

	return (
		<div>
			<p>{label}</p>
			<div className={clsx(styles.main, className)} style={style}>
				<button onClick={() => setCount((prev) => prev - 1)} className={clsx(styles.btn, styles.btn__minus)}>
					<Minus fill='#fff' width='24px' />
				</button>
				<input
					value={count}
					onChange={(e: ChangeEvent<HTMLInputElement>) => setCount(+e.target.value)}
					className={clsx(inputStyles.input, styles.input)}
				/>
				<button onClick={() => setCount((prev) => prev + 1)} className={clsx(styles.btn, styles.btn__plus)}>
					<Plus fill='#fff' width='24px' />
				</button>
			</div>
		</div>
	)
}

type NumberInputProps = {
	placeholder: string
	className?: string
	style?: CSSProperties
	label: string
}
