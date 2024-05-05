

function Media() {
	return (
		<div className=' mt-28 px-10'>
			<h1 className='text-4xl text-green-900 font-bold  '>Media Center</h1>

			<div className='flex flex-col md:grid md:grid-cols-3 gap-4 '>

				<div className='text-gray-900 font-semibold'>
					<h1 className='pt-6 text-lg  md:text-lg font-semibold'>PRESS RELEASE BY THE SERVICE PUBLIC...</h1>
					<p className='pt-6 text-slate-500 text-sm md:text-xl leading-8 font-medium'>
						1. Yesterday, a group of eleven of our personnel were returning to Abuja from an official assignment in Kano, in an eighteen-seater official bus. Tragically, they were involved in a ghastly accide...
					</p>

					<p className='text-sm pt-6 '>
						January 11th, 2024
					</p>
					<button className='underline pt-6 text-green-500'>
						<a href="">Learn More</a>
					</button>
				</div>
				<div className='text-gray-900 font-semibold'>
					<h1 className='pt-6 text-base md:text-lg text- font-semibold'>Passport backlog is now a thing of the</h1>
					<p className='pt-6 text-sm text-slate-500 md:text-xl leading-8 font-medium'>
						The Nigerian Immigration Service (NIS) has urged Nigerians who applied for International Passport and are yet to collect to visit the passports offices for collection as backlog has been cleared...
					</p>

					<p className='text-sm pt-6 '>
						October 20th, 2023
					</p>
					<button className='underline pt-6 text-green-500'>
						<a href="">Learn More</a>
					</button>
				</div>

				<div className='text-gray-900 font-semibold'>
					<h1 className='pt-6 text-lg text- font-semibold'>Notice For Uncollected Passports</h1>
					<p className='pt-6 text-sm text-slate-500 md:text-xl leading-8 font-medium'>
						This is a notice for produced passports yet to be collected. Below is a list of centers with uncollected passport. Click on the respective center to view of uncollected passport list. List of Centers with...
					</p>

					<p className='text-sm pt-6 '>
						November 1st, 2022
					</p>
					<button className='underline pt-6 text-green-500'>
						<a href="">Learn More</a>
					</button>
				</div>
			</div>
		</div>

	)
}

export default Media