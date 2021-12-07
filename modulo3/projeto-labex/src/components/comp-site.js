import styled from "styled-components"

import CompSidebar from "./comp-sidebar"
import CompContent from "./comp-content"


const StyledSite = styled.div`
    /* background-color: Green; */
    display: flex;
    justify-content: space-between;
    min-height: 100%;
`

export default function CompSite() {
    return(
        <StyledSite>
            <CompContent />
            <CompSidebar />
        </StyledSite>
    )
}