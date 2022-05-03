import styled from "styled-components";
import { lotoColor } from "../../Colors/collors";

const getColor = color => {
    if(color === 0){
        return `background-color: ${lotoColor.megasena};`
    }

    if(color === 1){
        return `background-color: ${lotoColor.quina};`
    }

    if(color === 2){
        return `background-color: ${lotoColor.lotofacil};`
    }

    if(color === 3){
        return `background-color: ${lotoColor.lotomania};`
    }

    if(color === 4){
        return `background-color: ${lotoColor.timemania};`
    }

    if(color === 5){
        return `background-color: ${lotoColor.diadesorte};`
    }
}


export const StyledPageContainer = styled.div`
${({ color }) => getColor(color)}
min-height: 100vh;
display: flex;


.area-select{
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    width: 40%;
    padding: 5em 0;
    color: ${lotoColor.textColor};

    select{
        width: 10rem;
        height: 2rem;
    }
}

.area-results{
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    align-items: center;
    justify-content: space-around;
    background-color: rgb(235, 235, 235);
    border-radius: 10% 0 0 10%;
    width: 60%;
    padding: 4rem;

    .area-results-balls{
        display: flex;
        flex-wrap: wrap;
    }
}

    @media(max-width: 800px) {
        display: flex;
        flex-direction: column;
        text-align: center;

        .area-select{
            display: flex;
            flex-direction: column;
            justify-content: center;
            text-align: center;
            width: 100%;
        }


        .area-results{
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 10% 10% 0 0;
            width: 100%;
            padding: 4rem 0;
            text-align: center;
            min-height: 100%;
            padding-bottom: 5rem;

            h5{
                margin-top: 5rem;
            }


            .area-results-balls{
            display: flex;
            justify-content: center;
            flex-wrap: wrap;
            height: 100%;
            }
        }
    }
`







export const StyledNumbersBall = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-weight: bolder;
    margin: 5px;
    background-color: white;
    width: 70px;
    height: 70px;
    border-radius: 50%;
    border: 1px solid silver;
`