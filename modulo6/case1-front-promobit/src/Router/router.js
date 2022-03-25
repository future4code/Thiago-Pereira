import { Route } from "react-router-dom"
import { Switch } from "react-router-dom"
import { BrowserRouter } from "react-router-dom"
import { CompHeader } from "../Components/Header"
import { CompMenu } from "../Components/Menu"
import { PageDetails } from "../Pages/DetailsPage"
import { ErrorPage } from "../Pages/ErrorPage"
import { PageHome } from "../Pages/HomePage"



export const Router = () => {
    return(
        <BrowserRouter>
            <CompHeader />
            <Switch>
                <Route exact path="/">
                    <PageHome />
                </Route>

                <Route exact path="/details/:id">
                    <PageDetails />
                </Route>

                <Route>
                    <ErrorPage />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}