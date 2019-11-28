import React from "react";
import CustomLink from "../CustomLink/CustomLink";

export default function Tabs() {
  return (
    <>
      <CustomLink to="/">Custom Link</CustomLink>
      <CustomLink to="/Home">Home</CustomLink>
      <CustomLink to="/About">About</CustomLink>
      <CustomLink to="/ContactUs">Contact Us</CustomLink>
    </>
  );
}
