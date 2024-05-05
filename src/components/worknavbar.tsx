import React, { useState, useEffect } from 'react';
import { FaAngleDown, FaFacebook, FaInstagramSquare, FaTwitter } from 'react-icons/fa';
import Logo from "../assets/Logo.png";
import NISHouse1 from '../assets/NISHouse1.jpeg';
import NISHouse2 from '../assets/NISHouse2.jpeg';
import { MdMenu } from 'react-icons/md';
import useMediaQuery from '../query';
import { IoCloseSharp } from 'react-icons/io5';

const Correct: React.FC = () => {
	const [currentSlide, setCurrentSlide] = useState<number>(0);
	const [isAboutUsOpen, setIsAboutUsOpen] = useState<boolean>(false);
	const [isServicesOpen, setIsServicesOpen] = useState<boolean>(false);
	const [isMediaCenterOpen, setIsMediaCenterOpen] = useState<boolean>(false);


	const totalSlides: number = 2;
	const carouselItems: string[] = [NISHouse1, NISHouse2];


	useEffect(() => {
		const interval = setInterval(() => {
			setCurrentSlide((prevSlide) => (prevSlide + 1) % totalSlides);
		}, 2000);
		return () => clearInterval(interval);
	}, []);

	const handleClickOutside = (event: MouseEvent) => {
		if (
			!event.target ||
			!(event.target as HTMLElement).closest('.dropdown-container')
		) {
			setIsAboutUsOpen(false);
			setIsServicesOpen(false);
			setIsMediaCenterOpen(false);
		}
	};

	useEffect(() => {
		window.addEventListener('click', handleClickOutside);
		return () => {
			window.removeEventListener('click', handleClickOutside);
		};
	}, []);

	const toggleAboutUs = () => {
		setIsAboutUsOpen(!isAboutUsOpen);
		setIsServicesOpen(false);
		setIsMediaCenterOpen(false);
	};

	const toggleServices = () => {
		setIsServicesOpen(!isServicesOpen);
		setIsAboutUsOpen(false);
		setIsMediaCenterOpen(false);
	};

	const toggleMediaCenter = () => {
		setIsMediaCenterOpen(!isMediaCenterOpen);
		setIsAboutUsOpen(false);
		setIsServicesOpen(false);
	};

	const [isMenuToggled, setIsMenuToggled] = useState<boolean>(false);
	const isAboveMediumScreens = useMediaQuery("(min-width: 768px)");

	return (
		<section className='flex flex-col overflow-hidden'>
			<div className="overflow-x-hidden">
				<div className="slider-inner flex transition-transform duration-500 ease-in-out mb-10 "
					style={{ translate: isAboveMediumScreens ? `${-100 * currentSlide}%` : 'none' }}
				>

					{carouselItems.map((image, index) => (
						<div
							key={index}
							className={`slide-item md:bg-cover ${isAboveMediumScreens ? 'bg-center bg-no-repeat h-[83rem]' : 'bg-white '}`}
							style={{ backgroundImage: isAboveMediumScreens ? `url(${image})` : 'none' }}
						>


							<div className='flex items-center justify-between pt-10 mx-10'>

								<div className='w-auto md:w-auto h-10 md:h-auto'>
									<img src={Logo} alt="" className='rounded-lg w-32 md:w-60 md:h-24 ' />
								</div>
								{isAboveMediumScreens ? (<div className=' relative flex items-center justify-between border text-black bg-white w-full h-20 rounded-lg'>
									<nav>
										<ul className='flex px-8 gap-3 '>
											<li className='text-xl font-semibold text-slate-800 flex gap-1 dropdown-container'>About Us
												<span><FaAngleDown onClick={toggleAboutUs} className='cursor-pointer' /></span>

												<div className={`  flex flex-col absolute top-16 left-8 bg-white text-xl text-slate-600  px-4 py-6 gap-3 rounded-xl  ${isAboutUsOpen ? 'block' : 'hidden'}`} >
													<a href="">Vision and Mission</a>
													<a href="">Our Core Mandate</a>
													<a href="">NIS Structure</a>
													<a href="">NIS History</a>
													<a href="">Current and Past Leaders of the NIS</a>
												</div>
											</li>
											<li className='text-xl font-semibold text-slate-800 flex gap-1 dropdown-container'>Services
												<span><FaAngleDown onClick={toggleServices} className='cursor-pointer' /></span>

												<div className={`  flex flex-col absolute top-16 left-20 bg-white text-xl text-slate-600  px-4 py-6 gap-3 rounded-xl ${isServicesOpen ? 'block' : 'hidden'}`}>
													<a href="">Passports</a>
													<a href="">Viasa</a>
													<a href="">ECOWAS Travel Certificate</a>
													<a href="">Resisidence Permit</a>
													<a href="">Visa On Arrival Process</a>
												</div>

											</li>
											<li className='text-xl font-semibold text-slate-800 flex gap-1 dropdown-container'>Media Center
												<span><FaAngleDown onClick={toggleMediaCenter} className='cursor-pointer' /></span>

												<div className={`  flex flex-col absolute top-16 left-56 bg-white text-xl text-slate-600  px-4 py-6 gap-3 rounded-xl  ${isMediaCenterOpen ? 'block' : 'hidden'}`}>
													<a href="">Events & News</a>
													<a href="">Uncollected Passports</a>
												</div>
											</li>
											<li className='text-xl font-semibold text-slate-800'>
												<a href="">Contact Us</a></li>
											<li className='text-xl font-semibold text-slate-800'>
												<a href="">Track Application</a></li>
											<li className='text-xl font-semibold text-slate-800'>
												<a href="">Appointment Availability</a></li>
										</ul>
									</nav>

									<div className='flex gap-8 pr-2'>
										<a href=""><FaFacebook size={30} className='text-blue-800 cursor-pointer' /></a>
										<a href=""><FaInstagramSquare size={30} className='text-red-700 cursor-pointer' /></a>
										<a href=""><FaTwitter size={30} className='text-blue-500 cursor-pointer' /></a>
									</div>
								</div>) : (
									<div className="flex flex-col">
										{!isMenuToggled ? (
											<button onClick={() => setIsMenuToggled(true)}>
												<MdMenu size={30} />
											</button>
										) : (
											<button onClick={() => setIsMenuToggled(false)}>
												<IoCloseSharp className="h-6 w-6 text-gray-400" size={30} />
											</button>
										)}
									</div>
								)}
							</div>
						</div>
					))}
				</div>
			</div>

			{/* MOBILE MENU MODAL */}
			{!isAboveMediumScreens && isMenuToggled && (<div className='flex flex-col border text-black bg-white h-auto pb-10 rounded-lg mx-10'>

				<nav>
					<ul className='flex flex-col px-5 pt-6 gap-3 '>
						<li className='text-sm lg:text-lg font-semibold text-slate-800 flex gap-1 dropdown-container'>About Us
							<span><FaAngleDown onClick={toggleAboutUs} className='cursor-pointer' /></span>
						</li>
						<div className={`  flex flex-col w-full border h-auto bg-white text-base text-slate-600  px-4 py-4 gap-2 rounded-lg  ${isAboutUsOpen ? 'block' : 'hidden'}`} >
							<a href="">Vision and Mission</a>
							<a href="">Our Core Mandate</a>
							<a href="">NIS Structure</a>
							<a href="">NIS History</a>
							<a href="">Current and Past Leaders of the NIS</a>
						</div>
						<li className='text-sm lg:text-lg font-semibold text-slate-800 flex gap-1 dropdown-container'>Services
							<span><FaAngleDown onClick={toggleServices} className='cursor-pointer' /></span>
						</li>
						<div className={`  flex flex-col w-full border h-auto bg-white text-base text-slate-600  px-4 py-4 gap-3 rounded-xl ${isServicesOpen ? 'block' : 'hidden'}`}>
							<a href="">Passports</a>
							<a href="">Viasa</a>
							<a href="">ECOWAS Travel Certificate</a>
							<a href="">Resisidence Permit</a>
							<a href="">Visa On Arrival Process</a>
						</div>
						<li className='text-sm lg:text-lg font-semibold text-slate-800 flex gap-1 dropdown-container'>Media Center
							<span><FaAngleDown onClick={toggleMediaCenter} className='cursor-pointer' /></span>
						</li>
						<div className={`  flex flex-col w-full border h-auto bg-white text-base text-slate-600  px-4 py-4 gap-3 rounded-xl  ${isMediaCenterOpen ? 'block' : 'hidden'}`}>
							<a href="">Events & News</a>
							<a href="">Uncollected Passports</a>
						</div>
						<li className='text-sm lg:text-lg font-semibold text-slate-800'>
							<a href="">Contact Us</a></li>
						<li className='text-sm lg:text-lg font-semibold text-slate-800'>
							<a href="">Track Application</a></li>
						<li className='text-sm lg:text-lg font-semibold text-slate-800'>
							<a href="">Appointment Availability</a></li>
					</ul>
				</nav>

				<div className='flex gap-6 px-5 pt-3 lg:pr-2'>
					<a href=""><FaFacebook size={20} className='text-blue-800 cursor-pointer' /></a>
					<a href=""><FaInstagramSquare size={20} className='text-red-700 cursor-pointer' /></a>
					<a href=""><FaTwitter size={20} className='text-blue-500 cursor-pointer' /></a>
				</div>
			</div>)}


			<div className='flex flex-col gap-6 md:absolute md:top-24 md:right-20 md:grid md:grid-cols-2 items-center mt-28  '>
				<div className='flex flex-col text-sm md:text-xl  text-white gap-10 bg-green-800 rounded-md w-[320px] md:w-80 md:p-8 p-6 '>
					<div className='flex flex-col gap-10 '>
						<h1 className='md:text-4xl font-bold text-white'>Passport </h1>
						<p className='md:leading-10'>You can now apply for a Nigerian passport online. The online application guideline ensures the application process is simple and easy to use.</p>

						<div className='flex justify-between '>
							<button className='underline text-white'>
								<a href="">Learn More</a>
							</button>
							<button className='underline text-white'>Apply Now</button>
						</div>
					</div>
				</div>
				<div className='flex flex-col text-sm md:text-xl  text-white gap-10 bg-gray-900 rounded-md w-[320px] md:w-80 md:p-8 p-6  '>
					<div className='flex flex-col gap-10 '>
						<h1 className='md:text-4xl font-bold text-white'>Visa </h1>
						<p className='md:leading-10'>Application for Nigerian Visas can now be completed online from anywhere on the globe. Application guidelines are also available online.</p>
						<div className='flex justify-between '>
							<button className='underline text-white'>
								<a href="">Learn More</a>
							</button>
							<button className='underline text-white'>Apply Now</button>
						</div>
					</div>
				</div>
				<div className='flex flex-col text-sm md:text-xl  text-white gap-10 bg-gray-600 rounded-md w-[320px] md:w-80 md:p-8 p-6  '>
					<div className='flex flex-col gap-10 '>
						<h1 className='md:text-4xl font-bold text-white'>ECOWAS Travel Certificate</h1>
						<p className='md:leading-10'>ECOWAS Travel Certificate is issued to Nigerians desirous of traveling to other ECOWAS members states.</p>
						<div className='flex justify-between '>
							<button className='underline pt-6 text-white'>
								<a href="">Learn More</a>
							</button>
						</div>
					</div>
				</div>
				<div className='flex flex-col text-sm md:text-xl  text-black gap-10 bg-yellow-50 rounded-md w-[320px] md:w-80 md:p-8 p-6  '>
					<div className='flex flex-col gap-10 '>
						<h1 className='md:text-4xl font-bold '>ECOWAS Residence Card</h1>
						<p className='md:leading-10'>Residence Visa allows individuals to reside in Nigeria for a period not exceeding two years.</p>
						<div className='flex justify-between '>
							<button className='underline pt-6 text-black'>
								<a href="">Learn More</a>
							</button>
						</div>
					</div>
				</div>
			</div>
		</section >
	)
}
export default Correct
