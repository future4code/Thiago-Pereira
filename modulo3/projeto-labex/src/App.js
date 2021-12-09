import './App.css';
import axios from "axios";
import { useState } from 'react';


import CompHeader from './components/comp-header';
import CompSite from './components/comp-site';

function App() {
  const [logado, set_logado] = useState(true)
  

  return (
    <div>
      <CompHeader 
        logado={logado}
      />
      <CompSite />
    </div>
  );
}

export default App;
