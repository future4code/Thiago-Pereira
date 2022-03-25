import { useState } from "react"
import { useHistory } from "react-router-dom"
import { changePage } from "../../Router/routerGPS"
import { StyledHeader } from "./style"



export const CompHeader = () => {
    const [daurizio, set_daurizio] = useState(false)

    const history = useHistory()


    return(
        <StyledHeader>
            <div className="header-text">
                <h2 onClick={() => changePage(history, "/")}>TMDB</h2>

                <div onMouseLeave={() => set_daurizio(false)} className="daurizio">
                    <span onClick={() => {set_daurizio(!daurizio)}}> 
                        {daurizio ?
                        <a href="https://www.linkedin.com/in/thiago-daurizio-616b54226/" target="_blank"><ion-icon name="logo-linkedin" /></a>
                        :
                        <></>    
                    }
                    </span>
                    {
                        daurizio ?
                        <h3>Thiago Daurizio</h3>
                        :
                        <h3></h3>
                    }
                </div>
            </div>
        </StyledHeader>
    )
}