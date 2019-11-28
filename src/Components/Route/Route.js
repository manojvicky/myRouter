import React from "react";
import routerContext from "../Context/Context";

function Route({ path, Component }) {
  return (
    <routerContext.Consumer>
      {({ history }) => {
        if (history.location.pathname === path) {
          return <Component />;
        }
        console.log("context", history, path, Component);
        return null;
      }}
    </routerContext.Consumer>
  );
}
export default Route;
