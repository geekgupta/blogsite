import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Layout from "./layout";
import Category from "./category";
import Blogpost from "./blogpost";
import Home from "./home";
import Blog from "./blog";
import Profile from "./profile";
import cors from "cors";

function App() {
  return (
  
    <Router>
      <Switch>
        <Route exact path="/profile" component={Profile} />
        <Layout>
          <Route exact path="/" component={Home} />
          <Route exact path="/blog" component={Blog} />
          <Route exact path="/blog/:id" component={Blogpost} />
          <Route exact path="/category/:id" component={Category} />
        </Layout>
      </Switch>
    </Router>
  );
}

export default App;
