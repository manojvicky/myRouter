import React from "react";
import Route from "../Route/Route";
import About from "../About/About";
import Home from "../Home/Home";
import ContactUs from "../ContactUs/ContactUs";
import Career from "../Career/Career";
import Tabs from "../Tabs/Tabs";
import CoustomComponent from "../CustomComponent/CustomComponent";
import Child from "../Child/Child";
function index() {
  return <div>index</div>;
}
export default function App(props) {
  console.log("props", props);
  return (
    <>
      <Tabs />
      <Route path="/" exact Component={CoustomComponent} />
      <Route path="/Home" Component={Home} />
      <Route path="/About" Component={About} />
      <Route path="/Career" Component={Career} />
      <Route path="/ContactUs" Component={ContactUs} />
      <Route path="/CustomLink" />
    </>
  );
}
