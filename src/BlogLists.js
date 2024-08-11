function BlogLists({blogs})   {
    return (  

        <div className="BlogLists">
            
            {blogs.map((blog)=>(
            <div className="blog-preview" key={blog.id}>
                <h2>{blog.title}</h2>
                <p>{blog.Auther}</p>

            </div>
        ))}


        </div>

    );
}
 
export default BlogLists;