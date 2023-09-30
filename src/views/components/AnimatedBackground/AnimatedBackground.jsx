import React from "react";
import { ReactComponent as JS } from "./svg/js.svg";
import { ReactComponent as ReactSVG } from "./svg/react.svg";
import { ReactComponent as Sql } from "./svg/sql.svg";
import { ReactComponent as Html } from "./svg/html.svg";


import "./AnimatedBackground.css";

function AnimatedBackground({ children }) {
  let arr = [];
  let qty = 15;

  for (let i = 0; i < qty; i++) {
    arr.push(i);
  }

  const layers = arr.map((i) => {
    return (
      <div key={i} className="animated-row">
        <div>
          <JS />
          <ReactSVG />
          <Sql />
          <Html />
        </div>

        <div>
          <JS />
          <ReactSVG />
          <Sql />
          <Html />
        </div>
      </div>
    );
  });

  return (
    <section className="animated-section">
      {layers}
      {children}
    </section>
  );
}

export default AnimatedBackground;
