import React from "react";
import CompNav from "./comp-nav";
import CompSection from "./comp-section";
import styled from "styled-components"

const StyledSite = styled.div`
    /* background-image: url("https://ddragon.leagueoflegends.com/cdn/img/champion/splash/Qiyana_2.jpg");
    background-repeat: no-repeat;
    background-size: cover; */
    /* background-color: thistle; */
    height: 100%;
    background-color: rgba(65, 45, 55, 0.7);
    border-radius: 0 24px 24px 0;
    border-top: 1px solid snow;
    border-right: 1px solid snow;
    border-bottom: 1px solid snow;
`


export default class CompSite extends React.Component{
    render(){
        return(
            <StyledSite>
                <CompNav 
                    inputPlaylist={this.props.inputPlaylist}
                    onChangeInputPlaylist={this.props.onChangeInputPlaylist}
                    onClickInputPlaylist={this.props.onClickInputPlaylist}
                />
                <CompSection
                    playlist={this.props.playlist}
                    deletePlaylist={this.props.deletePlaylist}
                    getPlaylistTracks={this.props.getPlaylistTracks}
                    playlistOnNow={this.playlistOnNow}
                    deletePlaylistConfirm={this.props.deletePlaylistConfirm}
                />
            </StyledSite>
        )
    }
} 