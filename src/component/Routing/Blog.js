import React,{useState,useEffect} from 'react';
import { useParams,useLocation } from 'react-router-dom';
import { blogData } from './data';


const Blog = () => {

  const {title} = useParams();
  const location = useLocation();
  // console.log(location);

  // const [bodyData,setBodydata]=useState("");

  // useEffect(()=>{
  //   const filderData = blogData.filter((blog)=>blog.title === title);
  //   setBodydata(filderData[0].body)
  // },[]);


  return (
    <div>
      <h1>{title}</h1>
      <p>{location.state.body}</p>
  </div>
  )
}

export default Blog
