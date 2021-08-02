import { ReactComponent as Divider } from "./divider.svg";

import "./Footer.css";

export default function Footer() {
  return (
    <footer className="app-footer">
      <div className="app-footer__divider">
        <Divider />
      </div>
      <div className="app-footer__text">
        EF Coding Test - Anton Samoilov - 2021
      </div>
    </footer>
  );
}
