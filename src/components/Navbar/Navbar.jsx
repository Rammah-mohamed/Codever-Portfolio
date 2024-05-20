import "./navbar.css";
import EmailIcon from "@mui/icons-material/Email";
import GitHubIcon from "@mui/icons-material/GitHub";
import MenuIcon from "@mui/icons-material/Menu";

const Navbar = ({ showMenu, setShowMenu }) => {
	const handleClick = (e) => {
		e.preventDefault();
		setShowMenu(!showMenu);
	};
	return (
		<div
			id='navbar'
			className={
				showMenu
					? "flex items-center justify-between w-full py-3 px-10 border-b-2 border-secondLight max-[767px]:py-4 max-[767px]:px-4 bg-second text-main  fixed top-0 z-50 transition-all duration-1000 ease-in"
					: "flex items-center justify-between w-full py-3 px-10 border-b-2 border-secondLight max-[767px]:py-4 max-[767px]:px-4 bg-main text-font  fixed top-0 z-50 transition-all duration-1000 ease-in"
			}>
			<div
				id='left'
				className='flex items-center justify-between gap-16 max-[767px]:items-start max-[767px]:gap-4 max-[991px]:gap-8 max-[767px]:flex-col max-[767px]:flex-1'>
				<h1
					className={
						showMenu
							? "flex-1 text-4xl max-[767px]:text-3xl font-bold text-main transition-all duration-1000 ease-in"
							: "flex-1 text-4xl max-[767px]:text-3xl font-bold text-second transition-all duration-1000 ease-in"
					}>
					Codever.
				</h1>
				<div
					id='info'
					className='flex items-center max-[767px]:items-start gap-8 max-[767px]:flex-col max-[767px]:text-sm max-[767px]:gap-4'>
					<div
						id='email'
						className='flex flex-1 items-center gap-3 max-[767px]:gap-1 cursor-pointer hover:scale-110 hover:translate-x-4 transition-all duration-500'>
						<EmailIcon />
						<span>Dev.rammah@gmail.com</span>
					</div>
					<div
						id='github'
						className='flex flex-1 items-center gap-3 max-[767px]:gap-1 cursor-pointer hover:scale-110 hover:translate-x-4 transition-all duration-500'>
						<GitHubIcon />
						<a href='https://github.com/Rammah-mohamed' target='_blank'>
							GitHub account
						</a>
					</div>
				</div>
			</div>
			<div
				id='right'
				className='relative max-[767px]:h-[100px] max-[767px]:top-[-6px]'
				onClick={handleClick}>
				<MenuIcon />
			</div>
		</div>
	);
};

export default Navbar;
