// import './App.css';
import React from "react";
import styled from "styled-components";

import CompHeader from "./components/comp-header";
import CompSite from "./components/comp-site";
import CompFooter from "./components/comp-footer";
// import CompSection from "./components/comp-section";
// import CompNav from "./components/comp-nav";
import axios from "axios";



const StyledSite = styled.div`
display: flex;
`

const StyledMusicArea = styled.div`
display: flex;
flex-direction: column;
width: 80%;
background-color: rgba(65, 15, 25, 0.1);

`

const StyledMusicAreaInitial = styled.p`
  color: snow;
  margin-left: 20px;
  max-width: 50%;
  background-color: rgba(65, 15, 25, 0.7);
  border-radius: 32px;
  padding: 15px;
`

const StyledMusicCamp = styled.div`
  display: flex;
  flex-basis: 100%;
  flex-wrap: wrap;
  flex-flow: 4;
  background-color: rgba(115, 25, 55, 0.2);
  margin: 10px 10px 10px 10px;
  padding: 8px;
  border-radius: 32px;
  min-width: 25%;
  font-size: .8rem;
  color: cornflowerblue;
`

const StyledMusicCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background-color: rgba(65, 25, 55, 0.7);
  margin: 10px;
  padding: 10px;
  border-radius: 32px;
  width: 150px;
  height: 200px;
  font-size: .8rem;
  color: cornflowerblue;
  border: 1px solid snow;

  div{
    display: flex;
    align-self: center;
    background-color: rgba(214, 122, 127, 0.15);
    padding: 3px 10px;
    border-radius: 10px;
    border: 1px solid rgba(214, 122, 127, 0.55);

  }
  button{
        background-color: rgba(53, 34, 85, 0.65);
        margin: 3px;
        border-radius: 5px;
        border: 1px solid silver;
        font-size: 1.07rem;
        padding: 5px 10px;
        cursor: pointer;
    }

    button:hover{
        background-color: rgba(83, 64, 115, 0.89);
        margin: 3px;
        border-radius: 5px;
        border: 1px solid silver;
    }

    button:active{
        background-color: rgba(113, 64, 115, 0.89);
        margin: 3px;
        border-radius: 5px;
        border: 1px solid cornflowerblue;
        font-size: 1.06rem;
    }
`

const StyledMusicBoard = styled.div`
  background-color: rgba(65, 25, 55, 0.7);
  margin: 60px 0px 0px 10px;
  padding: 8px;
  border-radius: 32px;
  min-width: 50%;
  max-width: 75%;
  font-size: .8rem;
  color: cornflowerblue;
`




export default class App extends React.Component{
  state = {
    playlist: [],
    playlistHits: [],
    playlistOnNow: "-( nenhuma playlist aberta )-",
    playlistOnNowID: "",

    inputPlaylist: "",
    inputFooterMusica: "",
    inputFooterArtista: "",
    inputFooterLink: "",
  }

  componentDidMount() {
    this.getAllPlaylists();
    this.getPlaylistTracks();
  }

          // tentativa falha de limpar inputs após usar.
  // clearInputs = () => {
  // console.log('limpou')
  // this.setState({inputPlaylist: ""})
  // this.setState({inputFooterMusica: ""})
  // this.setState({inputFooterArtista: ""})
  // this.setState({inputFooterLink: ""})
  // }


//                                   FUNÇÕES DE GET, DELETE e POST

    getAllPlaylists = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
      axios.get( url, {
        headers: { Authorization: "thiago-daurizio-carver" }
      }).then((resp) => {
        // console.log("getAllPlaylists", resp.data.result.list)
        this.setState({playlist: resp.data.result.list})
        // this.clearInputs()
      }).catch((error) => {
        // console.log(error)
      })

    }

    getPlaylistTracks = (id, name) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
      axios.get( url, {
        headers: { Authorization: "thiago-daurizio-carver" }
      }).then((resp) => {
        console.log(resp)
        this.setState({playlistHits: resp.data.result.tracks})
        // console.log("TesteHits:", resp.data.result.tracks)
        this.setState({playlistOnNowID: id})
        this.setState({playlistOnNow: name})
        // this.clearInputs()
      }).catch((error) => {
        console.log(error)
      })
    }

    deletePlaylist = (id) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}`
      axios.delete( url, {
        headers: {Authorization: "thiago-daurizio-carver"}
      }).then ((resp) => {
        // console.log(resp)
        alert("😭 Playlist Deletada")
        this.getAllPlaylists()
      }).catch((error) => {
        // console.log(error)
      })
    }

    removeTrackFromPlaylist = (trackId) => {
      const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${this.state.playlistOnNowID}/tracks/${trackId}`
      axios.delete( url, {
        headers: {Authorization: "thiago-daurizio-carver"}
      }).then ((resp) => {
        alert("😭 Música Deletada")
        this.getAllPlaylists()
        this.getPlaylistTracks()
      }).catch((error) => {
        // console.log(error)
      })  
    }

    deletePlaylistConfirm = (id) => {
      if(window.confirm("🥺 Poxa, você quer mesme excluir esta Playlist?")){
        this.deletePlaylist(id)
      }else{
        return alert("😎 Playlist não deletada")
      }
    }

    deleteMusicConfirm = (trackId) => {
      if(window.confirm("🥺 Poxa, você quer mesme excluir esta Música?")){
        this.removeTrackFromPlaylist(trackId)
      }else{
        return alert("😎 Música não deletada")
      }
    }


    onClickInputPlaylist = () => {
      const url = "https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists"
      let body = {
        name: this.state.inputPlaylist
      }
      axios.post(url, body, {
          headers: {Authorization: "thiago-daurizio-carver"}
        }).then((resp) => {
          // console.log(resp.data)
          this.setState({inputPlaylist: ""})
          this.getAllPlaylists()
        }).catch((error) => {
          // console.log(error.data)
        })        
      }

      onClinkInputAddMusic = (id, name) => {
        const url = `https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists/${id}/tracks`
        let body = {
          name: this.state.inputFooterMusica, 
          artist: this.state.inputFooterArtista,
          url: this.state.inputFooterLink,
        }
        axios.post(url, body, {
          headers: {Authorization: "thiago-daurizo-carver"}
        }).then((resp) => {
          this.getPlaylistTracks(id, name)
          this.setState({inputFooterMusica: ""})
          this.setState({inputFooterArtista: ""})
          this.setState({inputFooterLink: ""})
          console.log("funcionou")
        }).catch((error) => {
          // console.log(error.response.data)
        })
      }

//                                   INPUTS DE onChage
      onChangeInputPlaylist = (event) => {
        this.setState({
          inputPlaylist: event.target.value
        })
        return console.log(this.state.inputPlaylist)
      }

      onChangeInputFooterMusica = (event) => {
        this.setState({
          inputFooterMusica: event.target.value
        })
      // return console.log(this.state.inputFooterMusica)
      }

      onChangeInputFooterArtista = (event) => {
        this.setState({
          inputFooterArtista: event.target.value
        })
        // return console.log(this.state.inputFooterArtista)
      }

      onChangeInputFooterLink = (event) => {
        this.setState({
          inputFooterLink: event.target.value
        })
        // return console.log(this.state.inputFooterLink)
      }





//                                   RENDER
  render(){
    const renderedPlaylists = this.state.playlistOnNow.toUpperCase()

    const renderedPlaylistHits = this.state.playlistHits.map((item) => {
      return <StyledMusicCard key={item.id}>


        <p>
          <strong>{item.name}</strong></p>
        <p>
          {item.artist} 
        </p>
        <div>
        <a href={item.url} target="_blank">
            <button> 
              ▶️ 
            </button>
        </a>  

            <button
              onClick={() => {this.deleteMusicConfirm(item.id)}}
            >
              ❌
            </button>
        </div>

        </StyledMusicCard>
    })
    return(
      <div>
      <CompHeader />
        <StyledSite>                
          <div>
        <CompSite
        playlist={this.state.playlist}
        inputPlaylist={this.state.inputPlaylist}
        onChangeInputPlaylist={this.onChangeInputPlaylist}
        onClickInputPlaylist={this.onClickInputPlaylist}
        deletePlaylist={this.deletePlaylist}
        getPlaylistTracks={this.getPlaylistTracks}
        playlistOnNow={this.playlistOnNow}
        deletePlaylistConfirm={this.deletePlaylistConfirm}
        />

          </div>

          <br />

          <StyledMusicArea>
              <StyledMusicBoard> 
                <strong> 🌟 {renderedPlaylists} </strong>
              </StyledMusicBoard>
              
              {this.state.playlistOnNow !== "-( nenhuma playlist aberta )-" ? <StyledMusicCamp>
                  {renderedPlaylistHits} 
              </StyledMusicCamp> 
              : 
              <div>
              <StyledMusicAreaInitial> Olá caro(a) instrutor(a) sou Thiago da turma Carver 😁 </StyledMusicAreaInitial>
              <StyledMusicAreaInitial> Bem vindo(a) ao meu Projeto solo pela Labenu. </StyledMusicAreaInitial>
              <StyledMusicAreaInitial> Bora ouvir uma música? 🎧🎶 </StyledMusicAreaInitial>
              <StyledMusicAreaInitial> Basta selecionar uma playlist ai no 💬 </StyledMusicAreaInitial>
              <StyledMusicAreaInitial> 😠 "Thiago nos tem mais o que fazer do que ficar aqui ouvindo música" </StyledMusicAreaInitial>
              <StyledMusicAreaInitial> 🤗 Ok Ok... Perdão. 😄 Vamos lá... Básicamente o sumário de icones podem ver na direita superior, aparente esta tudo funcional menos a função de <u>addTrackToPlaylist</u>, hehe 😅 problemas técnicos, mas quero arruma-la assim que possível. </StyledMusicAreaInitial>
              <StyledMusicAreaInitial> 🤔💭 "Mds... tem jeito não este rapaz é doido de pedra mesmo, gezuis..." </StyledMusicAreaInitial>
              
              </div>
              }
              
          </StyledMusicArea>

        </StyledSite>
        <CompFooter 
        inputFooterMusica={this.state.inputFooterMusica}
        inputFooterArtista={this.state.inputFooterArtista}
        inputFooterLink={this.state.inputFooterLink}
        onChangeInputFooterMusica={this.onChangeInputFooterMusica}
        onChangeInputFooterArtista={this.onChangeInputFooterArtista}
        onChangeInputFooterLink={this.onChangeInputFooterLink}
        onClinkInputAddMusic={this.onClinkInputAddMusic}
        playlistOnNowID={this.state.playlistOnNowID}
        />
        </div>
    )
  }
}