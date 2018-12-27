import React from "react";
import { shallow } from "enzyme";
import App from "../App/App";
import Navbar from "../../components/layout/Navbar";
import Footer from "../../components/layout/Footer";
import { BrowserRouter, Route, Switch } from "react-router-dom";


let wrapped;
// let wrapped2;
beforeEach(() => {
  wrapped = shallow(<App />);
  // wrapped2 = shallow(<Route />);
  // wrapped2 = mount(
  //   <Route>
  //     <Landing />
  //   </Route>
  // );
});

it("shows a Navbar ", () => {
  expect(wrapped.find(Navbar).length).toEqual(1);
});

it("shows a Footer ", () => {
  expect(wrapped.find(Footer).length).toEqual(1);
});

it("shows a Landing ", () => {
  const pathMap = wrapped.find(Route).reduce((pathMap, route) => {
    const routeProps = route.props();
    // console.log("routeProps",routeProps)
    pathMap[routeProps.path] = routeProps.component;
    // console.log("pathMap: ", pathMap);
    return pathMap
  }, {});
  expect(pathMap["/"].length).toEqual(1);
  
});

// it("shows a Login ", () => {
//   expect(wrapped.find(Login).length).toEqual(1);
// });

// it("shows a Register ", () => {
//   expect(wrapped.find(Register).length).toEqual(1);
// });
