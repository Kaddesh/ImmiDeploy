
import ApplyInside from '../assets/apply-inside.jpg'
import ApplyInside2 from '../assets/apply-outside.jpg'

interface Props {
	isAboveMediumScreens: boolean;
}

const Apply: React.FC<Props> = ({ isAboveMediumScreens }) => {
	return (
		<div className='flex flex-col md:grid md:grid-cols-2 mt-40 md:px-20 md:gap-24'>

			<div className='flex flex-col pb-7' >
				<div className='bg-slate-100 gap-7 pb-6'>
					<div className='text-4xl md:text-5xl text-green-950 px-6 pt-10 text-wrap font-bold text-center '>
						<h1>
							Nigerian Passport: Ways to apply
						</h1>
					</div>


					<div className='flex flex-col md:grid md:grid-cols-2 px-6 pt-20'>


						<div className='flex flex-col border bg-white '>
							<img className='shrink-0' src={ApplyInside} alt="Image1" />
							<h1 className='text-lg font-bold text-center leading-10 pt-10  '>Applying <br /> from Nigeria</h1>
							<p className='text-base md:text-xl pt-10 px-8 font-semibold text-slate-400'>
								We accept all applications online. The applicant will be required to visit a passport office for biometric enrolment.
							</p>
							<a className='underline decoration-green-600 text-center text-green-600 pt-6'>
								How to apply
							</a>

							<div className='flex item-center justify-center mt-14'>
								<button className='underline decoration-100 bg-green-900 text-white rounded-md p-4 mb-9 '>
									Apply Now
								</button>
							</div>
						</div>
						<div className='flex flex-col border bg-white '>
							<img className='shrink-0' src={ApplyInside2} alt="Image1" />
							<h1 className='text-lg font-bold text-center leading-10 pt-10  '>Applying <br /> from outside Nigeria</h1>
							<p className='text-base md:text-xl pt-10 px-8 font-semibold text-slate-400'>
								Application is submitted online. Applicant must book an appointment with a Nigerian Mission for biometric enrolment.
							</p>
							<a className='underline decoration-green-600 text-center text-green-600 pt-6'>
								How to apply
							</a>

							<div className='flex item-center justify-center mt-14'>
								<button className='underline decoration-100 bg-green-900 text-white rounded-md p-4 mb-9 '>
									Apply Now
								</button>
							</div>
						</div>
					</div>
				</div>

			</div>
			<div className=' flex flex-col justify-center px-4 pt-4 md:items-start'>
				<h3 className='text-green-600 text-xl font-bold '>PASSPORT</h3>
				<h1 className='text-4xl md:text-5xl  font-bold pt-6 '>Passport for Nigerian Citizens</h1>
				<div>
					<p className='text-xl font-normal pt-10'>
						Learn about the different
						{isAboveMediumScreens && <br />}
						passport types, validity,
						{isAboveMediumScreens && <br />}
						eligibility and requirements
						{isAboveMediumScreens && <br />}
						for the application
					</p>
				</div>
				<a href="" className='underline decoration-green-600 text-green-600 pt-10'>Learn More</a>
			</div>
		</div>
	)
}
export default Apply