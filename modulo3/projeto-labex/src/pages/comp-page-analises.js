import styled from "styled-components"
import { StyledBasePage } from "../styles/style-pages"

import { useHistory } from "react-router-dom";


export default function PageAnalises(props) {
    const history = useHistory();

    const goToPageAnalisesCriar = () => {
        history.push('/admin/trips/create')
    }

    const goToPageAnalisesVer = () => {
        history.push('/admin/trips/:id')
    }

    return (
        <StyledBasePage>
            <button onClick={goToPageAnalisesCriar}>Criar Viagem</button>
            <button onClick={goToPageAnalisesVer}>Ver Detalhes</button>
        </StyledBasePage>
    )
}