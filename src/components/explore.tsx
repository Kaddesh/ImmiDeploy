import { visas } from '../data/data';


const Explore = () => {
	return (

		<div className='bg-slate-200/40 w-full mt-4 '>
			<div className='flex flex-col md:mx-20 pt-4 px-10 md:p-20 '>
				<h1 className='text-green-900 text-3xl md:text-5xl text-start font-bold py-20 '>Explore all of our visas</h1>
				<div className='flex flex-col md:grid lg:grid-cols-3 xl:grid-cols-4 gap-10'>
					{visas.map(visa => (
						<div key={visa.id} className='border bg-white h-auto '>
							<img src={visa.image} alt="" className='w-full' />
							<div className='pt-8 pb-4 px-4 '>
								<div className='text-green-900 text-center px-5 text-2xl font-bold'>
									<h1 >{visa.title}</h1>
									<h3 className='py-4'>{visa.subTitle}</h3>
								</div>
								<div className='px-4'>
									<div className='text-xl text-slate-400 text-center'>{visa.content}</div>
									<div className='text-center pt-8 pb-4'>
										<a href="" className='underline decoration-green-600 text-green-700 font-semibold text-xl'>{visa.link}</a>
									</div>
								</div>
							</div>

						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Explore;
