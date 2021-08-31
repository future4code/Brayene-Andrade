import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import CadastroPage from '../pages/CadastroPage/CadastroPage'
import Feed from "../pages/FeedPage/Feedpage"
import LoginPage from '../pages/LoginPage/LoginPage'
import Post from "../pages/PostPage/Postpage"
import Error from "../pages/ErrorPage/ErrorPage"

const Router = () => {
    return (
        <BrowserRouter>
            <Switch>
                <Route exact path="/login" >
                    <LoginPage/>
                </Route>
                <Route exact path="/cadastro">
                    <CadastroPage/>
                </Route>
                <Route exact path="/">
                    <Feed/>
                </Route>
                <Route exact path="/post">
                    <Post />
                </Route>
                <Route>
                    <Error/>
                </Route>
                

            </Switch>
            
        </BrowserRouter>
    )
}

export default Router
