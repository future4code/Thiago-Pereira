import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import Perfil from './img/photo.png'
import Work1 from './img/work1.bmp'
import Work2 from './img/work2.png'

function App() {
  return (
    <div className="App">
      <div className="page-section-container">
        <h2>Dados pessoais</h2>
        <CardGrande 
          imagem={Perfil} 
          nome="Thiago" 
          descricao="Oi, eu sou o Thiago. Sou aluno da Labenu. Adoro os conceitos HTML e CSS, porém ainda meio que apanho para JS, especialmente Loop e algumas coisas usando Arrays/Objetos."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />

      </div>

      <div className="page-section-container">
        <h2>Experiências profissionais</h2>
        <CardGrande 
          imagem={Work1}
          nome="Healer" 
          descricao="Curandeiro da ala norte de Kalindor." 
        />
        
        <CardGrande 
          imagem={Work2} 
          nome="DPS" 
          descricao="Batedor das fileira do Monte-Hyjal com as fronteiras." 
        />
      </div>

      <div className="page-section-container">
        <h2>Minhas redes sociais</h2>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </div>
    </div>
  );
}

export default App;
