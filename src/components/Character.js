// Write your Character component here
import React from "react"
import styled from "styled-components"


const StyledDiv = styled.div`
font-family: sans-serif;
text-align: left;
border: 5px black dotted; 
border-radius: 10%10%;
padding-left:2rem;
width: 15rem; 
margin: 2rem;
`;

const StyledHeader = styled.h3`
    color: yellow;
    
    
`;

const StyledPara = styled.p`
font-family: Arial, Helvetica, sans-serif;
line-height: 1.5rem;

`


const Character = (props) => {

    return (
        <section>
            {
                props.character.map(character => (
                    <StyledDiv>
                        <StyledHeader>{character.name} </StyledHeader>
                        <StyledPara>
                            <p>gender: {character.gender}</p>
                            <p>Height: {character.height}</p>
                            <p>Mass: {character.mass}</p>
                            <p>BirthYear: {character.birth_year}</p>
                            <p>Eye Color: {character.eye_color}</p>
                            <p>Hair Color: {character.hair_color}</p>
                            <p>Skin Color: {character.skin_color}</p>
                        </StyledPara>
                    </StyledDiv>
                ))
            }
        </section>
    )
}

export default Character