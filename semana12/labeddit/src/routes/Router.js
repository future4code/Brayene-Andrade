import React from "react";
import {Switch, Route } from "react-router-dom";
import CadastroPage from "../pages/CadastroPage/CadastroPage";
import Feed from "../pages/FeedPage/Feedpage";
import LoginPage from "../pages/LoginPage/LoginPage";
import Post from "../pages/PostPage/Postpage";
import Error from "../pages/ErrorPage/ErrorPage";

const Router = ({setRightButtonText}) => {
  return (
    <Switch>
      <Route exact path="/login">
        <LoginPage setRightButtonText={setRightButtonText}/>
      </Route>
      <Route exact path="/cadastro">
        <CadastroPage setRightButtonText={setRightButtonText} />
      </Route>
      <Route exact path="/">
        <Feed />
      </Route>
      <Route exact path="/post">
        <Post />
      </Route>
      <Route>
        <Error />
      </Route>
    </Switch>
  );
};

export default Router;
