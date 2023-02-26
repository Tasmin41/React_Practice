import React from 'react';
import Info from './Info';
import '../data.json';

function InforLoad() {
  return (
    <div>
        <section className='information-section'>
        <div className='container'>
          <div className='row'>
          {
        data.map((item,index)=><div className='col-xl-4' key={index}>
          <Info  name = {item.name} age ={item.age} contact = {item.contact} address={item.address}/>
        </div>)
        }
          </div>
        </div>
    </section>
    </div>
  )
}

export default InforLoad
