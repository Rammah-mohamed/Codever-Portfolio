import me from "../../imgs/undraw_web_developer_re_h7ie.svg";
const About = () => {
	return (
		<div
			id='about'
			className='w-full pt-[64px] pb-10 max-[991px]:pt-[150px] max-[767px]:pb-6 min-h-screen bg-font flex max-[767px]:flex-col max-[991px]:flex-col items-conter justufy-between'>
			<section className='flex-1 flex items-center justify-center py-3 px-10 max-[767px]:px-4'>
				<figure>
					<img
						src={me}
						alt='about me picture'
						className='max-w-lg max-[767px]:max-w-64 max-[991px]:max-w-sm object-cover animate-bounce-slow'
					/>
				</figure>
			</section>
			<section className='flex-1 flex flex-col items-center justify-center gap-10 max-[767px]:gap-6 text-justify py-3 px-10 max-[767px]:px-4'>
				<h1 className='p-6 max-[767px]:p-3 text-5xl max-[767px]:text-3xl max-[991px]:text-4xl text-main font-bold hover:text-second hover:bg-main transition-all duration-500 rounded-xl'>
					About Me
				</h1>
				<p className='text-light text-xl max-[767px]:text-base max-[991px]:text-lg max-w-[30rem] max-[991px]:max-w-[40rem] rounded-xl border-4 max-[767px]:border-2 max-[991px]:border-2 border-secondLight p-8 max-[767px]:p-4 max-[991px]:p-6 hover:border-main transition-all duration-500'>
					I'm a ambitious Front End React Developer with a keen eye for detail. Skilled in HTML,
					CSS/SASS, JavaScript and leveraging APIs to integrate with backend services to create
					interactive applications. Focused on optimizing site performance and usability. Known for
					my proactive approach to Strong problem-solving skills and a commitment to writing clean,
					maintainable code. Ready to contribute my skills and passion for web development to a
					dynamic team environment.
				</p>
			</section>
		</div>
	);
};

export default About;
