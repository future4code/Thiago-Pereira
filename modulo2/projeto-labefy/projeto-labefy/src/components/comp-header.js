import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgba(214, 122, 127, 0.8);
    padding: 10px;
    font-weight: bolder;
    font-size: 1.5rem;
    color: rgb(104, 4, 197);
    border: 1px solid rgba(225, 222, 227, 0.55)
`

const StyledTitle = styled.div`
    display: flex;
    background-color: rgba(15, 5, 15, 0.555);
    width: 11em;
    padding: 2px;
    border-radius: 15%;
    border: 1px solid rgba(225, 222, 227, 0.55)
`

const StyledSumary = styled.div`
    display: flex;
    align-items: center;
    font-size: 1rem;
    padding: 8px;
    color: rgba(214, 122, 127, 0.9);
    background-color: rgba(15, 5, 15, 0.555);
    border:1px solid rgba(225, 222, 227, 0.55);
    border-radius: 5px;
`

const StyledSumaryCards = styled.div`
    background-color: rgba(15, 5, 15, 0.555);
    border-radius: 15%;
    border: 1px solid rgba(225, 222, 227, 0.55);
    padding: 5px;
    font-size: 0.8rem;
    color: snow;
    margin-left: 5px;
`


export default class CompHeader extends React.Component{
    render(){
        return(
            <StyledHeader>
                <StyledTitle>
                    🌌🎶 
                    <img src='../LabefyLogo.png' alt='logo'/>
                    👾 
                </StyledTitle>


                <StyledSumary>
                    Ajuda?
                <StyledSumaryCards> 
                💬 ver playlist
                </StyledSumaryCards>

                <StyledSumaryCards> 
                ▶️ play
                </StyledSumaryCards>

                <StyledSumaryCards> 
                ❌ deletar
                </StyledSumaryCards>
                 
                </StyledSumary>
            </StyledHeader>
                
        )
    }
} 