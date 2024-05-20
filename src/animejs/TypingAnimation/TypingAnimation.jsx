import React, { useEffect, useRef } from "react";
import anime from "animejs";

const TypingAnimation = ({ text }) => {
	const textRef = useRef(null);

	useEffect(() => {
		const el = textRef.current;
		el.innerHTML = text
			.split("")
			.map((char) => `<span class='letter'>${char}</span>`)
			.join("");

		anime.timeline({ loop: true }).add({
			targets: ".letter",
			opacity: [0, 1],
			easing: "easeInOutQuad",
			duration: 100,
			delay: (el, i) => 100 * (i + 1),
		});
	}, [text]);

	return <div ref={textRef} className='text'></div>;
};

export default TypingAnimation;
