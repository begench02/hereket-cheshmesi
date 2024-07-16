import { FC } from 'react'
import Check from 'assets/imgs/icons/check.svg'
import styles from './radio.module.sass'
import { useFormContext } from 'react-hook-form'

export const Radio: FC<RadioProps> = (props) => {
	const { options, inputProps, name } = props
	const { register } = useFormContext()

	return (
		<div className={styles.visited_before}>
			{options.map((option, index) => (
				<div key={`${option}-${index}`}>
					<input
						type='radio'
						id={option}
						className={styles.yes}
						name={name}
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
	options: string[]
	name?: string
	inputProps?: any
}
