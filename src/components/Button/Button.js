import classNames from "classnames";

import "./Button.css";

export default function Button({ children, variant = "normal", ...props }) {
  let classnames = classNames({
    btn: true,
    "btn--large": variant === "large",
  });

  return (
    <button className={classnames} {...props}>
      {children}
    </button>
  );
}
