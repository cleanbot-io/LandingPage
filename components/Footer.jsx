import Link from "next/link";
import {SocialIcon} from "react-social-icons";
import Image from "next/image";

function Footer()
{
    const currentYear = new Date().getFullYear();

    return(
        <footer className="bg-gray-900 text-white py-8" >
            <Link href="/">
                            <Image src="/dalle.png" width={30} height={30} alt="logo" className="ml-5" />
                        </Link>
            <div className="container mx-auto flex justify-center space-x-4">
                <Link href="/about" className="text-blue-400 hover:text-blue-300">
                    About
                </Link>

                <Link href="/subscription" className="text-blue-400 hover:text-blue-300">
                <span className="text-gray-400"> | </span>
                    Subscription
                </Link>


                <Link href = "/contact" className="text-blue-400 hover:text-blue-300">
                <span className="text-gray-400"> | </span>
                
                    Contact
                
                </Link>

                <Link href="/cleaners" className="text-blue-400 hover:text-blue-300">
                <span className="text-gray-400"> | </span>
                    Cleaners
                </Link>
            </div>

            <p className="text-center mt-4 text-gray-400 text-sm">
                &copy; {currentYear} Cleanbot. All Rights Reserved.
            </p>
            <div className ="flex flex-column p:10 w-screen text-blue-400 space-x-16 justify-between items-center">
                <div className="space-x-4">
                   <a href="" className="text-blue-400 ml-4">Conduct</a>
                    <a href="" className="text-blue-400">Terms of Use & Privacy</a>
                    <a href="" className="text-blue-400">Disclosures</a> 
                </div>
                
                <div className="p-4 space-x-4">
                    <SocialIcon url="https://x.com/" bgColor = "transparent"/>
                    <SocialIcon url="https://www.linkedin.com/company/cleanbot/" bgColor = "transparent"/>
                    <SocialIcon url="https://facebook.com/" bgColor = "transparent"/>
                    <SocialIcon url="https://instagram.com/" bgColor = "transparent"/>
                    <SocialIcon url="https://youtube.com/" bgColor = "transparent" className="mr"/> 
                </div>
                
                
        
            </div>
        </footer>
    )
}

export default Footer;