import React,{useState,useEffect} from 'react'

const useFetch = (url) => {
    const [data,setData]=useState(null);
    const [dataLoad,setLoading]=useState(true);
    const [error,setError]=useState(null);

    useEffect(()=>{
        fetch(url)
        .then((res)=>{
            if(!res.ok){
              throw Error("Error Occured");
            }else{
                return res.json();
            }
            
        })
        .then((data)=>{
            setData(data);
            setLoading(false);
            setError(null)
        })
        .catch((error)=>{
            setError(error.message);
            setLoading(false);
        })
    },[url])

    return {data,dataLoad,error}
}

export default useFetch
