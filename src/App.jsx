import { useState } from "react";
import Menu from "./components/Menu/Menu";
import Navbar from "./components/Navbar/Navbar";
import Intro from "./components/Intro/Intro";
import About from "./components/About/About";
import Portfolio from "./components/Portfolio/Portfolio";
import Testimonials from "./components/Testimonials/Testimonials";
const App = () => {
	const [showMenu, setShowMenu] = useState(false);
	return (
		<div id='app' className='overflow-hidden'>
			<nav>
				<Navbar showMenu={showMenu} setShowMenu={setShowMenu} />
			</nav>
			<aside>
				<Menu showMenu={showMenu} setShowMenu={setShowMenu} />
			</aside>
			<section className='w-full'>
				<Intro />
			</section>
			<section className='w-full'>
				<About />
			</section>
			<section className='w-full'>
				<Portfolio />
			</section>
			<section className='w-full'>
				<Testimonials />
			</section>
		</div>
	);
};

export default App;
