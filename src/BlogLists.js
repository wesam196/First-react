function BlogLists({blogs , handleDelete})   {
    return (  

        <div className="BlogLists">
            
            {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.Auther}</p>
                <p>id = {blog.id}</p>
                <button onClick={function second(){
                    handleDelete(blog.id)
                }}>Delete</button>

            </div>
        ))}


        </div>

    );
}
 
export default BlogLists;