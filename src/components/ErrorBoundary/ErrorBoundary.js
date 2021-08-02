import React from "react";
import Error from "../Error/Error";

export default class ErrorBoundary extends React.Component {
  state = {
    errorMessage: "",
  };
  static getDerivedStateFromError(error) {
    return { errorMessage: error.toString() };
  }
  componentDidCatch(error, info) {
    console.log(error.toString(), info.componentStack);
  }

  render() {
    if (this.state.errorMessage) {
      return <Error />;
    }
    return this.props.children;
  }
}
