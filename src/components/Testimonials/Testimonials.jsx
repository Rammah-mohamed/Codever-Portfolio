import pic from "../../imgs/undraw_opinion_re_jix4.svg";
import { useState } from "react";
import emailjs from "emailjs-com";
const Testimonials = () => {
	const [formData, setFormData] = useState({
		name: "",
		subject: "",
		email: "",
		message: "",
	});

	const handleChange = (e) => {
		const { name, value } = e.target;
		setFormData((prevData) => ({
			...prevData,
			[name]: value,
		}));
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		emailjs
			.send(
				"service_j8484m7", // Replace with your Service ID
				"template_5pwn9zj", // Replace with your Template ID
				formData,
				"fEVWoWAqZ_6lWw6Xh" // Replace with your User ID
			)
			.then((result) => {
				console.log(result.text);
				alert("Message sent successfully!");
				setFormData({
					name: "",
					subject: "",
					email: "",
					message: "",
				});
			})
			.catch((error) => {
				console.log(error.text);
				alert("Failed to send the message, please try again.");
			});
	};

	return (
		<div
			id='testimonials'
			className='w-full pb-4 pt-[64px] max-[991px]:pt-[150px] min-h-screen bg-font text-main flex max-[767px]:flex-col max-[991px]:flex-col items-center justify-center'>
			<div className='flex-1'>
				<img
					src={pic}
					alt='testimonials'
					className='max-w-lg max-[767px]:max-w-64 max-[991px]:max-w-sm object-cover animate-bounce-slow'
				/>
			</div>
			<div className='max-[991px]:w-4/5 flex-1 flex flex-col pb-4 items-center justify-center gap-10 border-l-4 max-[991px]:border-0 border-main'>
				<h1 className='p-4 text-5xl max-[767px]:text-3xl text-main font-bold hover:text-second hover:bg-main transition-all duration-500 rounded-xl'>
					Testimonials
				</h1>
				<form
					onSubmit={handleSubmit}
					className='w-full h-full flex flex-col items-center justify-center gap-6'>
					<input
						name='name'
						value={formData.name}
						onChange={handleChange}
						type='text'
						placeholder='Enter Your Name'
						className='w-3/4 max-[767px]:w-full text-main font-bold text-lg max-[767px]:text-base px-4 max-[767px]:px-3 py-2 rounded-xl border-main border-2 max-[767px]:border-1'
						required
					/>
					<input
						name='subject'
						value={formData.subject}
						onChange={handleChange}
						type='text'
						placeholder='Enter The Subject'
						className='w-3/4 max-[767px]:w-full text-main font-bold text-lg max-[767px]:text-base px-4 max-[767px]:px-3 py-2 rounded-xl border-main border-2 max-[767px]:border-1'
						required
					/>
					<input
						name='email'
						value={formData.email}
						onChange={handleChange}
						type='mail'
						placeholder='Enter Your Email'
						className='w-3/4 max-[767px]:w-full text-main font-bold text-lg max-[767px]:text-base px-4 max-[767px]:px-3 py-2 rounded-xl border-main border-2 max-[767px]:border-1'
						required
					/>
					<textarea
						name='message'
						value={formData.message}
						onChange={handleChange}
						placeholder='Enter Your Message'
						className='overflow-y-scroll w-3/4 max-[767px]:w-full h-56 resize-none no-scrollbar text-main font-bold text-lg max-[767px]:text-base px-4 max-[767px]:px-3 py-2 rounded-xl border-main border-2 max-[767px]:border-1'
						required></textarea>
					<button
						type='submit'
						className='text-lg text-second font-bold px-4 py-2 rounded-md bg-main cusor-pointer hover:text-main hover:bg-second transition-all duration-500'>
						Send
					</button>
				</form>
			</div>
		</div>
	);
};

export default Testimonials;
