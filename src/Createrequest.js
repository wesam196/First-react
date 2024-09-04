import { useState } from "react";

const  Createrequest= ( url , blog) => {
    // url , blog
   

       


       return fetch(url,{
            method:'POST',
            headers: {"content-type" : "application/json"},
            body: JSON.stringify(blog),
        })
     
    }

  
    

 
export default Createrequest;