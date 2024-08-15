import { useState, useEffect } from "react";
import BlogLists from "./BlogLists";



function Home(){

    var [blogs , setBolg] = useState(null);
    var [isLoading, setLoading] = useState(true);
    var [error, setError] = useState(null);

    

    useEffect( ()=>{
        fetch('http://localhost:8000/blogs')
            .then(res =>{
                if(!res.ok){
                     setError('unable to get data from server');
                     throw (error);
                }
                setError(null);
                return res.json() ; 
    })
            .then(data =>{
                setBolg(data);
                setLoading(false);
    })
            .catch(err=>{
                //setError(err);
                setLoading(false);
            })
    },[])

    return(
        <div className="Home">
            {error && <h1 >{error}</h1>}
            {isLoading && <p>Loading...</p>}
            {blogs && <BlogLists blogs={blogs}  />}

           
            </div>
    );
}


export default Home;