import styled from "styled-components";

export const StyledNavBar = styled.div`
background-color: var(--azul);
display: flex;
justify-content: center;
position: relative;
width: 400px;
height: 60px;
border-radius: 15px;
margin-top: 4px;

ul{
    display: flex;
    width: 350px;

    li{
        position: relative;
        list-style: none;
        width: 70px;
        height: 60px;
        z-index: 2;

        a{
            display: flex;
            flex-direction: column;
            position: relative;
            justify-content: center;
            align-items: center;
            width: 100%;
            text-align: center;
            font-weight: 600;
            cursor: pointer;

            .icon{
                display: block;
                position: relative;
                line-height: 65px;
                font-size: 1.8em;
                transition: 0ms.5s;
                color: var(--branco);

                :hover{
                    color: var(--amarelo)
                }
            }

            .text{
                position: absolute;
                background-color: var(--amarelo);
                color: var(--branco);
                padding: 2px 7px;
                border-radius: 12px;
                font-weight: 400;
                font-size: 0.85em;
                letter-spacing: 0.05em;
                transition: 0ms.5s;
                opacity: 0;
                transform: translateY(-15px)
            }
        }
    }
}

ul{
    li.active{
        a{
            .icon{
                transform: translateY(32px);
                color: var(--amarelo);
            }
        }
    }
}

ul{
    li.active{
        a{
            .text{
                transform: translateY(4px);
                color: var(--amarelo);
                opacity: 1;
                color: var(--branco);
            }
        }
    }
}

.ball-selector{
    position: absolute;
    width: 65px;
    height: 65px;
    border-radius: 50%;
    background-color: var(--azul);
    /* background-color: red; */
    bottom: -40%;
    z-index: 1;
    transition: 0ms.5s;

}

ul li:nth-child(1).active ~ .ball-selector{
    transform: translateX(calc(70px * 0))
}

ul li:nth-child(2).active ~ .ball-selector{
    transform: translateX(calc(70px * 1))
}

ul li:nth-child(3).active ~ .ball-selector{
    transform: translateX(calc(70px * 2))
}

ul li:nth-child(4).active ~ .ball-selector{
    transform: translateX(calc(70px * 3))
}

ul li:nth-child(5).active ~ .ball-selector{
    transform: translateX(calc(70px * 4))
}

`