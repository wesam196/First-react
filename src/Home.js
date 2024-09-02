import BlogLists from "./BlogLists";
import useFetch from "./useFetch";



function Home(){

    var {data:blogs, isLoading, error} = useFetch('http://localhost:8000/blogs');


    return(
        <div className="Home">
            {error && <h1 >{error}</h1>}
            {isLoading && <p>Loading...</p>}

    

            {blogs && <BlogLists blogs={blogs}   />}

           
            </div>
    );
}


export default Home;