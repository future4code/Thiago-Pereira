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
            cursor: pointer;
            transition: 0.6s;

            :hover{
                filter: drop-shadow(0 0 5px var(--details));
                color: var(--details);
            }
        }

        .daurizio{
            display: flex;
            height: 100%;
            align-items: center;

                span{
                background-color: var(--lighter);
                width: 50px;
                height: 20px;
                margin-left: 5px;
                border-radius: 12px;
                border: 1px solid silver;
                transition: 1s;
                cursor: pointer;
                display: flex;
                justify-content: center;
                align-items: center;

                    ion-icon{
                        font-size: 2em;
                        color: #0e76a8;
                        z-index: 1000;
                        margin-top: 0.15em;
                    }
                }

            :hover{
                span{

                    width: 40px;
                    height: 35px;
                }
            }
        }
    
        

        h3{
            color: var(--lighter);
            text-align: center;
            margin-left: 15px;
            transition: 1s;
        }
    }

`