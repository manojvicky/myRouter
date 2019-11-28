import React from "react";
import routerContext from "../Context/Context";
import history from "../history/history";

class Router extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      val: { ...history }
    };
  }
  componentDidMount() {
    this.setState({ val: history });
    console.log("val", this.state.val, history);
  }
  handleRouter = () => {
    this.setState({ val: history });
  };
  render() {
    console.log("val", this.state.val, history);
    return (
      <routerContext.Provider
        value={{ history: this.state.val, handleRouter: this.handleRouter }}
      >
        {this.props.children}
      </routerContext.Provider>
    );
  }
}
export default Router;
