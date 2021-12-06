import React, { useState } from 'react';
import cn from 'classnames';
import s from './CoctailCard.module.css';

const CoctailCard = (props) => {
	const { title, description, composition, photo, price } = props
	const [isVisibleCard, setIsVisibleCard] = useState(false)
	const [isCardFocused, setIsCardFocused] = useState(false)
	console.log('isVisibleCard', isVisibleCard, 'isCardFocused', isCardFocused);

	const handleOnBlur = () => {
		setIsCardFocused(false)
		setIsVisibleCard(true)
		if (isVisibleCard) {
			setIsVisibleCard(false)
		}
	}




	return (
		<button
			type="button"
			className={cn(s.content, { [s.isVisible]: isVisibleCard, [s.onBlur]: !isVisibleCard })}
			onFocus={() => setIsVisibleCard(true)}
			onBlur={() => setIsCardFocused(false)}
			onClick={() => handleOnBlur} >
			<div className={s.cardHeader}>
				<div className={s.title}>{title}</div>
				{isVisibleCard &&
					<div className={s.closeButton}>
						<button type="button" onClick={() => setIsVisibleCard(false)} >x</button>
					</div>}
			</div>
			<img src={photo} />
			<div>{description}</div>
			<div>{price}</div>
			<div>{composition.map(el => `${el.name},`)}</div>
		</button>
	)
}
export default CoctailCard
