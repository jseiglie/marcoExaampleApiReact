import React, {useContext} from "react";
import { Context } from "../store/appContext";
import Character from "./character";

const CharacterList = ()=> {
    const {store, actions} = useContext(Context)

    return (
        <div className="container">
            <div className="row">
                { 
                    store.characters.map((character, index)=>{
                        return (
                            <div className="col-12 col-md-4" key={index}>
                                <Character 
                                    id={character.id}
                                    image={character.image} 
                                    name={character.name} 
                                    gender={character.gender} 
                                    status={character.status}
                                />
                            </div>
                        )
                    })
                }
            </div>
        </div>
    )
}

export default CharacterList;
