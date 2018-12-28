import React from "react";
import { shallow, mount } from "enzyme";
import { BrowserRouter, Route } from "react-router-dom";

import Root from "../../Root";
import App from "../App/App";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";


import PrivateRoute from "../common/PrivateRoute";

let wrapped;


beforeEach(() => {
  wrapped = shallow(<App />);
});

it("shows a Navbar ", () => {
  expect(wrapped.find(Navbar).length).toEqual(1);
});

it("shows a Footer ", () => {
  expect(wrapped.find(Footer).length).toEqual(1);
});

// publice router length test

// it("shows a not-found ", () => {
//   const pathMap = wrapped.find(Route).reduce((pathMap, route) => {
//     const routeProps = route.props();
//     pathMap[routeProps.path] = routeProps.component;
//     return pathMap;
//   }, {});
  
//   expect(pathMap["/not-found"].length).toEqual(1);
// });

it("shows a Landing ", () => {
  const pathMap = wrapped.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  
  expect(pathMap["/"].length).toEqual(1);
});

it("shows a register ", () => {
  const pathMap = wrapped.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
 
  expect(pathMap["/register"].length).toEqual(1);
});

it("shows a login ", () => {
  const pathMap = wrapped.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  expect(pathMap["/login"].length).toEqual(1);
  
});

it("shows a profiles ", () => {
  const pathMap = wrapped.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  expect(pathMap["/profiles"].length).toEqual(1);
  
});

it("shows a /profile/:handle ", () => {
  const pathMap = wrapped.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  expect(pathMap["/profile/:handle"].length).toEqual(1);
  
  
});

// private router length test
it("shows a /dashboard ", () => {
  const pathMap = wrapped.find(PrivateRoute).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  expect(pathMap["/dashboard"].length).toEqual(1);
  
});

it("shows a /create-profile ", () => {
  const pathMap = wrapped.find(PrivateRoute).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  expect(pathMap["/create-profile"].length).toEqual(1);
});

it("shows a /edit-profile ", () => {
  const pathMap = wrapped.find(PrivateRoute).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  expect(pathMap["/edit-profile"].length).toEqual(1);
});

it("shows a /add-experience", () => {
  const pathMap = wrapped.find(PrivateRoute).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  expect(pathMap["/add-experience"].length).toEqual(1);
});

it("shows a /add-education", () => {
  const pathMap = wrapped.find(PrivateRoute).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  expect(pathMap["/add-education"].length).toEqual(1);
});

it("shows a /feed", () => {
  const pathMap = wrapped.find(PrivateRoute).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  expect(pathMap["/feed"].length).toEqual(1);
});

it("shows a /post/:id", () => {
  const pathMap = wrapped.find(PrivateRoute).reduce((pathMap, route) => {
    const routeProps = route.props();
    pathMap[routeProps.path] = routeProps.component;
    return pathMap;
  }, {});
  expect(pathMap["/post/:id"].length).toEqual(1);
});
