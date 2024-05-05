import Flag from "../assets/flag-img.png"

const Ecowas = () => {
	return (
		<div className="bg-white w-full mt-6">
			<div className="flex flex-col md:grid md:grid-cols-2 gap-8 pt-20 px-4 md:px-24">
				<div>
					<h1 className="text-4xl md:text-5xl font-semibold ">Document for Nigerians valid for travel within ECOWAS countries</h1>
					<div className="text-xl md:text-2xl font-normal pt-4 gap-4 ">
						<p className="py-10">Get the travel document that proves you are a citizen of the West African Community. The 2-year validity certificate is valid for travel across the region.</p>
						<p>Non-Nigerian ECOWAS citizens and Foreigners may also apply for resident permits.</p>
					</div>

					<button className='underline decoration-100 bg-green-900 text-white rounded-md font-bold py-3 md:py-4 px-6 mt-20 md:mt-28'>
						Apply Now
					</button>
				</div>
				<div className="item-center justify-center">
					<img src={Flag} alt="" />
				</div>
			</div>
		</div>
	)
}

export default Ecowas