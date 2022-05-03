import styled from "styled-components";

export const StyledFooter = styled.div`
/* background-color: red; */
    display: flex;
    height: 2rem;
    min-width: 35vw;
    max-width: 45vw;
    justify-content: space-around;
    align-items: center;
    margin: auto;
    margin-bottom: 2rem;

    button{
        font-weight: bolder;
        font-size: 2em;
        color: var(--primary);
        border: none;
        background-color: transparent;
        cursor: pointer;
        transition: 0.3s;
        
        :hover{
            font-size: 2.5em;
            color: var(--details);
        }
        
        :active{
            color: var(--secondary);
            filter: drop-shadow(0 0 15px var(--deatils));
        }
    }

    p{
        font-weight: bolder;
        font-size: 2em;
        color: var(--primary);
    }
`