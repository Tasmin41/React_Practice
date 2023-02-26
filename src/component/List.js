import React,{useState} from "react";

const List = () =>{

    const [name,functio] = useState("Tasmin");
    const [info,infoFunctio] = useState({});


    const changeState = () =>{
        functio("Riya");
        infoFunctio({
            age:23,
            contac: 34345563464,
            add:"edgah",
        });
    }
    return (
        <div className="App">
            <button onClick={changeState}>Change</button>
           <h4>{name}</h4>
           <div>
            <p>Age : {info.age}</p>
            <p>contact :{info.contac} </p>
            <p>Address : {info.add}</p>
           </div>
        </div>
    );
}


export default List