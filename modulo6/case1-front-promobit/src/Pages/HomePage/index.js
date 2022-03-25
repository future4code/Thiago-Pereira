import { useContext, useEffect, useState } from "react"
import { useHistory } from "react-router-dom"
import { getMovieDetailts, getPopularMovies } from "../../API/Axios_gets"
import { CompFooter } from "../../Components/Footer"
import { CompMenu } from "../../Components/Menu"
import GlobalStateContext from "../../Global/GlobalStateContext"
import { changePage } from "../../Router/routerGPS"
import { StyledHomeCard, StyledPageHome } from "./style"



export const PageHome = () => {
    const {set_movieDetails, actualPage, set_actualPage} = useContext(GlobalStateContext)
    const [moviesInHome, set_moviesInHome] = useState([])

    const history = useHistory()

    useEffect(() => {
        getPopularMovies(set_moviesInHome, actualPage)
    }, [actualPage])

    const goToMovieDetails = (movie) => {
        set_movieDetails(movie)
        changePage(history, "/details", movie.id)
    }

    const renderedScreen = moviesInHome && moviesInHome.map((movie) => {
        return(
            <StyledHomeCard key={movie.id} onClick={() => goToMovieDetails(movie)}>
                <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}/>
                <div className="card-text">
                    <p>{movie.title}</p>
                    <p>{movie.release_date}</p>
                </div>
            </StyledHomeCard>
        )
    })



    return(
        <StyledPageHome>
            <CompMenu />
            <div className="movie-list">
            {renderedScreen}
            </div>
            <CompFooter />
        </StyledPageHome>
    )
}