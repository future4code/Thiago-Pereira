import styled from "styled-components";

export const StyledMenuDetails = styled.div`
    background-color: var(--secondary);
        min-height: 25rem;
        color: var(--lighter);
        padding: 1rem;
        display: flex;
        flex-direction: column;

        p, h2{
            margin: 0;
            display: inline;
        }
        
        .menu{
            display: flex;
            flex-direction: row;
            margin-left: 5%;
            margin-top: 1.5rem;
        }

        .menu-photo{
            img{
                position: absolute;
                border-radius: 5px;
            }
        }

        .menu-text{
            margin-left: 20rem;
            width: 100%;
        }

        .section-1{
            margin-bottom: 0.5rem;
            h2{
                margin-right: 0.50em;
            }
        }

        .section-2{
            margin-bottom: 0.5rem;
            display: flex;
            font-size: 0.95em;
            p{
                margin-right: 1em;
            }

            .section-2_child1{
                margin-right: 1em;
            }

            .section-2_child2{
                margin-right: 1em;
            }

            .section-2_child3{
                color: var(--primary);
                font-size: 0.85em;
            }
        }

        .section-3{
            height: 5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .section-3_child1{
                color: var(--details);
                font-size: 0.75em;
                font-weight: bolder;
            }

            .section-3_child2{
                color: lime;
                font-weight: bolder;
                font-size: 1.75em;
                margin-left: 2rem;
            }
        }

        .section-4{
            margin-bottom: 1rem;
            width: 75%;
        }

        .section-5{
            display: flex;
            flex-direction: row;
            flex-wrap: wrap;
        }


        @media(max-width: 650px) {
            .menu{
                display: flex;
                flex-direction: column;
                align-items: center;
                justify-content: center;
                place-items: center;
                text-align: center;
                margin-left: 5%;
                margin-top: 1.5rem;
                padding: 0.5em;
            }

            .menu-photo{
                display: block;
                img{
                    display: block;
                    width: 10rem;
                    border-radius: 5px;
                    margin-left: -5rem;
                }
            }

            .menu-text{
                width: 100%;
                margin-left: 0rem;
                margin-top: 15rem;
                text-align: center;
                display: flex;
                flex-direction: column;
            }


            .section-2 {
            margin-bottom: 0.5rem;
            display: flex;
            font-size: 0.95em;
            }

            .section-3{
            height: 5rem;
            display: flex;
            flex-direction: column;
            justify-content: center;

            .section-3_child1{
                color: var(--details);
                font-size: 0.75em;
                font-weight: bolder;
            }

            .section-3_child2{
                color: lime;
                font-weight: bolder;
                font-size: 1.75em;
                margin-left: 0;
            }
        }

            .section-4{
                text-align: center;
                width: 100%;
            }

            .section-5{
                display: flex;
                flex-direction: row;
                flex-wrap: wrap;
                margin-left: 5rem;
            }
        }
`

export const StyledMenuNames = styled.div`
            display: flex;
            flex-direction: column;
            width: 10rem;
            height: 4rem;
            margin-right: 2rem;

            p:nth-child(1){
                font-weight: bolder;
                margin-bottom: 0.15em;
                font-size: 1.05em;
            }
        `