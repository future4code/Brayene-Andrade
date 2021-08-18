import React from "react"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import { HomePage } from "../pages/HomePage"
import { ListTripsPage } from "../pages/ListTripsPage"
import { AppFormPage } from "../pages/ApplicationFormPage"
import { AdminPage } from "../pages/AdminHomePage"
import { CreateTrip } from "../pages/CreateTripPage"
import { LoginPage } from "../pages/LoginPage"
import { TripDetails } from "../pages/TripDetailsPage"
import {ErrorPage} from "../pages/ErrorPage"



const ComponentRoute = () => {

    return (
    <BrowserRouter>    
    <Routes>

    <Route exact path={"/"}>
        <HomePage/>
    </Route>

    <Route exact path={"/listTrips"}>
         <ListTripsPage/>
    </Route>

    <Route exact path={"/appForm"}>
        <AppFormPage/>
    </Route>
    
    <Route exact path={"/login"}>
        <LoginPage/>
    </Route>

    <Route exact path={"/admin"}>
        <AdminPage/>
    </Route>

    <Route exact path={"/tripDetails"}>
        <TripDetails/>
    </Route>
    
    <Route exact path={"createTrip"}>
        <CreateTrip/>
    </Route>

    <Route exact path={" "}>
        <ErrorPage/>
    </Route>



    </Routes>
    </BrowserRouter>

    )


}
export default Route