import React from "react";
import "./Display.css";

const Display = (props) => {
    console.log(props)
    //props is immutable
    //props.firstName = "Aryan";
    return (
        <div style={{backgroundColor: 'skyblue', border: '1px solid grey', height: '130px', width:'300px', margin: 'auto'}}>
            <div>
                <h3>Hello {props.firstName} {props.lastName}</h3>
                <h4 className="text-styling">Your age is {props.age}</h4>
            </div>
            {props.children}
        </div>
    );
}

// function Display(props) {
//     return (
//         <div>
//             <h2>Hello props.firstName props.lastName</h2>
//         </div>
//     );
// }

export default Display;