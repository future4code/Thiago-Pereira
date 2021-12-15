import styled from "styled-components";




export const StyledTripCard = styled.div`
    background-color: var(--cinza);
    width: 350px;
    min-height: 300px;
    padding: 5px 25px;
    margin: 5px;
    align-items: center;
    border-radius: 12px;
    border: 2px solid var(--prata);
    margin-top: 4px;
    transition: 0.5s;
    
    p{ 
        color: var(--azul);
    }
    
    strong{
        
        color: var(--amarelo);
    }
    
    :hover{
        background-color: var(--prata);
        border: 2px solid var(--azul);

        p, h3{ 
        color: var(--preto);
    }
        
    }
`

export const StyledAnaliseCard = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: var(--cinza);
    width: 80%;
    min-height: 100px;
    padding: 5px 25px;
    margin: 5px auto;
    align-items: center;
    border-radius: 12px;
    border: 2px solid var(--prata);
    margin-top: 4px;
    transition: 0.5s;

    div{
        height: 100%;
        width: 75%;
    }
    
    p{ 
        color: var(--azul);
    }
    
    strong{
        
        color: var(--amarelo);
    }
    
    :hover{
        background-color: var(--prata);
        border: 2px solid var(--azul);
        cursor: pointer;

        p, h3{ 
        color: var(--preto);
    }
        
    }
`


export const StyledAnaliseCandidates = styled.div`
    display: flex;
    justify-content: space-between;
    background-color: var(--prata);
    width: 60%;
    min-height: 100px;
    padding: 5px 25px;
    margin: 5px auto;
    align-items: center;
    border-radius: 12px;
    border: 2px solid var(--prata);
    margin-top: 4px;
    transition: 0.5s;

    div{
        height: 100%;
        width: 75%;
    }
    
    p{ 
        color: var(--cinza);
    }
    
    strong{
        
        color: var(--amarelo);
    }
    
    :hover{
        background-color: var(--prata);
        border: 2px solid var(--azul);
        
        p, h3{ 
        color: var(--preto);
    }
        
    }
`