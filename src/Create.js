import { useState } from "react";

const Create = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Wesam');

    return (

        <div className="create">
            <h2>Welcome To Create Page</h2>

            <form>
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


                <button>Add blog</button>
        
            </form>
            
        </div>

      )
    
    ;
}
 
export default Create;