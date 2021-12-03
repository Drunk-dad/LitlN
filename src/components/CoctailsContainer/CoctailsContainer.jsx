import React from 'react'
import CoctailCard from '../CoctailCard/CoctailCard'
import { position } from '../mockData/mockData'
import s from './CoctailsContainer.module.css'

const CoctailsContainer = () => {
	return (
		<div>

			<CoctailCard titile={position.name}
				description={position.description}
				photo={position.photo}
				price={position.price}
			/>
		</div>
	)
}
export default CoctailsContainer
