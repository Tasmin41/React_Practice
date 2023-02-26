import React from 'react';
import Child from './Child';

export default function Parent() {
    const parentData ="Hello Parent compo data";
    const dataGet = (get)=>{
        console.log(get);
    }
  return (
    <div>
      <h1>I am parent component</h1>
      <Child pData={parentData} cData={dataGet}/>
    </div>
  )
}
