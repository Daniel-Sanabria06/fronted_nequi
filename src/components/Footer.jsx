import { FaAmazon } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { CgMail } from "react-icons/cg";
import { Link } from "react-router-dom";
import logo from '/nequiblanco.svg'
import bancolombia from '/bancolombia.svg'
import { IoIosArrowForward } from "react-icons/io";
import { FiTwitter } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { FiFacebook } from "react-icons/fi";
import { FiLinkedin } from "react-icons/fi";
import { FiYoutube } from "react-icons/fi";



const Footer = () => {
  return (
    <>
       <div className="footer h-1/2 w-full flex md2:flex-row flex-col justify-around items-start">
				<div className="p-5 ">
					<div className="row">
						<div className="col-5">
							<img src={logo} alt="Logo" />
						</div>
						<div className="col-2"></div>
						<div className="col-5">
							<img src={bancolombia} alt="Logo" />
						</div>
					</div>
						
						<hr className="bg-white my-4" />
					
						<div className="row mt-5 text-white">
							<div className="col-8 mb-2 text-center">
								<p className='font-bold text-lg'>Información legal</p>
							</div>
							<div className="col-3 text-center ml-4">
								<IoIosArrowForward />
							</div>
							<div className="col-8 my-2 text-center">
								<p className='font-bold text-lg'>Para personas</p>
							</div>
							<div className="col-3 my-2 text-center ml-4">
								<IoIosArrowForward />
							</div>
							<div className="col-8 my-2 text-center">
								<p className='font-bold text-lg'>Para tu negocio</p>
							</div>
							<div className="col-3  my-2 text-center ml-4">
								<IoIosArrowForward />
							</div>
							<div className="col-8  my-2 text-center">
								<p className='font-bold text-lg'>Ayuda</p>
							</div>
							<div className="col-3 my-2 text-center ml-4">
								<IoIosArrowForward />
							</div>
							<div className="col-8 my-2 text-center">
								<p className='font-bold text-lg'>Conócenos</p>
							</div>
							<div className="col-3 my-2 text-center ml-4">
								<IoIosArrowForward />
							</div>
						</div>

						<hr className="bg-white my-4" />

						<div className="d-flex justify-content-around text-white text-2xl">
							<FiTwitter />
							<FaInstagram />
							<FiFacebook />
							<FiLinkedin />
							<FiYoutube />
						</div>

						<hr className="bg-white my-4" />

				</div>

                </div>
			
		</>
	);
}

export default Footer;