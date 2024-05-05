import AboutImage from "../assets/About.jpg"

const About = () => {
	return (
		<div className="bg-white w-full mt-40">
			<div className="bg-slate-200/40 flex flex-col md:grid md:grid-cols-2 ">
				<div>
					<img src={AboutImage} alt="" className=" w-full h-full" />
				</div>
				<div className="pt-8 px-6">
					<h4 className="text-base font-bold text-green-800">About NIS</h4>
					<h1 className="text-4xl font-bold pt-5 pb-12">To strengthen the security and prosperity of Nigeria through proactive, effective and efficient border security and migration management</h1>
					<p className="text-base font-normal">The Nigeria Immigration Service (NIS) is the government agency that has been charged with the responsibility of migration management in Nigeria</p>

					<button className='underline decoration-100 bg-green-900 text-white rounded-md font-bold py-4 px-6 mt-20'>
						Learn More
					</button>
				</div>
			</div>
		</div >
	)
}


export default About