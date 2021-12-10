import styled from "styled-components"
import { StyledBasePage, StyledBaseAnalises } from "../styles/style-pages"

import { useHistory } from "react-router-dom";

export default function PageAnalisesCriar() {
    const history = useHistory();

    const goBackRoute = () => {
        history.goBack()
    }

    return (
        <StyledBasePage>
            <h3>Criar ADM uma nova viagem</h3>
            <div>
                <button onClick={goBackRoute}>voltar</button>
            </div>
        </StyledBasePage>
    )
}