import styled from "styled-components";

export const StyledCardTrips = styled.div`
    background-color: var(--cinza);
    width: 350px;
    min-height: 300px;
    padding: 5px 25px;
    margin: 5px;
    align-items: center;
    border-radius: 12px;

    h3{
        color: var(--amarelo);
    }

    h5{
        display: inline;
        color: var(--amarelo);
        
    }
`

export const StyledT1Button = styled.div`

    button{
        background-color: rgba(200, 200, 200, 0.2);
        color: var(--amarelo);
        border: 2px solid var(--amarelo);
        width: 150px;
        padding: 10px 20px;
        cursor: pointer;
        border-radius: 15px;
        transition: .35s;
    }

    button:hover{
        background-color: var(--amarelo);
        color: var(--branco);
        border: 2px solid var(--azul);
    }

    button:active{
        background: var(--azul);
        border: 2px solid var(--branco);
    }
`

export const StyledNegativeButton = styled.button`
        background-color: var(--negative);
        padding: 2px 15px;
        margin: 2px;
        border: 1px solid rgba(111, 111, 111, 0);
        color: var(--branco);
        border-radius: 4px;
        width: 80px;

        :hover{
            border: 1px solid var(--preto);
            background-color: rgba(255, 0, 0, 0.5);
            cursor: pointer;
            transition: 0.3s;
        }

        :active{
            border: 1px solid var(--cinza);
            background-color: rgba(255, 0, 0, 0.2);
            color: var(--preto);
        }


`

export const StyledPositiveButton = styled.button`
        background-color: var(--positive);
        padding: 2px 15px;
        margin: 2px;
        border: 1px solid rgba(111, 111, 111, 0);
        color: var(--branco);
        border-radius: 4px;
        width: 80px;

        :hover{
            border: 1px solid var(--preto);
            background-color: rgba(31, 196, 31, 0.5);
            cursor: pointer;
            transition: 0.3s;
        }

        :active{
            border: 1px solid var(--cinza);
            background-color: rgba(31, 196, 31, 0.2);
            color: var(--preto);
        }
`