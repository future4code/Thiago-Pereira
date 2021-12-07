import styled from "styled-components"

import CompFooter from "./comp-footer"

const StyledSidebar = styled.div`
    background-color: Yellow;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    min-height: 92vh;
    width: 20%;
`

export default function CompSidebar() {
    return(
        <StyledSidebar>
            SIDEBAR
            <CompFooter />
        </StyledSidebar>
    )
}