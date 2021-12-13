import { StyledPageViagens, StyledPageTitle } from "../styles/style-pages"
import { StyledTripCard } from "../styles/style-cards"

import { useState, useEffect } from "react"
import { getTrips } from "../api/labex"



export default function PageViagens() {
    const [tripsList, set_tripsList] = useState([])
    
    useEffect(() => {
        getTrips(set_tripsList)
    }, []);


    const renderedTrips = tripsList.map((item) => {
        return (
            <StyledTripCard key={item.id}>  
                <h3>{item.name}</h3>
                <br />
                <p><strong>Descrição: </strong>{item.description}</p>
                <p><strong>Planeta: </strong>{item.planet}</p>
                <p><strong>Duração: </strong>{item.durationInDays} dias</p>
                <br />
            </StyledTripCard>
        )
    })



    return (
        <div>

        <StyledPageTitle>
        <h2>Veja aqui as Missões que temos disponiveis</h2>
        </StyledPageTitle>

        <StyledPageViagens>
            {renderedTrips}
        </StyledPageViagens>

        </div>
    )
}