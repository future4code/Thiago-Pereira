import React from "react";
import styled from "styled-components";


const StyledSection = styled.div`
/* background-color: rgba(65, 45, 55, 0.7); */
min-height: 100vh;
max-height: 300vh;
min-width: 100%;
min-width: 20vw;
/* min-height: 100%; */
padding: 10px;
`
const StyledList = styled.p`
font-weight: bolder;
font-size: .8rem;
color: cornflowerblue;

    button{
        background-color: rgba(53, 34, 85, 0.65);
        margin: 3px;
        border-radius: 5px;
        border: 1px solid silver;
        font-size: 1.07rem;
        padding: 2px 5px;
        cursor: pointer;
    }

    button:hover{
        background-color: rgba(83, 64, 115, 0.89);
        margin: 3px;
        border-radius: 5px;
        border: 1px solid silver;
        font-size: 1.1rem;
    }

    button:active{
        background-color: rgba(113, 64, 115, 0.89);
        margin: 3px;
        border-radius: 5px;
        border: 1px solid cornflowerblue;
        font-size: 1.06rem;
    }
`


export default class CompSection extends React.Component{
    render(){
        const renderedPlaylists = this.props.playlist.map((item) => {
            return (<StyledList key={item.id}>
                <button onClick={()=> this.props.getPlaylistTracks(item.id, item.name)}>💬</button>
                <button onClick={() => this.props.deletePlaylistConfirm(item.id)}>❌</button>
                 ✨ {item.name}
                </StyledList>)
        })
        return(
            <StyledSection>
                <div>{renderedPlaylists}</div>
            </StyledSection>
        )
    }
} 