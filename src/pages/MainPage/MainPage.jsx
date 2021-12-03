import React from 'react'
import CoctailsContainer from '../../components/CoctailsContainer/CoctailsContainer'
import s from './MainPage.module.css'

const MainPage = () => {
	return (
		<div className={s.rootPage}>
			<CoctailsContainer />
		</div>
	)
}

export default MainPage
