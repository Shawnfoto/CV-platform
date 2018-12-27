import React from "react";
import { mount } from "enzyme";
import Root from "../../Root"
import App from "../App/App";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Landing from "../../components/layout/Landing";
import Login from "../../components/auth/Login";
import Register from "../../components/auth/Register";

let wrapped;

beforeEach(() => {
  wrapped = mount(
    <Root>
      <App/>
    </Root>
  );
});


// it("shows a Navbar ", () => {
//   expect(wrapped.find(Navbar).length).toEqual(1);
// });

// it("shows a Footer ", () => {
//   expect(wrapped.find(Footer).length).toEqual(1);
// });

it("shows a Landing ", () => {
  
  expect(wrapped.find(Landing).length).toEqual(1);
  // const pathMap = wrapped.find(Route).reduce((pathMap, route) => {
  //   const routeProps = route.props();
  //   console.log("routeProps",routeProps)
  //   pathMap[routeProps.path] = routeProps.component;
  //   console.log("pathMap: ", pathMap);
  //   return pathMap
  // }, {});
  // expect(pathMap["/"].length).toEqual(1);
  
});

// it("shows a Login ", () => {
//   expect(wrapped.find(Login).length).toEqual(1);
// });

// it("shows a Register ", () => {
//   expect(wrapped.find(Register).length).toEqual(1);
// });
