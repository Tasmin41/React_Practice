import React from 'react';
import { useNavigate } from 'react-router-dom';

const Contact = () => {
    const navigate = useNavigate();
  return (
    <div>
        <h1>Contact Page</h1>
        <p>Quale lui piú pregator noia cospetto le e, dio cose l'uomo come dallo di di e segreto che. Una grazia.</p>
        <p>Convexa ojos encuentro sensitivo entonces las para venas los bala comida, brooklyn sillas huido escobazos la luna que los de.</p>
        <button onClick={()=>{
            navigate("/")
        }}>
          Go to home page
        </button>
  </div>
  )
}

export default Contact
