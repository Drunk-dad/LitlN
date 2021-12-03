import React from 'react'
import NavBar from '../NavBar'
import s from './Layout.module.css'

const Layout = (props) => {
	const { children } = props;
	return (
		<div className={s.root} >
			<header>
				<NavBar />
			</header>
			<main className={s.main}>{children}</main>
			<footer>footer</footer>
		</div>
	)
}

export default Layout
