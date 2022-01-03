
import axios from "axios";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { domain, getheader } from "./env";
import { AuthPage } from "./page/AuthPage";
import { HomePage } from "./page/HomePage";
import { ProductDetails } from "./page/ProductDetails";
import { SearchResult } from "./page/SearchResult";
import { SingleBrandProducts } from "./page/SingleBrandProducts";
import { SingleCategoryProducts } from "./page/SingleCategoryProducts";


function App() {
  useEffect(() => {
    const getProfile = async() => {
      await axios ({
        url: `${domain}/api/profile/`,
        method: 'GET',
        headers: getheader,
      }).then((response) => {
        console.log(response.data);
      })
    }
    getProfile();
  }, []);
  return ( 
    <BrowserRouter>
      <NavBar/>
      <Switch>
        <Route exact path="/" component={HomePage}/>
        <Route exact path="/p-:title-:id" component={ProductDetails}/>
        <Route path={"/category-:title-:id"} component={SingleCategoryProducts}/>
        <Route path={"/brand-:title-:id"} component={SingleBrandProducts}/>
        <Route path={'/search-:q'} component={SearchResult} />
        <Route path={'/login'} component={AuthPage} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
