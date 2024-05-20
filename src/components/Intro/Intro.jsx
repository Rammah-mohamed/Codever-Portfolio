import me from "../../imgs/undraw_developer_activity_re_39tg (1).svg";
import TypingAnimation from "../../animejs/TypingAnimation/TypingAnimation";

const Intro = () => {
	return (
		<div
			id='intro'
			className='w-full pb-10 pt-[64px] max-[767px]:p-[150px] max-[1199px]:pt-[150px] bg-main text-font w-full min-h-screen flex max-[767px]:flex-col max-[1199px]:flex-col items-center gap-14'>
			<div
				id='left'
				className='flex flex-col flex-1 items-center justify-center gap-10 max-[767px]:gap-5'>
				<span className='text-3xl max-[767px]:text-lg max-[1199px]:text-2xl text-semibold mb-[-1.8rem] max-[767px]:mb-[-1rem]'>
					<TypingAnimation text="Hi, I'm There" />
				</span>
				<span className='text-6xl max-[767px]:text-3xl max-[1199px]:text-4xl  text-bold first-letter:text-second first-letter:text-8xl max-[767px]:first-letter:text-5xl'>
					<TypingAnimation text='Rammah Mohamed' />
				</span>
				<span className='text-4xl max-[767px]:text-xl max-[1199px]:text-2xl text-second text-semibold'>
					<TypingAnimation text='Front End Developer' />
				</span>
			</div>
			<figure id='right' className='flex-1'>
				<img
					src={me}
					alt='me'
					className='max-w-lg max-[767px]:max-w-64 max-[1199px]:max-w-sm object-cover animate-wiggle-slow'
				/>
			</figure>
		</div>
	);
};

export default Intro;
