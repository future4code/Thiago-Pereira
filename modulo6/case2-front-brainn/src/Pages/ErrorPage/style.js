import styled from "styled-components";

export const StyledPageError = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: auto;
    min-height: 100vh;

    h1{
        margin-bottom: 5px;
    }

    h2{
        margin-top: 5px;
    }

    button{
        color: white;
        height: 45px;
        width: 85px;
        background-color: red;
        font-weight: bolder;
        border-radius: 7px;
        border: 1px solid transparent;
        transition: 0.4s;
        cursor: pointer;
        opacity: 0.9;

        :hover{
            opacity: 1;
            border: 1px solid black;
        }

        :active{
            filter: drop-shadow(0 0 3px red);
        }
    }
`