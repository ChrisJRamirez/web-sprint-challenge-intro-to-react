// Write your Character component here
import React from "react"

const Character = (props) => {

    return (
        <section>
            {
                props.character.map(character => (
                    <div>
                        <h3>{character.name} </h3>
                        {/* <button onClick={close}></button> */}
                        <p>gender: {character.gender}</p>
                        <p>Height: {character.height}</p>
                        <p>Mass: {character.mass}</p>
                        <p>BirthYear: {character.birth_year}</p>
                        <p>Eye Color: {character.eye_color}</p>
                        <p>Hair Color: {character.hair_color}</p>
                        <p>Skin Color: {character.skin_color}</p>
                    </div>
                ))
            }
        </section>
    )
}

export default Character