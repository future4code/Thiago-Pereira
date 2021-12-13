import styled from "styled-components";
import { useState } from "react";

import { StyledNavBar } from "../styles/style-navbar";
import { useHistory } from "react-router-dom";

const StyledMenu = styled.div`
display: flex;
height: 10vh;
align-items: center;
justify-content: center;
padding-bottom: 25px;
`

export default function CompNav() {
    const history = useHistory();
    const [actualPage, set_actualPage] = useState('')
    
    const [pageHome, set_pageHome] = useState('list active')
    const [pageViagens, set_pageViagens] = useState('list')
    const [pageCandidatar, set_pageCandidatar] = useState('list')
    const [pageSobre, set_pageSobre] = useState('list')
    const [pageAnalises, set_pageAnalises] = useState('list')

    const goToNavHome = () => {
        history.push("/")
        set_pageHome('list active')
        set_pageViagens('list')
        set_pageCandidatar('list')
        set_pageSobre('list')
        set_pageAnalises('list')
    }

    const goToNavViagens = () => {
        history.push('/trips/list')
        set_pageHome('list')
        set_pageViagens('list active')
        set_pageCandidatar('list')
        set_pageSobre('list')
        set_pageAnalises('list')
    }

    const goToNavCandidatar = () => {
        history.push('/trips/application')
        set_pageHome('list')
        set_pageViagens('list')
        set_pageCandidatar('list active')
        set_pageSobre('list')
        set_pageAnalises('list')
    }

    const goToNavSobre = () => {
        history.push('/wiki')
        set_pageHome('list')
        set_pageViagens('list')
        set_pageCandidatar('list')
        set_pageSobre('list active')
        set_pageAnalises('list')
    }

    const goToNavAnalises = () => {
        const token = localStorage.getItem("token")
        if(token === null){
            history.push('/admin/trips/error')
        } else{
            history.push('/admin/trips/list')
        }

        set_pageHome('list')
        set_pageViagens('list')
        set_pageCandidatar('list')
        set_pageSobre('list')
        set_pageAnalises('list active')
    }


    return(
        <StyledMenu>        
            <StyledNavBar>

            <ul>
                <li className={`${pageHome}`}>
                    <a onClick={() => goToNavHome()}> 
                        <span className="icon"><ion-icon name="planet-outline"></ion-icon></span>
                        <span className="text">HOME</span>
                    </a>
                </li>

                <li className={`${pageViagens}`}>
                    <a onClick={() => goToNavViagens()}> 
                        <span className="icon"><ion-icon name="airplane-outline"></ion-icon></span>
                        <span className="text">MISSÕES</span>
                    </a>
                </li>

                <li className={`${pageCandidatar}`}>
                    <a onClick={() => goToNavCandidatar()}> 
                        <span className="icon"><ion-icon name="reader-outline"></ion-icon></span>
                        <span className="text">CANDIDATAR</span>
                    </a>
                </li>

                <li className={`${pageSobre}`}>
                    <a onClick={() => goToNavSobre()}> 
                        <span className="icon"><ion-icon name="search-outline"></ion-icon></span>
                        <span className="text">SOBRE</span>
                    </a>
                </li>

                <li className={`${pageAnalises}`}>
                    <a onClick={() => goToNavAnalises()}> 
                        <span className="icon"><ion-icon name="chatbox-ellipses-outline"></ion-icon></span>
                        <span className="text">ANALISES</span>
                    </a>
                </li>

                <div className="ball-selector">

                </div>
            </ul>

            </StyledNavBar>
        </StyledMenu>
    )
}