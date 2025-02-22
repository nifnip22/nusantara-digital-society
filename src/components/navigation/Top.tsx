'use client';

import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";

export default function Top() {
	const [isVisible, setIsVisible] = useState(false);

	const scrollToTop = () => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	};

	useEffect(() => {
		const handleScroll = () => {
			const scrollY = window.scrollY;
			const windowHeight = window.innerHeight;
			const documentHeight = document.documentElement.scrollHeight;

			if (scrollY === 0 || scrollY + windowHeight >= documentHeight - 100) {
				setIsVisible(false);
			} else {
				setIsVisible(true);
			}
		};

		window.addEventListener("scroll", handleScroll);

		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	return (
		<>
			<div
				onClick={scrollToTop}
				className={`fixed bottom-4 right-4 p-4 rounded-full bg-[#D7AB6C] hover:opacity-100 hover:shadow-md hover:cursor-pointer transition-all flex justify-center items-center z-50 ${
					isVisible ? "opacity-60" : "hidden"
				}`}
			>
				<ChevronUp color='#ffffff' />
			</div>
		</>
	);
}