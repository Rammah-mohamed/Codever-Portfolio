import { useState, useEffect, useRef } from "react";
import { featured, templates, reactApps, jsApps } from "./data";
const Portfolio = () => {
	const [active, setActive] = useState("Featured");
	const [data, setdata] = useState([]);

	useEffect(() => {
		switch (active) {
			case "Featured":
				setdata(featured);
				break;
			case "Templates":
				setdata(templates);
				break;
			case "Js Apps":
				setdata(jsApps);
				break;
			case "React Apps":
				setdata(reactApps);
				break;
			default:
				setdata(featured);
		}
	}, [active]);

	const listData = [
		{
			id: 1,
			name: "Featured",
		},
		{
			id: 2,
			name: "React Apps",
		},
		{
			id: 3,
			name: "Js Apps",
		},
		{
			id: 4,
			name: "Templates",
		},
	];

	return (
		<div
			id='portfolio'
			className='w-full py-[64px] min-h-screen bg-main flex flex-col items-center justify-center gap-12'>
			<h1 className='p-4 max-[767px]:p-3 text-5xl max-[767px]:text-3xl max-[991px]:text-4xl text-second font-bold hover:text-main hover:bg-second transition-all duration-500 rounded-xl'>
				My Projects
			</h1>
			<ul className='flex flex-wrap items-center justify-center gap-8 max-[767px]:gap-4 max-[991px]:gap-6'>
				{listData.map((i) => (
					<li
						onClick={() => setActive(i.name)}
						key={i.id}
						className={
							active === i.name
								? "p-3 w-36 text-center cursor-pointer bg-second text-main font-bold text-lg max-[767px]:text-base max-[991px]:text-lg rounded-md border-2 max-[767px]:border-1 border-main border-solid transition-all duration-500"
								: "p-3 w-36 text-center cursor-pointer text-font font-bold text-lg max-[767px]:text-base max-[991px]:text-lg rounded-md border-2 max-[767px]:border-1 border-font border-solid transition-all duration-500 hover:text-second hover:border-second"
						}>
						{i.name}
					</li>
				))}
			</ul>
			<div id='wrapper' className='w-3/4'>
				<div id='container' className='flex flex-wrap items-center justify-center gap-10'>
					{data.map((i) => (
						<div
							key={i.id}
							className='group w-80 max-[991px]:w-64 max-[991px]:h-36 h-48  relative rounded-xl overflow-hidden hover:skew-x-[-4deg] hover:scale-105 hover:shadow-lg hover:shadow-secondLight transition-all duration-1000 cursor-pointer'>
							<div className='w-full h-full absolute bg-secondLight opacity-0 group-hover:opacity-100 transition-opacity duration-1000 z-20'></div>
							<a href={i.url} target='_blank' className='block w-full h-full'>
								<h3 className='w-max text-2xl text-main font-bold z-30 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 absolute top-1/2 left-1/2 translate-x-[-50%] translate-y-[-50%]'>
									{i.name}
								</h3>
								<div id='imgBox' className='w-full h-full relative z-10'>
									<img src={i.img} alt={i.name} className='w-full h-full object-cover' />
								</div>
							</a>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
