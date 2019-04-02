import React from "react";
import { Route, Switch } from "react-router-dom";

const Home                = () => require("./containers/Home");
const Notes               = () => require("./containers/Notes");
const Login               = () => require("./containers/Login");
const Signup              = () => require("./containers/Signup");
const NewNote             = () => require("./containers/NewNote");
const NotFound            = () => require("./containers/NotFound");
const AppliedRoute        = () => require("./components/AppliedRoute");
const AuthenticatedRoute  = () => require("./components/AuthenticatedRoute");
const UnauthenticatedRoute= () => require("./components/UnauthenticatedRoute");

export default ({ childProps }) =>
  <Switch>
    <AppliedRoute         path="/"          exact component={Home}    props={childProps} />
    <UnauthenticatedRoute path="/login"     exact component={Login}   props={childProps} />
    <UnauthenticatedRoute path="/signup"    exact component={Signup}  props={childProps} />
    <AuthenticatedRoute   path="/notes/new" exact component={NewNote} props={childProps} />
    <AuthenticatedRoute   path="/notes/:id" exact component={Notes}   props={childProps} />
    { /* Finally, catch all unmatched routes */ }
    <Route component={NotFound} />
  </Switch>;