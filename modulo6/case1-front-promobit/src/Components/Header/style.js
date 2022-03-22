import styled from "styled-components";

export const StyledHeader = styled.div`
    background-color: var(--primary);
    height: 3rem;
    
    .header-text{
        display: flex;
        align-items: center;
        height: 100%;

        h2{
            margin-left: 5vw;
            color: var(--lighter);
            letter-spacing: 0.5em;
        }
    
        span{
            background-color: var(--lighter);
            width: 50px;
            height: 20px;
            margin-left: 5px;
            border-radius: 12px;
            border: 1px solid silver;
        }
    }

`