import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getMovieCredits, getMovieDetailts, getMovieList, getMovieVideos } from "../../API/Axios_gets"
import { CompDetails } from "../../Components/Details"
import { API_KEY } from "../../Constants/API_KEY"
import GlobalStateContext from "../../Global/GlobalStateContext"
import { changePage } from "../../Router/routerGPS"
import { convertDate } from "../../Utilities/convertDate"
import { idMaker } from "../../Utilities/idMaker"
import { StyledDetailsCard, StyledPageDetails, StyledRecomendations, StyledRecomendationsCard, StyledTrailer } from "./style"


export const PageDetails = () => {
    const {movieDetails, set_movieDetails, movieCredits, set_movieCredits, movieVideos, set_movieVideos, movieRecomendedList, set_movieRecomendedList} = useContext(GlobalStateContext)

    const history = useHistory()

    useEffect(() => {
        const id = history.location.pathname.split("/")[2]
        getMovieCredits(set_movieCredits, id)
        getMovieVideos(set_movieVideos, id)
        getMovieList(set_movieRecomendedList, id)
        window.scrollTo(0, 0)
    }, [])

    const renderedCast = movieCredits.cast && movieCredits.cast.map((cast) => {
        return(
            <StyledDetailsCard key={idMaker()}>
                <img src={`https://image.tmdb.org/t/p/w500${cast.profile_path}`} alt={`Imagem de ${cast.name}`} />
                <div className="card-text">
                    <p>{cast.name}</p>
                    <p>{cast.character}</p>
                </div>
            </StyledDetailsCard>
        )
    })

    const renderedTrailer = movieVideos && movieVideos.map((trailer) => {
        return(
            <StyledTrailer key={idMaker()}>
                <iframe width="560" height="315" src={`https://www.youtube.com/embed/${trailer.key}`} title={`${trailer.name}`}></iframe>
            </StyledTrailer>
        )
    })

    const goToMovieDetails = (id) => {
        getMovieDetailts(set_movieDetails, id)
        getMovieCredits(set_movieCredits, id)
        getMovieVideos(set_movieVideos, id)
        getMovieList(set_movieRecomendedList, id)
        window.scrollTo(0, 0)
        changePage(history, "/details", id)
    }

    const renderedRecomendations = movieRecomendedList && movieRecomendedList.map((list) => {
        return(
            <StyledRecomendationsCard key={idMaker()} onClick={() => goToMovieDetails(list.id)}>
                <img src={`https://image.tmdb.org/t/p/w500${list.poster_path}`} alt={`Imagem de ${list.title}`} />
                <div className="card-text">
                    <p>{list.title}</p>
                    <p>{convertDate(list.release_date)}</p>
                </div>
            </StyledRecomendationsCard>
        )
    })

    return(
        <div>
            <CompDetails />
            <StyledPageDetails>
                {renderedCast}
            </StyledPageDetails>

            <h2 style={{marginLeft: '2rem', marginBottom: '1rem'}}> Trailer </h2>
            {renderedTrailer}

            <h2 style={{marginLeft: '2rem', marginBottom: '1rem'}}> Recomendações </h2>

            <StyledRecomendations>
                {renderedRecomendations}
            </StyledRecomendations>

        </div>
    )
}

