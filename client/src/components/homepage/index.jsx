import { React, Fragment } from "react";
import Header from "./header";
import Body from "./body";

export default function Homepage(params) {
  return (
    <Fragment>
      <Header isLoggedIn={params.isLoggedIn} />
      <Body />
    </Fragment>
  );
}
