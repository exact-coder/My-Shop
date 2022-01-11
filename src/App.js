
import axios from "axios";
import React, { useEffect } from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import { NavBar } from "./components/NavBar";
import { domain, getheader } from "./env";
import { NotFoundPage } from "./page/404";
import { AuthPage } from "./page/AuthPage";
import { HomePage } from "./page/HomePage";
import { OrderPage } from "./page/OrderPage";
import { ProductDetails } from "./page/ProductDetails";
import { ProfilePage } from "./page/ProfilePage";
import { SearchResult } from "./page/SearchResult";
import { SingleBrandProducts } from "./page/SingleBrandProducts";
import { SingleCategoryProducts } from "./page/SingleCategoryProducts";
import { useStateValue } from "./state/stateProvider";


function App() {
  // eslint-disable-next-line no-empty-pattern
  const [{profile},dispatch] = useStateValue();
  useEffect(() => {
    const getProfile = async() => {
      await axios ({
        url: `${domain}/api/profile/`,
        method: 'GET',
        headers: getheader,
      }).then((response) => {
        dispatch({
          type: 'PRO',
          value: response.data,
        })
      }).catch((err) => {
        dispatch({
          type: 'PRO',
          value: null,
        })
      })
    }
    getProfile();
  }, [dispatch]);
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
        {
          profile !== null && <>
          <Route path={'/orders'} component={OrderPage}/>
          <Route path={'/profile-:username'} component={ProfilePage}/>
          </>
        }
        <Route component={NotFoundPage}/>
      </Switch>
    </BrowserRouter>
  );
}

export default App;

