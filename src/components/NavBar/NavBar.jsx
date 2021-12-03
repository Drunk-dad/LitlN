import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import s from './NavBar.module.css'

const NavBar = () => {
	const [isVisible, setIsVisible] = useState(false)
	console.log(isVisible);
	return (
		<div className={s.wrapper}>
			<button type="button" className={s.closeButton} onClick={() => setIsVisible(!isVisible)}>X</button>
			{isVisible && (
				<div className={s.navBar}>
					<Navbar bg="dark" variant="dark"  >
						<Container className={s.container}>
							<Nav className="me-auto" >
								<Nav.Link href="/main">Dishes</Nav.Link>
								<Nav.Link href="/menu">Drinks</Nav.Link>
								<Nav.Link href="#pricing">Coctails</Nav.Link>
							</Nav>
						</Container>
					</Navbar>
				</div>
			)}
		</div>
	)
}
export default NavBar
