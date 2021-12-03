import React from 'react'
import s from './CoctailCard.module.css'

const CoctailCard = (props) => {
	const { title, description, kind, photo, price } = props
	return (
		<div>
			<div>{title}</div>
			<div>{photo}</div>
			<div>{description}</div>
			<div>{price}</div>
		</div>
	)
}
export default CoctailCard