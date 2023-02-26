import React,{useState,useEffect} from 'react';
import useFetch from './useFetch';







const DataFetch = () => {

    const {data,dataLoad,error} =useFetch("https://jsonplaceholder.typicode.com/todos")



    const loadMeasage = <p>Data is loading</p>


  return (
    <div>
        {error && <p>{error}</p>}
        {dataLoad && loadMeasage}
        {
        
        data &&
        data.map((todo)=>{
            return <p key={todo.id}>{todo.title}</p>
        })
      }
    </div>
  )
}

export default DataFetch
