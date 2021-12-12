import styled from "styled-components"
import { StyledBasePage, StyledBaseAnalises } from "../styles/style-pages"

import { getTripDetails } from "../api/labex";

import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";

const StyledTripDetail = styled.div`
background-color: gray;
`


export default function PageAnalisesVer() {
    const [tripDetails, set_tripDetails] = useState([])

    const history = useHistory()
    const params = useParams()

    useEffect(() => {
        getTripDetails(params.id, set_tripDetails)
        }, []);



    const goBackRoute = () => {
        history.goBack()
    }
    
const renderedCandidates = () => {
    return tripDetails.candidates && tripDetails.candidates.map((char) => {
        return <p>{char.name}</p>
    })


}


    return (
        <StyledBasePage>
            <h3>Detalhes ADM das viagens</h3>
            <StyledTripDetail>
                <p>{tripDetails.name}</p>
                <p>{tripDetails.durationInDays}</p>
                <p>{tripDetails.planet}</p>
            </StyledTripDetail>
            <div>
                {renderedCandidates()}
                <button onClick={goBackRoute}>Voltar</button>
            </div>
        </StyledBasePage>
    )
}