import { BrowserRouter, Switch, Route } from "react-router-dom";

import PageHome from "./pages/comp-page-home";
import PageViagens from "./pages/comp-page-viagens";
import PageCandidatar from "./pages/comp-page-candidatar";
import PageSobre from "./pages/comp-page-sobre";
import PageAnalises from "./pages/comp-page-analises";
import PageAnalisesNot from "./pages/comp-page-analises-not";
import PageAnalisesVer from "./pages/comp-page-analises-ver";
import PageAnalisesCriar from "./pages/comp-page-analises-criar";
import PageError from "./pages/comp-page-error";

import CompNav from "./components/comp-nav";


export const RouterPage = () => {
    return(
        <BrowserRouter>
            <CompNav />
            <Switch>
                <Route exact path={'/'}>
                    <PageHome />
                </Route>

                <Route exact path={'/trips/list'}>
                    <PageViagens />
                </Route>

                <Route exact path={'/trips/application'}>
                    <PageCandidatar />
                </Route>

                <Route exact path={'/wiki'}>
                    <PageSobre />
                </Route>

                <Route exact path={'/admin/trips/list'}>
                    <PageAnalises />
                </Route>

                <Route exact path={'/admin/trips/error'}>
                    <PageAnalisesNot />
                </Route>

                <Route exact path={'/admin/trips/create'}>
                    <PageAnalisesCriar />
                </Route>

                <Route exact path={'/admin/trips/:id'}>
                    <PageAnalisesVer />
                </Route>

                <Route>
                    <PageError />
                </Route>
            </Switch>
        </BrowserRouter>
    )
}