import { Link } from "react-router-dom";

function BlogLists({blogs  })   {
    
    return (  

        <div className="BlogLists">
            
            {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
             
                <div>
                    <Link to={`blog/${blog.id}`}>
                <h2>{blog.title}</h2>
                <p>{blog.Auther}</p>
                <p>{blog.body}</p>
                <p>id = {blog.id}</p>
                </Link>
                </div>


            </div>
        ))}


        </div>

    );
}
 
export default BlogLists;