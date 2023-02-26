import React,{useState,useEffect} from 'react'





const DataFetch = () => {

    const [dataFetch,setData]=useState(null);
    const [dataLoad,setLoading]=useState(true);
    const [error,setError]=useState(null);

    const loadMeasage = <p>Data is loading</p>

    useEffect(()=>{
        setTimeout(() => {
            fetch("https://jsonplaceholder.typicode.com/tod")
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
        }, 2000);
    },[])
  return (
    <div>
        {error && <p>{error}</p>}
        {dataLoad && loadMeasage}
        {
        
        dataFetch &&
        dataFetch.map((todo)=>{
            return <p key={todo.id}>{todo.title}</p>
        })
      }
    </div>
  )
}

export default DataFetch
