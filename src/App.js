
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./page/HomePage";


function App() {
  return ( 
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
