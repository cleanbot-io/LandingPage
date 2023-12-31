import Link from "next/link";

function Footer()
{
    const currentYear = new Date().getFullYear();

    return(
        <footer className="bg-gray-900 text-white py-8">
            <div className="container mx-auto flex justify-center space-x-4">
                <a href="#about" className="text-blue-400 hover:text-blue-300">
                    About
                </a>
                <span className="text-gray-400"> | </span>
                <a href="#subsciption" className="text-blue-400 hover:text-blue-300">
                    Subscription
                </a>
                <span className="text-gray-400"> | </span>
                <a href="#contact" className="text-blue-400 hover:text-blue-300">
                    Contact
                </a>
                <span className="text-gray-400"> | </span>
                <a href="#cleaners" className="text-blue-400 hover:text-blue-300">
                    Cleaners
                </a>
            </div>
            <p className="text-center mt-4 text-gray-400 text-sm">
                &copy; {currentYear} Cleanbot. All Rights Reserved.
            </p>
        </footer>
    )
}

export default Footer;