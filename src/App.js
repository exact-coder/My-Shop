
import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { HomePage } from "./page/HomePage";
import { ProductDetails } from "./page/ProductDetails";
import { SingleBrandProducts } from "./page/SingleBrandProducts";
import { SingleCategoryProducts } from "./page/SingleCategoryProducts";


function App() {
  return ( 
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/p-:title-:id" component={ProductDetails}/>
        <Route path={"/category-:title-:id"} component={SingleCategoryProducts}/>
        <Route path={"/brand-:title-:id"} component={SingleBrandProducts}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
