import { useState, useEffect } from "react";

function useFetch(url){
    var [data , setData] = useState(null);
    var [isLoading, setLoading] = useState(true);
    var [error, setError] = useState(null);


    useEffect( ()=>{
            
        
        fetch(url)
            .then(res =>{
                if(!res.ok){
                     //setError('unable to get data from server');
                     throw Error('unable to get data from server');
                }
                setError(null);
                return res.json() ; 
    })
            .then(data =>{
                setData(data);
                setLoading(false);
    })
            .catch(err=>{
                setError(err.message);
                setLoading(false);
            })
     
    },[url])

    
    return{data, isLoading , error}




}

export default useFetch;