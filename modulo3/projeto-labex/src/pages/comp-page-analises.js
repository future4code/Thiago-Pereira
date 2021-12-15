import { StyledBasePage, StyledPageTitle } from "../styles/style-pages"
import { StyledT1Button, StyledNegativeButton } from "../styles/style-item"
import { StyledAnaliseCard } from "../styles/style-cards";

import { useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { getTrips, deleteTrip } from "../api/labex";


export default function PageAnalises() {
    const [loginOn, set_loginOn] = useState(true)
    const history = useHistory();

    const [tripsList, set_tripsList] = useState([])

    const goToPageAnalisesCriar = () => {
        history.push('/admin/trips/create')
    }

    const goToPageAnalisesVer = (id) => {
        history.push(`/admin/trips/${id}`)
    }

    useEffect(() => {
        const token = localStorage.getItem("token")
            if(token === null){
                callLogout()
            }
        
        getTrips(set_tripsList)
    }, [tripsList])

    
    const renderedTrips = tripsList.map((item) => {
        return (
            <StyledAnaliseCard key={item.id} onClick={() => {goToPageAnalisesVer(item.id)}}>  
                <div >
                    <strong>{item.name}</strong> 
                </div>
                <div> <p> {item.description} </p></div>
                <div>
                <StyledNegativeButton onClick={() => {deleteTrip(item.id)}}> Deletar </StyledNegativeButton>
                </div>
            </StyledAnaliseCard>
        )
    })
    
    
    const callLogout = () => {
        set_loginOn(false)
    }


    return (
        <StyledBasePage>
            <StyledPageTitle>
                <h2>Administre aqui as Missões disponiveis</h2>
            </StyledPageTitle>

            {renderedTrips}
            <StyledT1Button>
                <button onClick={goToPageAnalisesCriar}> IR CRIAR MISSÃO </button>
            </StyledT1Button>
        </StyledBasePage>
    )
}