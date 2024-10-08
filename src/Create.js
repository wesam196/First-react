import { useState } from "react";
import { json } from "react-router-dom";
import Createrequest from "./Createrequest";
import {useNavigate } from "react-router-dom";
const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Wesam');
    const [isLoading, setLoading] = useState(false);
    const history = useNavigate();


    const handleRequest = (e) =>{
        e.preventDefault();
        const blog =  {title, body, author};
        setLoading(true)
        Createrequest('http://localhost:8000/blogs', blog).then(()=>{
            setLoading(false);
            history('/')
        });
   
    
    }


    return (

        <div className="create">
            <h2>Welcome To Create Page</h2>
        
            <form onSubmit={handleRequest}> 
                <label>Blog Title</label>
                <input type="text" required  value={title} onChange={(e)=> setTitle(e.target.value)} />

                <label >Blog Body</label>
                <textarea required  value={body} onChange={(e)=> setBody(e.target.value)} >
                </textarea>

                <label> Author</label>
                <select value={author} onChange={(e)=> setAuthor(e.target.value)} >
                    <option value="Wesam">Wesam</option>
                    <option value="Ali">Ali</option>
                    <option value="Omar">Omar</option>
                </select>


                 {!isLoading && <button>Add blog</button>}
                 {isLoading && <button disabled >adding...</button>}
             
        
            </form>
        </div>

      )
    
    ;
}
 
export default Create;