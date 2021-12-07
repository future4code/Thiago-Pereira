import styled from "styled-components";
import { useState } from "react";

import CompNav from "./comp-nav";
import PageHome from "../pages/comp-page-home";
import PageViagens from "../pages/comp-page-viagens";
import PageCandidatar from "../pages/comp-page-candidatar";
import PageSobre from "../pages/comp-page-sobre";
import PageContato from "../pages/comp-page-contato";




const StyledContent = styled.div`
/* background-color: purple; */
background-image: url('https://s1.1zoom.me/b4647/584/Cosmonauts_Surface_of_planets_525931_1920x1080.jpg');
  background-repeat: no-repeat;
  background-size: cover;
width: 100%;
`

export default function CompContent() {
    const [actualScreen, set_actualScreen] = useState('home')

    const goToPageHome = () => {
        set_actualScreen('home')
    }

    const goToPageViagens = () => {
        set_actualScreen('viagens')
    }

    const goToPageCandidatar = () => {
        set_actualScreen('candidatar')
    }

    const goToPageSobre = () => {
        set_actualScreen('sobre')
    }

    const goToPageContato = () => {
        set_actualScreen('contato')
    }



    const chooseScreen = () => {
        switch (actualScreen) {
            case 'home':
                return <PageHome />
            case 'viagens':
                return <PageViagens />
            case 'candidatar':
                return <PageCandidatar />
            case 'sobre':
                return <PageSobre />
            case 'contato':
                return <PageContato />
            default:
                return <div>VISH</div>
        }
    }


    return(
        <StyledContent>
            <CompNav 
                goToPageHome={goToPageHome}
                goToPageViagens={goToPageViagens}
                goToPageCandidatar={goToPageCandidatar}
                goToPageSobre={goToPageSobre}
                goToPageContato={goToPageContato}
            />
            {chooseScreen()}
        </StyledContent>
    )
}