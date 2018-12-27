// css
import "../../App.css";
import React, { Component } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";

import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import Landing from "../../components/layout/Landing";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";

import Dashboard from "../../components/dashboard/Dashboard";
import PrivateRoute from "../../components/common/PrivateRoute";
import CreateProfile from "../../components/create-profile/CreateProfile";
import EditProfile from "../../components/edit-profile/EditProfile";
import AddExperience from "../../components/add-credentials/AddExperience";
import AddEducation from "../../components/add-credentials/AddEducation";
import Profiles from "../../components/profiles/Profiles";
import Profile from "../../components/profile/Profile";
import Posts from "../../components/posts/Posts";
import Post from "../../components/post/Post";

import NotFound from "../../components/not-found/NotFound";



class App extends Component {
  render() {
    return (
      // <div>123</div>
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Route exact path="/" component={Landing} />
          <div className="container">
            <Route exact path="/register" component={Register} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/profiles" component={Profiles} />
            <Route exact path="/profile/:handle" component={Profile} />

            <Switch>
              <PrivateRoute exact path="/dashboard" component={Dashboard} />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/create-profile"
                component={CreateProfile}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/edit-profile"
                component={EditProfile}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/add-experience"
                component={AddExperience}
              />
            </Switch>
            <Switch>
              <PrivateRoute
                exact
                path="/add-education"
                component={AddEducation}
              />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/feed" component={Posts} />
            </Switch>
            <Switch>
              <PrivateRoute exact path="/post/:id" component={Post} />
            </Switch>
            <Route exact path="/not-found" component={NotFound} />
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
