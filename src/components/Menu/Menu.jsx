const Menu = ({ showMenu, setShowMenu }) => {
	const handleClick = () => {
		setShowMenu(false);
	};
	return (
		<div
			id='menu'
			className={
				showMenu
					? "w-72 max-[767px]:w-full bg-second text-main h-screen fixed top-0 right-0 flex items-center justify-center transition-all duration-1000 ease-in z-40"
					: "w-72 max-[767px]:w-full bg-second text-main h-screen fixed top-0 right-[-18rem] max-[767px]:right-[-100%] flex items-center justify-center transition-all duration-1000 ease-in z-40"
			}>
			<div className='w-full flex flex-col items-center justify-center gap-6 max-[767px]:gap-2 text-2xl max-[767px]:text-xl font-bold tracking-wider'>
				<a
					onClick={handleClick}
					href='#intro'
					className='w-full text-center py-3 cursor-pointer hover:font hover:scale-125 hover:translate-y-[-0.7rem] hover:duration-500 hover:transition-all'>
					Intro
				</a>
				<a
					onClick={handleClick}
					href='#about'
					className='w-full text-center py-3 cursor-pointer hover:font hover:scale-125 hover:translate-y-[-0.7rem] hover:duration-500 hover:transition-all'>
					About
				</a>
				<a
					onClick={handleClick}
					href='#portfolio'
					className='w-full text-center py-3 cursor-pointer hover:font hover:scale-125 hover:translate-y-[-0.7rem] hover:duration-500 hover:transition-all'>
					Portfolio
				</a>
				<a
					onClick={handleClick}
					href='#testimonials'
					className='w-full text-center py-3 cursor-pointer hover:font hover:scale-125 hover:translate-y-[-0.7rem] hover:duration-500 hover:transition-all'>
					Testimonials
				</a>
			</div>
		</div>
	);
};

export default Menu;
