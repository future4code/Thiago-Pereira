import React from "react";
import styled from "styled-components";


const StyledFooter = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: rgba(214, 122, 127, 0.8);
    padding: 15px;
    border: 1px solid rgba(225, 222, 227, 0.55)
`


const StyledInputs = styled.div`


    input {
    outline: none;
    padding: 5px 8px;
    margin-right: 5px;
    background-color: rgba(71, 48, 73, 0.6);
    border:1px solid silver;
    margin-left: 15px;
    border-radius: 8%;
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

const StyledContacts = styled.div`
    width: 15%;
    font-size: 0.8em;
    align-items: center;

    font-size: 1rem;
    padding: 0 8px;
    color: rgba(214, 122, 127, 0.9);
    background-color: rgba(15, 5, 15, 0.555);
    border:1px solid rgba(225, 222, 227, 0.55);
    border-radius: 5px;

    img{
        height: 1.5em;
    }
`

export default class CompFooter extends React.Component{
    render(){
        return(

            <StyledFooter>

                <StyledInputs>
                    <input 
                        type="text"
                        placeholder="Música"
                        onChange={this.props.onChangeInputFooterMusica}
                        value={this.props.inputFooterMusica}
                    />
                    <input 
                        type="text"
                        placeholder="Artista"
                        onChange={this.props.onChangeInputFooterArtista}
                        value={this.props.inputFooterArtista}
                    />
                    <input 
                        type="url"
                        placeholder="Link"
                        onChange={this.props.onChangeInputFooterLink}
                        value={this.props.inputFooterLink}
                    />
                    <button
                        onClick={() => {this.props.onClinkInputAddMusic(this.props.playlistOnNowID)}}
                    > adicionar à playlist atual
                    </button>
                </StyledInputs>

                <StyledContacts>
                    <p>Autor: Thiago Daurizo</p>
                    <p><a href="https://www.instagram.com/thiagodaurizio/" target="_blank"><img src='../LabefyContact.png' alt='logo'/></a> (Contato)</p>
                </StyledContacts>
            </StyledFooter>
        )
    }
}