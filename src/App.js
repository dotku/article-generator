import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import LoremIpsum from "./cmponents/articles/loremIpsum";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <Router>
        <Switch>
          <Route exact path="/articles/lorem-ipsum/:replacement">
            <LoremIpsum />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
