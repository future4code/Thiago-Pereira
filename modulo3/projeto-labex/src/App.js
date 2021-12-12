import './App.css';
import axios from "axios";
import { useEffect, useState } from 'react';

import { myName, baseURL } from './api/labex';

import CompHeader from './components/comp-header';
import CompSite from './api/comp-site';
import { RouterPage } from './router';
import { StyledCard } from './styles/style-item';

function App(props) {
  const [acessoOn, set_acessoOn] = useState(false)
  const [token, set_token] = useState("")

  const loginStatus = () => {
    
  }


  return (
    <div>
              {/* <button onClick={infoPicker}> info </button> */}
      <CompHeader 
      />

      <RouterPage 
        acessoOn={acessoOn}
      />

    </div>
  );
}

export default App;
