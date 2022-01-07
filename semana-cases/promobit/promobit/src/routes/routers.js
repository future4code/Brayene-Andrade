import React from "react";
import { Switch, Route, BrowserRouter } from "react-router-dom";
import Home from "../pages/home/index"
import Details from "../pages/details";


function Router() {
    return (
        <BrowserRouter>
         <Switch>
             <Route exact path='/'>
                 <Home />
             </Route>

             <Route exact path='/details/:filmeId'>
                 <Details />
             </Route>

         </Switch>
        </BrowserRouter>
    )
}

export default Router