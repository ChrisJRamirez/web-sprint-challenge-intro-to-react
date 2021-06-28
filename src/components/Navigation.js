import React from "react"
import styled from "styled-components"

const StyledNav = styled.nav`
    
    
`

const StyledInput = styled.input`
    color: grey;
    background-color: lightgrey;
`

const Navigation = (props) => {
    return (
        <StyledNav>
            <StyledInput
                placeholder="Search"
                value={props.search}
                onChange={props.searchHandler}
            />
        </StyledNav>
    )
}

export default Navigation