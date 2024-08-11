import { useState } from "react";
import BlogLists from "./BlogLists";



function Home(){

    var [blogs , setBolg] = useState([
        {title: 'First subject', body: 'First subject body....', Auther: 'Wesam', id: 1 },
        {title: 'Second subject', body: 'Second subject body...', Auther: 'Wesam', id: 2},
        {title: 'Third subject', body: 'Third subject body...', Auther: 'Omar', id: 3},
    ]);

    function handleDelete(id){
       var newlist = blogs.filter(blog=>
            blog.id !==id


        );

        setBolg  (newlist);
    }

    return(
        <div className="Home">
            <BlogLists blogs={blogs} handleDelete={handleDelete} />
            
            </div>
    );
}


export default Home;