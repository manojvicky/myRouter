import React from "react";
import routerContext from "../Context/Context";
function CustomLink({ to, Component, children }) {
  return (
    <routerContext.Consumer>
      {({ history, handleRouter }) => {
        console.log("yoo", handleRouter);
        return (
          <a
            className="anchor"
            onClick={e => {
              e.preventDefault();
              history.replace(to);
              handleRouter();
            }}
            href="/"
          >
            {children}
          </a>
        );
      }}
    </routerContext.Consumer>
  );
}
export default CustomLink;
