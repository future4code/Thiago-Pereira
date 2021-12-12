import styled from "styled-components"
import '../styles/style-color.css'

import CompLog from "./comp-log"

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgba(243, 243, 244, 1);
    height: 11vh;
    text-align: center;
    align-items: center;

    h1{
        display: inline;
        color: var(--amarelo);

    }

    h2{
        display: inline;
        justify-content: center;
        color: var(--azul);
        font-size: 1.8em;
    }
    
`


export default function CompHeader(props) {
    return(
        <StyledHeader>
            <p></p>
            <div>
            <h2>LABE </h2><h1> X</h1>
            </div>
            <CompLog />
        </StyledHeader>
    )
}