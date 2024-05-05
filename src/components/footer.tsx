import { FaFacebook, FaPhoneAlt, FaTwitter } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { MdOutlineMailOutline } from "react-icons/md";

interface Props {
	isAboveMediumScreens: boolean;
}

const Footer: React.FC<Props> = ({ isAboveMediumScreens }) => {
	return (
		<div className="flex flex-col md:flex-row md:justify-between bg-green-950 mt-6 pb-20">
			<div className="py-16 px-4 md:ml-20 text-white">
				<h1 className="text-3xl md:text-4xl font-bold ">NIS Headquaters</h1>
				<p className="text-lg md:text-2xl font-semibold pt-4 md:pt-16 ">Umar Musa Yar Adu'a Express Way, <br /> Airport Road, Sauka, Abuja, FCT Nigeria</p>
				<div className="pt-12 text-base md:text-xl">
					<p className="flex gap-4 md:gap-10  font-normal"><FaPhoneAlt size={isAboveMediumScreens ? 25 : 20} className="text-yellow-500  " />
						+234-912-1556-359</p>
					<p className="pt-6 pl-10 font-normal">07:00 - 20:00hours (GMT+1)</p>
				</div>
				<div className="pt-12 text-base md:text-xl">
					<p className="flex gap-4 md:gap-10 font-normal"><FaPhoneAlt size={isAboveMediumScreens ? 25 : 20} className="text-yellow-500" /> +234-912-1900-655</p>
					<p className="flex gap-4 md:gap-10 font-normal py-8"><MdOutlineMailOutline size={isAboveMediumScreens ? 25 : 20} className="text-yellow-500" />
						nis.servicom@nigeriaimmigration.gov.ng</p>
				</div>

				<div className="mt-16">
					<h1 className="text-4xl font-bold pb-16">Connect with us</h1>
					<div className="flex gap-6">
						<FaFacebook size={isAboveMediumScreens ? 25 : 20} />
						<FaSquareInstagram size={isAboveMediumScreens ? 25 : 20} />
						<FaTwitter size={isAboveMediumScreens ? 25 : 20} />
					</div>

					<div className="pt-16 text-base md:text-xl">
						<p className="flex gap-4 md:gap-10 font-normal"><FaPhoneAlt size={isAboveMediumScreens ? 25 : 20} className="text-yellow-500" />
							+234-705-3401-399</p>

						<p className="flex py-8 gap-4 md:gap-10 text-base md:text-xl font-normal"><MdOutlineMailOutline size={isAboveMediumScreens ? 25 : 20} className="text-yellow-500" />
							oa@nigeriaimmigration.gov.ng9</p>
						<p className="flex gap-4 md:gap-10 text-base md:text-xl font-normal"><MdOutlineMailOutline size={isAboveMediumScreens ? 25 : 20} className="text-yellow-500" />
							cis-evisa@immigration.gov.ng9</p>


					</div>

				</div>
			</div>

			<div className=" text-white py-16 px-4 ">
				<div className="text-base md:text-xl">
					<h1 className="text-3xl md:text-4xl font-bold">Complaints and <br />Enquiries</h1>
					<p className="flex gap-4 md:gap-10 text-xl font-normal pt-16"><FaPhoneAlt size={isAboveMediumScreens ? 25 : 20} className="text-yellow-500" />
						+234-802-1819-988</p>

					<p className="flex gap-4 md:gap-10 font-normal py-8"><MdOutlineMailOutline size={isAboveMediumScreens ? 25 : 20} className="text-yellow-500" />
						nis.servicom@nigeriaimmigration.gov.ng</p>
				</div>

				<div className="text-base md:text-xl py-16">
					<h1 className="text-3xl md:text-4xl font-bold ">Visa On Arrival</h1>
					<p className="flex gap-4 md:gap-10 font-normal pt-16"><FaPhoneAlt size={isAboveMediumScreens ? 25 : 20} className="text-yellow-500" />
						+234-705-3401-399</p>
					<p className="flex gap-4 md:gap-10 font-normal py-4"><MdOutlineMailOutline size={isAboveMediumScreens ? 25 : 20} className="text-yellow-500" />
						oa@nigeriaimmigration.gov.ng</p>
					<p className="flex gap-4 md:gap-10 font-normal"><MdOutlineMailOutline size={isAboveMediumScreens ? 25 : 20} className="text-yellow-500" />
						cis-evisa@immigration.gov.ng</p>

				</div>
				<div className="text-base md:text-xl">
					<h1 className="text-3xl md:text-4xl font-bold pb-16">Issues with travelling <br /> back to Nigeria with <br /> Expired Passport</h1>
					<p className="flex gap-4 md:gap-10 text-base md:text-xl font-normal"><FaPhoneAlt size={isAboveMediumScreens ? 25 : 20} className="text-yellow-500" />
						+234-912-2785-603</p>

					<p className="flex gap-4 md:gap-10 text-base md:text-xl font-normal pt-4"><MdOutlineMailOutline size={isAboveMediumScreens ? 25 : 20} className="text-yellow-500" />
						expiredppt@immigration.gov.ng</p>
				</div>
			</div>
		</div>
	);
}


export default Footer