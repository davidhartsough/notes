import React from "react";
import { Link } from "gatsby";
import "./styles.css";

export default function Layout({
  title,
  path,
  children,
}: {
  title?: string;
  path?: string;
  children: React.JSX.Element | React.JSX.Element[];
}) {
  return (
    <main>
      <nav>
        <a href="https://davidhartsough.com/">Dave</a>
        {" / "}
        <Link to="/">Notes</Link>
        {path && title && (
          <>
            {" / "}
            <Link to={`/${path}`}>{title}</Link>
          </>
        )}
      </nav>
      <section>{children}</section>
    </main>
  );
}
