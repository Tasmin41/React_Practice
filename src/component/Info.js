import React from "react";
import '../App.css';
import { FaFacebookMessenger } from 'react-icons/fa';

const Info = (props) =>{


    return (
        <div className="info-box" key={props.key}>
           <h4>Information {props.name}</h4>
           <div>
            <p>Age :{props.age}</p>
            <p>contact :{props.contact}</p>
            <p>Address : {props.address}</p>
            <button>Contact us on <FaFacebookMessenger/></button>
           </div>
        </div>
    );
}


export default Info