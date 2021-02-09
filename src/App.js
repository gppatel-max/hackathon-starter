import React from "react";
import { Switch, Route } from "react-router-dom";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import NotFound from "./pages/NotFound";
import Navigation from "./components/Navigation/Navigation";
import InputField from "./components/inputfield/InputField";


class App extends React.Component {
  render() {
    return (
      
      <Switch>
        <Navigation/>
        <Route
          exact
          path="/"
          component={Home}
        />
        <Route
          exact
          path="/profile/:username"
          component={Profile}
        />
        <Route
          exact
          path="*"
          component={NotFound}

        />
        <Route
        exact
        path="/inputField/:inputField"
        component={InputField}
        />
      </Switch>
    );
  }
}

export default App;
