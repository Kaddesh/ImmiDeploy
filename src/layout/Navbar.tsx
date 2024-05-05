import React, { useState, useEffect } from 'react';
import NISHouse1 from '../assets/NISHouse1.jpeg';
import NISHouse2 from '../assets/NISHouse2.jpeg';

const images: string[] = [
	NISHouse1,
	NISHouse2,
	// Add more images if needed
];

const Slider: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);

	// Function to handle next slide
	const nextSlide = () => {
		setCurrentSlide(prevSlide => (prevSlide === images.length - 1 ? 0 : prevSlide + 1));
	};

	useEffect(() => {
		// Automatically change slide every 3 seconds
		const interval = setInterval(() => {
			nextSlide();
		}, 3000);

		return () => clearInterval(interval); // Cleanup interval on component unmount
	}, []); // No dependencies to prevent infinite loop

	return (
		<div className="relative w-full overflow-hidden">
			<div className="flex transition-transform duration-500 ease-in-out" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
				{images.map((image, index) => (
					<img key={index} src={image} alt={`Slide ${index + 1}`} className="w-full h-auto" />
				))}
			</div>
		</div>
	);
};

export default Slider;
