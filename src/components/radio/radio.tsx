import { FC } from 'react'
import Check from 'assets/imgs/icons/check.svg'
import styles from './radio.module.sass'
import { useFormContext } from 'react-hook-form'

export const Radio: FC<RadioProps> = (props) => {
	const { label, options, inputProps, name } = props
	const { register } = useFormContext()

	return (
		<div className={styles.visited_before}>
			<h3 className={styles.visited_before__title}>{label}</h3>
			{options.map((option) => (
				<div>
					<input
						type='radio'
						id={option}
						className={styles.yes}
						name={label}
						value={option}
						{...register(name)}
						{...inputProps}
					/>
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
	name?: string
	inputProps?: any
}
