import { FaInstagram } from "react-icons/fa6";
import { FaWhatsapp } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";




const Footer = () => {
  return (
    <div className="ourContainer py-8 md:pt-20 ">
        <div className="main md:flex justify-between md:gap-10 md:pb-10">
            <div className="footerCon1 pb-4 md:w-[20%] hidden md:block">
                <div>
                    <img src="/tclFooter.jpeg" alt="" className="h-[150px] w-[350px]"/>
                </div>
            </div>
            <div className="footerCon3 pb-3 md:w-[20%] ">
                    <h2 className="text-2xl font-medium mb-2 md:mb-3">Quik Links</h2>
                    <div className="flex flex-col gap-[5px] text-base">
                        <p>Home</p>
                        <p>About</p>
                        <p>Contact us</p>
                        <p>Blogs</p>
                        {/* <p>Tracking</p> */}

                    </div>
            </div>
            <div className="footerCon2 pb-3 md:w-[20%] ">
                <h2 className="text-2xl font-medium mb-2 md:mb-3">Need Help</h2>
                <div className="flex flex-col gap-[5px] text-base">
                    <p>Call Us : +91 98989 98989</p> 
                    <p>Email : tclinfo@.mail</p>
                    <p>FAQ</p>
                </div>
            </div>
            <div className="footerCon2 pb-3 md:w-[20%] ">
                <h2 className="text-2xl font-medium mb-2 md:mb-3">Follow us</h2>
                <div className="flex gap-[15px] text-base">
                    <p><FaInstagram className="text-2xl"/></p> 
                    <p><FaLinkedin className="text-2xl"/></p>
                    <p><FaFacebookF className="text-2xl"/></p>
                </div>
            </div>
           
        </div>

        <div className="md:flex justify-between items-center md:mt-4 mt-2">
            <p className="pb-1 md:pb-0">2024 TCL Mumbai. All Rights Reserved.</p>
            <p className="pb-4 md:pb-0">Privacy | Discalmer</p>
        </div>
    </div>
  )
}

export default Footer