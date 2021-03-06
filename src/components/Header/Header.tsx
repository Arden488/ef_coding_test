import { ReactComponent as Logo } from "./ef-logo.svg";
import { ReactComponent as Divider } from "./divider.svg";

import "./Header.css";
import { memo } from "react";

function Header() {
  return (
    <header className="app-header">
      <h1 className="app-title">
        <Logo className="ef-logo" />
        <span>Quiz</span>
      </h1>
      <div className="app-header__divider">
        <Divider />
      </div>
    </header>
  );
}

export default memo(Header);
