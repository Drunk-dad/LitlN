import React, { useState } from 'react';
import { Navbar, Container, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import s from './NavBar.module.css'

const NavBar = () => {
	const [isVisible, setIsVisible] = useState(false)

	return (
		<div className={s.wrapper}>
			<button type="button" className={s.closeButton} onClick={() => setIsVisible(!isVisible)}>X</button>
			{isVisible && (
				<div className={s.navBar}>
					<Navbar bg="dark" variant="dark"  >
						<Container className={s.container}>
							<Nav className="me-auto" >
								<Link to="/main" >  <Nav.Link as="div" > Dishes  </Nav.Link></Link>
								<Link to="/menu" >	<Nav.Link as="div"> Drinks </Nav.Link></Link>
							</Nav>
						</Container>
					</Navbar>
				</div>
			)
			}
		</div >
	)
}
export default NavBar
