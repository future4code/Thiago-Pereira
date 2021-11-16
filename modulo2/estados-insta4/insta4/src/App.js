import React from 'react';
import styled from 'styled-components'
import Post from './components/Post/Post';

const MainContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`

class App extends React.Component {
  state = {
    inputNome: "",
    inputFoto: "",
    inputPost: "",
    postados: [
      {id: 1, postadorNome: 'paulinha', postadorFoto: 'https://picsum.photos/50/50', postadorPost: 'https://picsum.photos/200/150'},
      {id: 1, postadorNome: 'Tyrande Whisperwind', postadorFoto: 'https://barradois.com/wp-content/uploads/2019/06/nordrassil.jpg', postadorPost: 'https://barradois.com/wp-content/uploads/2019/06/nordrassil.jpg'},
      {id: 1, postadorNome: 'Kaelthas Sunstriker', postadorFoto: 'https://lendasdeazeroth.com.br/wp-content/uploads/2013/11/106378-world-of-warcraft-mists-of-pandaria-kaelthas-sunstrider.jpg', postadorPost: 'https://lendasdeazeroth.com.br/wp-content/uploads/2013/11/106378-world-of-warcraft-mists-of-pandaria-kaelthas-sunstrider.jpg'}
    ]
  }
  

  render() {
    const postsPostados = this.state.postados.map((posts) => {
      return (
        <MainContainer>
        <Post
          nomeUsuario={'paulinha'}
          fotoUsuario={'https://picsum.photos/50/50'}
          fotoPost={'https://picsum.photos/200/150'}
        />
        <Post
          nomeUsuario={'Tyrande Whisperwind'}
          fotoUsuario={'https://barradois.com/wp-content/uploads/2019/06/nordrassil.jpg'}
          fotoPost={'https://barradois.com/wp-content/uploads/2019/06/nordrassil.jpg'}
        />
        <Post
          nomeUsuario={'Kaelthas Sunstriker'}
          fotoUsuario={'https://lendasdeazeroth.com.br/wp-content/uploads/2013/11/106378-world-of-warcraft-mists-of-pandaria-kaelthas-sunstrider.jpg'}
          fotoPost={'https://lendasdeazeroth.com.br/wp-content/uploads/2013/11/106378-world-of-warcraft-mists-of-pandaria-kaelthas-sunstrider.jpg'}
        />

      </MainContainer>
      )
    })

  }
}

export default App;
