import React from "react";
import Animal from "./Animal";

function Animallist({animals}){
    const allAnimals = animals.map((animal)=> 
    <Animal key={animal.id} 
            species={animal.species}
            name={animal.name}
            sex={animal.sex}
            image={animal.image}
    /> )
    
    return(
        <nav>
             {allAnimals}
        </nav>
       
    )
}

export default Animallist