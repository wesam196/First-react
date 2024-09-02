import { useParams } from "react-router-dom";


function BlogDetails ()  {
    const {id} = useParams();
    return (  
        
        <h1>Blog Details - {id}</h1>



    );
}
 
export default BlogDetails;