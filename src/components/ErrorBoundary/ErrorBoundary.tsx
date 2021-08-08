import React, { ErrorInfo } from "react";
import Error from "../Error/Error";

interface Props {
  children: React.ReactNode;
}

interface State {
  errorMessage: string;
}

export default class ErrorBoundary extends React.Component<Props, State> {
  state: State = {
    errorMessage: "",
  };
  static getDerivedStateFromError(error: Error): State {
    return { errorMessage: error.toString() };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error.toString(), info.componentStack);
  }

  render() {
    if (this.state.errorMessage) {
      return <Error />;
    }
    return this.props.children;
  }
}
