import styled from "styled-components";

export const StyledPageTitle = styled.div`
    color: var(--preto);
    border: 2px solid var(--amarelo);
    background-color: var(--branco);
    width: 50%;
    border-radius: 12px;
    text-align: center;
    margin: 0 auto;
    padding: 3px;
    margin-top: 6px;
    
    :hover{
        border: 2px solid var(--azul)
    }
`

export const StyledBasePage = styled.div`
    text-align: center;
    color: var(--branco);
    justify-content: center;
    padding: 10px;
`


export const StyledPageViagens = styled.div`
    display: flex;
    flex-wrap: wrap;
    color: var(--branco);
    justify-content: center;
`

export const StyledPageHome = styled.div`
    background-color: var(--prata);
    width: 450px;
    min-height: 300px;
    padding: 10px 25px;
    margin: 5px;
    align-items: center;
    border-radius: 12px;
    border: 2px solid var(--prata);
    margin-top: 4px;
    transition: 0.5s;
    margin: 0 auto;
    
    p{ 
        color: var(--preto);
    }
    
    :hover{
        background-color: var(--prata);
        border: 2px solid var(--azul);

        p{ 
        color: var(--azul);
    }
        
    }
`

export const StyledPageSobre = styled.div`
    background-color: var(--prata);
    width: 650px;
    min-height: 100%;
    padding: 10px 25px;
    margin: 5px;
    align-items: center;
    border-radius: 12px;
    border: 2px solid var(--prata);
    margin-top: 4px;
    transition: 0.5s;
    margin: 0 auto;
    
    p{ 
        color: var(--preto);
    }
    
    :hover{
        background-color: var(--prata);
        border: 2px solid var(--azul);

        p{ 
        color: var(--azul);
    }
        
    }
`