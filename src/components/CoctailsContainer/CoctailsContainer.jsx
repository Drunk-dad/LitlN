import React from 'react'
import { positions } from '../../mockData/mockData'
import CoctailCard from '../CoctailCard/CoctailCard'
import s from './CoctailsContainer.module.css'

const CoctailsContainer = () => {
	return (
		<>
			<h3 className={s.title}>Коктейли</h3>
			<div className={s.root}>
				{positions.map(position =>
					<CoctailCard
						key={position.id}
						title={position.name}
						description={position.description}
						photo={position.photo}
						price={position.price}
						composition={position.composition}
					/>
				)}
			</div>
		</>
	)
}
export default CoctailsContainer
