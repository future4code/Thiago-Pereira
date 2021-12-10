import styled from "styled-components"
import { StyledBasePage, StyledBaseAnalises } from "../styles/style-pages"

import { useHistory } from "react-router-dom";

export default function PageAnalisesVer() {
    const history = useHistory();

    const goBackRoute = () => {
        history.goBack()
    }


    return (
        <StyledBasePage>
            <h3>Detalhes ADM das viagens</h3>
            <div>
                <button onClick={goBackRoute}>Voltar</button>
            </div>
        </StyledBasePage>
    )
}