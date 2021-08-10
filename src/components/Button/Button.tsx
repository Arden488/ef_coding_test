import classNames from "classnames";
import { ButtonHTMLAttributes } from "react";

import "./Button.css";

interface Props extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: string;
}

export default function Button({
  children,
  variant = "normal",
  ...props
}: Props) {
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
