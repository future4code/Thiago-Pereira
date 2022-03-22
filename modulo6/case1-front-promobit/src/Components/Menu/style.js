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

        .menu-text{
            margin-top: 2rem;
            width: 50%;
            text-align: center;
        }

        .menu-setup{
            text-align: center;
            width: 50%;

            h5{
                margin: 4rem 0 10px 0;
            }


            label{
                background-color: var(--lighter);
                margin: 2.5px;
                color: var(--secondary);
                font-weight: bold;
                cursor: pointer;
                height: 35px;
                min-width: 200px;
                
                span{
                    text-align: center;
                }

                input{
                    appearance: none;
                }
            }

            label input:checked{
                color: red;
            }
        }


`