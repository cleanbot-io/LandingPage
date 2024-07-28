import BlogPost from "../../components/Blog"
import Image from "next/image";
import NavBar from "../../components/NavBar";
import Footer from "../../components/Footer";

function Blogfunct(){
    return(
        <div className="bg-white">
            <NavBar />
         <div className="bg-black mt-20">
         <Image
              src="/newblog.png"
              alt="Picture of leadership"
              width={1200} height={400}
            />
         </div>
         <div className="text-black m-5">
            <div className="text-center text-4xl">Articles Below</div>
            <BlogPost />
           
         
         </div>
         <Footer />
         
        </div>
        
        
    
    )
}

export default Blogfunct;
