import React from 'react';
import { Link } from 'react-router-dom';
import { blogData } from './data';


const Blogs = () => {
  const truncateString = (str,num)=>{
    if(str.length > num){
      return str.slice(0,num) + "...";
    }else{
      return str;
    }
  }

  return (
    <div>
        <h1>Blog Page</h1>
        {
          blogData.map((blog)=>{
            const {id,title,body}=blog
            return <article key={id}>
              <h3>{title}</h3>
              <p>{truncateString(body,100)}</p>
              <Link to={title} state={{id,title,body}}>Learn More</Link>
            </article>
          })
        }
  </div>
  )
}

export default Blogs
