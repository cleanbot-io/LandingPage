import BlogPost from "../../components/Blog"

function Blogfunct(){
    return(
        <div className="bg-white">
         <div className="bg-black">
           <div className="text-4xl m-2">--CleanBot</div> 
            <button className="text-2xl bg-lime-500 font style: italic p-2 m-2 ml-2">Blog</button>
         </div>
         <div className="text-black m-5">
            <div className="text-center text-xl">Articles Below</div>
            <BlogPost />
           
         
         </div>
         
        </div>
        
        
    
    )
}

export default Blogfunct;
