import React, { useState } from "react";
import './App.scss';


function App() {
	const [count, setCount] = useState(0)

	return (
		<div className="App">
			<Container>
				{/* <header>Welcome to starter kit with vite !</header> */}
				<Feature>Hands on SCSS support. </Feature>
				<Feature>Styled components built-in. </Feature>
				<Feature>ESlint hands-on </Feature>
				<button
					type="button"
					onClick={() => setCount((orevCount) => orevCount + 1)}
				>
					Count {count}
				</button>
			</Container>
		</div>
	)
}

export default App
