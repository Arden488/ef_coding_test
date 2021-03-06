import React, { ErrorInfo } from "react";
import CustomError from "../CustomError/CustomError";

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
  static getDerivedStateFromError(error: Error) {
    return { errorMessage: error.toString() };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.log(error.toString(), info.componentStack);
  }

  render() {
    if (this.state.errorMessage) {
      return <CustomError />;
    }
    return this.props.children;
  }
}
