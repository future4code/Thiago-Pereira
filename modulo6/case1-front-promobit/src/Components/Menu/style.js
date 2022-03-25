import styled from "styled-components";

export const StyledMenu = styled.div`
    background-color: var(--secondary);
        min-height: 10rem;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        color: var(--lighter);
        letter-spacing: 0.25rem;
        padding: 1rem;
        /* width: 100%; */

        .menu-text{
            margin-top: 2rem;
            width: 50%;
            text-align: center;
        }

        .menu-setup{
            display: flex;
            flex-direction: column;
            text-align: center;
            width: 50%;

            h5{
                margin: 4rem 0 10px 0;
            }
        }

        .menu-label{
            display: flex;
            flex-wrap: wrap;
            justify-content: center;
            width: 75%;

            label{
                background-color: var(--lighter);
                margin: 0.5rem;
                color: var(--secondary);
                font-weight: bold;
                cursor: pointer;
                height: 1.5em;
                min-width: 7em;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 4px;
                border: 1px solid rgba(111, 111, 111, 0.3);
            }

            label input{
                    appearance: none;
                    display: none;
                }

            label span{
                height: 100%;
                width: 100%;
                text-align: center;
                letter-spacing: 0;
                display: flex;
                align-items: center;
                justify-content: center;
                transition: 0.5s;

                :hover{
                    background-color: var(--primary);
                    border-radius: 4px;
                    border: 1px solid rgba(111, 111, 111, 0.3);
                }
            }

            label input:checked ~.checked-span{
                background-color: var(--details);
                border-radius: 4px;
                transition: 0.9s;
                border: 1px solid var(--lighter);

                :hover{
                    opacity: 0.7;
                }
            }

        }


        @media(max-width: 650px) {
            .menu-text{
                margin-top: 2rem;
                width: 100%;
                text-align: start;
            }

            .menu-label{
                width: 90%;
            }
        }
`