import styled from "styled-components";
import { useState } from "react";

import '../styles/style-color.css'
import { StyledNavBar } from "../styles/style-navbar";

const StyledMenu = styled.div`
display: flex;
height: 10vh;
align-items: center;
justify-content: center;
/* background-color: var(--cor-bg-principal); */

padding-bottom: 25px;

`

export default function CompNav(props) {
    const [actualPage, set_actualPage] = useState('')
    
    const [pageHome, set_pageHome] = useState('list active')
    const [pageViagens, set_pageViagens] = useState('list')
    const [pageCandidatar, set_pageCandidatar] = useState('list')
    const [pageSobre, set_pageSobre] = useState('list')
    const [pageContato, set_pageContato] = useState('list')

    const goToNavHome = () => {
        props.goToPageHome()
        set_pageHome('list active')
        set_pageViagens('list')
        set_pageCandidatar('list')
        set_pageSobre('list')
        set_pageContato('list')
    }

    const goToNavViagens = () => {
        props.goToPageViagens()
        set_pageHome('list')
        set_pageViagens('list active')
        set_pageCandidatar('list')
        set_pageSobre('list')
        set_pageContato('list')
    }

    const goToNavCandidatar = () => {
        props.goToPageCandidatar()
        set_pageHome('list')
        set_pageViagens('list')
        set_pageCandidatar('list active')
        set_pageSobre('list')
        set_pageContato('list')
    }

    const goToNavSobre = () => {
        props.goToPageSobre()
        set_pageHome('list')
        set_pageViagens('list')
        set_pageCandidatar('list')
        set_pageSobre('list active')
        set_pageContato('list')
    }

    const goToNavContato = () => {
        props.goToPageContato()
        set_pageHome('list')
        set_pageViagens('list')
        set_pageCandidatar('list')
        set_pageSobre('list')
        set_pageContato('list active')
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
                        <span className="text">VIAGENS</span>
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

                <li className={`${pageContato}`}>
                    <a onClick={() => goToNavContato()}> 
                        <span className="icon"><ion-icon name="chatbox-ellipses-outline"></ion-icon></span>
                        <span className="text">CONTATO</span>
                    </a>
                </li>

                <div className="ball-selector">

                </div>
            </ul>

            </StyledNavBar>

            {/* <script>
                const list = document.querySelectorAll('.list')
                function activeNav(){
                list.forEach((item) => 
                item.classList.remove('active'))
                }
            </script> */}

        </StyledMenu>
    )
}