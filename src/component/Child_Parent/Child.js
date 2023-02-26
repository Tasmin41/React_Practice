import React from 'react'
import Parent from './Parent'

export default function Child(props) {
    const cData="Child Compo data";
    props.cData(cData);
  return (
    <div>
      <h1>{props.pData}</h1>
    </div>
  )
}
