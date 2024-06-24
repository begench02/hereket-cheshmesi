import { FC } from 'react'
import Check from 'assets/imgs/icons/check.svg'
import styles from './radio.module.sass'

export const Radio: FC<RadioProps> = (props) => {
	const { label, options } = props

	return (
		<div className={styles.visited_before}>
			<h4 className={styles.visited_before__title}>{label}</h4>
			{options.map((option) => (
				<div>
					<input type='radio' id={option} className={styles.yes} name={label} value={option} checked />
					<label htmlFor={option}>
						<p>{option}: </p>
						<span>
							<Check className={styles.check__img} />
						</span>
					</label>
				</div>
			))}
		</div>
	)
}

type RadioProps = {
	label: string
	options: string[]
}
