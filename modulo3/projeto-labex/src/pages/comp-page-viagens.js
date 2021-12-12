import styled from "styled-components"
import axios from "axios"

import { StyledBasePage, StyledBaseViagens } from "../styles/style-pages"
import { StyledCard } from "../styles/style-item"

import '../styles/style-color.css'

import { useState, useEffect } from "react"
import { getTrips } from "../api/labex"

export default function PageViagens() {
    const [tripsList, set_tripsList] = useState([])
    
    useEffect(() => {
        getTrips(set_tripsList)
    }, []);


    const renderedTrips = tripsList.map((item) => {
        return (
            <StyledCard key={item.id}>  
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



    return (
        <StyledBaseViagens>
            <h2>Veja aqui as Missões que temos disponiveis</h2>
            {renderedTrips}
        </StyledBaseViagens>
    )
}