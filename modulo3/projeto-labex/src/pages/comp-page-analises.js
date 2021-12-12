import styled from "styled-components"
import { StyledBasePage } from "../styles/style-pages"
import { useEffect, useState } from "react";

import { useHistory } from "react-router-dom";
import { getTrips, deleteTrip } from "../api/labex";

const StyledCard = styled.div`
    background-color: gray;
    margin: 10px auto;
`

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
            <StyledCard key={item.id}>  
                <div onClick={() => {goToPageAnalisesVer(item.id)}}>
                    <h4>{item.name}</h4> 
                    <h5>{item.planet}</h5>
                </div>
                <div onClick={() => {deleteTrip(item.id)}}>
                        <h1> X </h1>
                </div>
            </StyledCard>
        )
    })
    
    
    
    
    
    const callLogout = () => {
        set_loginOn(false)
    }


    // const token = window.localStorage.getItem("success")

    return (
        <StyledBasePage>
            {renderedTrips}
            <button onClick={goToPageAnalisesCriar}>Criar Viagem</button>
        </StyledBasePage>
    )
}