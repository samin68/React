import React from "react";
import { Switch, Route } from "react-router-dom";
import Container from "@material-ui/core/Container";
import TopBar from "components/TopBar";
import AddArticle from "pages/AddArticle";
import { PrivateRoute } from "helpers";
import Articles from "pages/Articles/Articles";

export default function Main() {
  return (
    <>
      <TopBar />
      <Container maxWidth="md">
        <Switch>
          <Route exact path={["/", "/articles"]} component={Articles} />
          <PrivateRoute exact path="/add" component={AddArticle} />
          <Route component={() => <h1>Not Found</h1>} />
        </Switch>
      </Container>
    </>
  );
}
