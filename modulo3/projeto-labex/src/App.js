import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';


import CompHeader from './components/comp-header';
import CompSite from './api/comp-site';
import { RouterPage } from './router';
import { StyledCard } from './styles/style-item';

function App(props) {
  const [logado, set_logado] = useState(true)
  const [listaViagens, set_listaViagens] = useState([])
    
  const myName = "thiago-daurizio-carver"
  const baseURL = "https://us-central1-labenu-apis.cloudfunctions.net/labeX/"

//   const renderedViagens = listaViagens.map((item) => {
//     return (<div>
//         {item}
//     </div>)
// })


  const getTrips = () => {
    const url = `${baseURL}${myName}/trips`
    axios.get( url, 
        ).then((resp) => {
            console.log(resp.data.trips)
            set_listaViagens(resp.data.trips)
            console.log("aqui", listaViagens)
        }).catch((error) => {
            console.log(error.response)
        })
}

  useEffect(() => {
    getTrips()
    }, []);

    const renderedViagens = listaViagens.map((item) => {
      return (
          <StyledCard key={props.id}>

              <h3>{item.name}</h3>
              <br />
              <p><h5>Descrição: </h5>{item.description}</p>
              <p><h5>Planeta: </h5>{item.planet}</p>
              <p><h5>Duração: </h5>{item.durationInDays} dias</p>
              <p><h5>Data: </h5>{item.date}</p>
              <br />
          </StyledCard>
      )
  })

const infoPicker = () => {
  console.log("console do App.js", listaViagens)
} 
      

  return (
    <div>
              {/* <button onClick={infoPicker}> info </button> */}
      <CompHeader 
        logado={logado}
      />

      <RouterPage 
        listaViagens={listaViagens}
        renderedViagens={renderedViagens}
        getTrips={getTrips}
      />

    </div>
  );
}

export default App;
