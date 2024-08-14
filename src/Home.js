import { useState, useEffect } from "react";
import BlogLists from "./BlogLists";



function Home(){

    var [blogs , setBolg] = useState([
        {title: 'First subject', body: 'First subject body....', Auther: 'Wesam', id: 1 },
        {title: 'Second subject', body: 'Second subject body...', Auther: 'Wesam', id: 2},
        {title: 'Third subject', body: 'Third subject body...', Auther: 'Omar', id: 3},
    ]);

    var [name, setName] = useState('Wesam');
    var [job, setJob] = useState('Developer');

    function handleDelete(id){
       var newlist = blogs.filter(blog=>
            blog.id !==id


        );

        setBolg(newlist);
    }

    useEffect( ()=>{
        console.log('use effect function');
    },[name, job])

    return(
        <div className="Home">
            <BlogLists blogs={blogs} handleDelete={handleDelete} />
            
            <p>{name}</p>
            <button onClick={()=>{setName('Ali')}}>change name</button>
            <br />
            <p>{job}</p>
            <button onClick={()=>{setJob('full stack')}}>change name</button>
            </div>
    );
}


export default Home;