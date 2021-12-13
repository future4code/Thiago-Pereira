import styled from "styled-components";

export const StyledForm = styled.div`
display: flex;
flex-direction: column;



background: var(--cinza);
width: 35%;
border-radius: 12px;

justify-content: center;
align-items: center;
text-align: center;
place-items: center;
margin: 0 auto;
margin-top: 10px;

    form {
        display: flex;
        flex-direction: column;
        place-items: center;
    }

    input, textarea{
        margin: 6px;
        font-size: 12px;
        width: 300px;
        padding: 7px 10px;
        background-color: var(--cinza);
        color: var(--branco);
}

    select{
        width: 250px;
    }

`