function BlogLists({blogs  })   {
    
    return (  

        <div className="BlogLists">
            
            {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
             
                <div>
                <h2>{blog.title}</h2>
                <p>{blog.Auther}</p>
                <p>{blog.body}</p>
                <p>id = {blog.id}</p>
                </div>


            </div>
        ))}


        </div>

    );
}
 
export default BlogLists;