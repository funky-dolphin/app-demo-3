import React from "react";

function Animal ({image, name, sex, species}){
return(
    <nav>
    <h3>{"Species: " + species}</h3>
    <h4>{"Name: " + name}</h4>
    <h4>{"sex: " + sex}</h4>
    <img src={image}/>
    </nav>
)
}

export default Animal