import React from "react";
import GenerateRoute from "../../components/GenerateRoute/GenerateRoute";
import { ComponentProps } from "../../types";

function Sale(props: ComponentProps) {
  return (
    <section className="content-wrapper">
      <GenerateRoute route={props.route} />
    </section>
  );
}

export default Sale;
