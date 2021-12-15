
import { StyledBasePage, StyledPageTitle } from "../styles/style-pages"
import { StyledT1Button, StyledNegativeButton, StyledPositiveButton } from "../styles/style-item";
import { StyledAnaliseCard, StyledAnaliseCandidates } from "../styles/style-cards";

import { useHistory, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { getTripDetails, putDecideCandidate } from "../api/labex";



export default function PageAnalisesVer(props) {
    const [tripDetails, set_tripDetails] = useState([])

    const history = useHistory()
    const params = useParams()

    useEffect(() => {
        getTripDetails(params.id, set_tripDetails)
        }, []);



    const goBackRoute = () => {
        history.goBack()
    }
    
const renderedCandidates = (props) => {
    return tripDetails.candidates && tripDetails.candidates.map((char) => {
        return(
            <StyledAnaliseCandidates>
            
            <div>
                <strong>Nome: {char.name}, Idade: {char.age}</strong>
                <p>Descrição: {char.applicationText}</p>
                <p>Area: {char.profession}</p>
            </div>

            <div>
                <StyledPositiveButton onClick={() => {putDecideCandidate(params.id, char.candidateId, true, getTripDetails, set_tripDetails)}}> Aceitar </StyledPositiveButton>
                <StyledNegativeButton onClick={() => {putDecideCandidate(params.id, char.candidateId, false, getTripDetails, set_tripDetails)}}> Rejeitar </StyledNegativeButton>
            </div>
            
            </StyledAnaliseCandidates>
         )
    })


}



    return (
        <StyledBasePage>
            <StyledPageTitle>
                <h2>Veja aqui os detalhes desta Missão</h2>
            </StyledPageTitle>

            <StyledAnaliseCard>
                <div>
                <p><strong> Missão: </strong></p>
                <p>{tripDetails.name}</p>
                </div>

                <div>
                <p><strong> Descrição: </strong></p>
                <p>{tripDetails.description}</p>
                </div>

                <div>
                <p><strong> Planeta </strong></p>
                <p>{tripDetails.planet}</p>
                </div>

                <div> 
                <p><strong> Duração em Dias </strong></p>
                <p>{tripDetails.durationInDays}</p>
                </div>
            </StyledAnaliseCard>
            <div>
                {renderedCandidates()}
            </div>

            <StyledT1Button>
                <button onClick={goBackRoute}> VOLTAR </button>
            </StyledT1Button>

        </StyledBasePage>
    )
}