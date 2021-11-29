import React from "react";
import styled from "styled-components";

const StyledNav = styled.div`
/* background-color: rgba(65, 45, 55, 0.7); */
min-width: 100%;
min-width: 20vw;
padding: 10px 0 10px 0;

input {
    outline: none;
    padding: 5px 8px;
    margin-right: 5px;
    background-color: rgba(71, 48, 73, 0.6);
    border:1px solid silver;
    margin-left: 15px;
    border-radius: 8%;
    transition-delay: 0.05s
}

input:hover{
    background-color: rgba(71, 48, 73, 0.8);
    color: silver;
    border-radius: 15%;
}

input:focus{
    background-color: rgba(71, 18, 73, 0.8);
    color: silver;
    border-radius: 20%;
}



button {
    background-color: rgba(117, 25, 117, 0.850);
    padding: 10px;
    /* border: none; */
    border: 1px solid rgba(25, 125, 175, 0.750);
    /* color: rgb(255, 0, 179); */
    color: white;
    font-style: unset;
    cursor: pointer;
    border-radius: 25%;
}

button:hover{
    background-color: rgba(75, 125, 175, 0.800);
    padding: 10px;
    color: silver;
    border: 1px solid silver;
    font-style: italic;
}

button:active{
    background-color: rgba(95, 155, 195, 0.850);
    padding: 10px;
    color: silver;
    border: 1px solid silver;
    outline: skyblue;
}

`

export default class CompNav extends React.Component{
    render(){
        return(
            <StyledNav>
                <input 
                placeholder="Digite uma playlist" 
                onChange={this.props.onChangeInputPlaylist}
                id="inputPlaylist"
                />
                <button
                type="submit"
                onClick={this.props.onClickInputPlaylist}
                >Adicionar</button>
            </StyledNav>
        )
    }
} 