import styled from "styled-components"

const StyledLog = styled.div`
    /* background-color: rgba(243, 243, 244, 1); */
    width: 15%;
`

export default function CompLog(props) {
    return(
        <StyledLog>
            {
            props.logado
            ?
            <p> opa </p>
            :
            <p> vish </p>
            }
        </StyledLog>
    )
}