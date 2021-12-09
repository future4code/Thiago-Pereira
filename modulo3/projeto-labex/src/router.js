import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useHistory } from "react-router";

import PageHome from "./pages/comp-page-home";
import PageViagens from "./pages/comp-page-viagens";
import PageCandidatar from "./pages/comp-page-candidatar";
import PageSobre from "./pages/comp-page-sobre";
import PageAnalises from "./pages/comp-page-analises";
import PageAnalisesVer from "./pages/comp-page-analises-ver";
import PageAnalisesCriar from "./pages/comp-page-analises-criar";
import PageError from "./pages/comp-page-error";


export const routerPage = () => {
    return(
        <BrowserRouter>
            <Switch>
                <Route exact path={'/home'}>
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





// const chooseScreen = () => {
//     switch (actualScreen) {
//         case 'home':
//             return <PageHome />
//         case 'viagens':
//             return <PageViagens />
//         case 'candidatar':
//             return <PageCandidatar />
//         case 'sobre':
//             return <PageSobre />
//         case 'contato':
//             return <PageAnalises />
//         default:
//             return <div>VISH</div>
//     }
// }