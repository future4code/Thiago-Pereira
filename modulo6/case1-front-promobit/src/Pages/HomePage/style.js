import styled from "styled-components";

export const StyledPageHome = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    flex-direction: column;

    .movie-list{
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
    }
`

export const StyledHomeCard = styled.div`
    display: flex;
    flex-direction: column;
    width: 15rem;
    margin: 1rem;
    align-items: center;
    padding: 0.5em;
    cursor: pointer;
    transition: 0.3s;

    :hover{
        opacity: 0.7;
    }

    img{
        width: 200px;
    }

    .card-text{
        width: 190px;
        min-height: 50px;
        text-align: left;
        padding: 5px 0;
        display: flex;
        flex-direction: column;
        justify-content: space-between;

        p:nth-child(1){
        margin: 0;
        font-weight: bolder;
        }

        p:nth-child(2){
            color: gray;
            font-weight: bolder;
            margin: 0;
        }
    }



`