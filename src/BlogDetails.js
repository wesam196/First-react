import { useNavigate, useParams } from "react-router-dom";
import useFetch from "./useFetch";
import { Navigate } from "react-router-dom";

function BlogDetails ()  {
    const {id} = useParams();
    var {data:blog, isLoading, error} = useFetch('http://localhost:8000/blogs/' + id);
    const navigation = useNavigate();


    const remove = ()=>{
        fetch('http://localhost:8000/blogs/' + id,{
            method:"DELETE",
        }).then(()=>{
            navigation('/');
        })
    }


    return (  
        <div className="BlogDetails">

        
        <h1>Blog Details - {id}</h1>
        
        {error && <h1 >{error}</h1>}
        {isLoading && <p>Loading...</p>}

       
             {blog &&
                <div>
                <h2>{blog.title}</h2>
                <p>{blog.Auther}</p>
                <p>{blog.body}</p>
                <p>id = {blog.id}</p>

                <button onClick={remove}>Delete</button>
                </div>
            }






        
        
        
        </div>


    );
}
 
export default BlogDetails;