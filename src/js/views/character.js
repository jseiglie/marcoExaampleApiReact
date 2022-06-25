import React, {useEffect, useState} from "react";
import CharacterDetail from "../component/characterDetail";
import { useParams } from "react-router-dom";

const Character = ()=> {
    const params = useParams()
    const [character, setCharacter] = useState()

    useEffect(()=>{
        fetch(`https://rickandmortyapi.com/api/character/${params.characterid}`)
        .then(response => response.json())
        .then(response => setCharacter(response))
    }, [])

    return (
        <div className="container">
            <div className="row">
                <div className="col-12">
                    {
                        character ? 
                        <CharacterDetail 
                            image={character.image} 
                            name={character.name} 
                            gender={character.gender}
                            location={character.location.name}
                            origin={character.origin.name}
                            status={character.status}
                            species={character.species}
                        /> : "Cargando ..."
                    }
                </div>
            </div>
        </div>
    )
}

export default Character;