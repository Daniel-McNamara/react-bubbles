import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PrivateRoute from "./utils/ProtectedRoute";
import Login from "./components/Login";
import "./styles.scss";
import BubblePage from "./components/BubblePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/" render={props => <Login {...props} />} />
        <PrivateRoute exact path="/bubble-page" component={BubblePage} />
      </div>
    </Router>
  );
}

export default App;
