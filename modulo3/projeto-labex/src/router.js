import { BrowserRouter, Switch, Route } from "react-router-dom";

import { useHistory } from "react-router";

import { StyledBasePage } from "./styles/style-pages";

import PageHome from "./pages/comp-page-home";
import PageViagens from "./pages/comp-page-viagens";
import PageCandidatar from "./pages/comp-page-candidatar";
import PageSobre from "./pages/comp-page-sobre";
import PageAnalises from "./pages/comp-page-analises";
import PageAnalisesVer from "./pages/comp-page-analises-ver";
import PageAnalisesCriar from "./pages/comp-page-analises-criar";
import PageError from "./pages/comp-page-error";

import CompNav from "./components/comp-nav";
import CompSidebar from "./components/comp-sidebar";


export const RouterPage = (props) => {
    return(
        <BrowserRouter>
            <CompNav />
            <Switch>
                <Route exact path={'/'}>
                    <PageHome />
                </Route>

                <Route exact path={'/trips/list'}>
                    <PageViagens 
                        listaViagens={props.listaViagens}
                        renderedViagens={props.renderedViagens}
                    />
                </Route>

                <Route exact path={'/trips/application'}>
                    <PageCandidatar 
                        listaViagens={props.listaViagens}
                        renderedViagens={props.renderedViagens}
                    />
                </Route>

                <Route exact path={'/wiki'}>
                    <PageSobre />
                </Route>

                <Route exact path={'/admin/trips/list'}>
                    <PageAnalises 
                        setToNavAnalises={props.setToNavAnalises}
                    />
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