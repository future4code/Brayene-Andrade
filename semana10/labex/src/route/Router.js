import React from "react"
import { BrowserRouter, Switch, Router } from "react-router-dom"



const Router = () => {

    return (
    <BrowserRouter>
    
    <Switch>

    <Router exact path={"/"}>
        <HomePage/>
    </Router>

    <Router exact path={"/listTrips"}>
         <ListTripsPage/>
    </Router>

    <Router exact path={"/appForm"}>
        <AppFormPage/>
    </Router>



    </Switch>
    </BrowserRouter>

    )


}
export default Router