import React, { useState, useContext } from "react";
import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonIcon,
  IonRouterOutlet,
  IonTabBar,
  IonTabButton,
  IonTabs,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { appsOutline, cartOutline, planetOutline } from "ionicons/icons";

// pages
import Brands from "./pages/Brands";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Apparel from "./pages/Apparel";
import Model from "./pages/Model";
import SizeMatch from "./pages/SizeMatch";
import Login from "./pages/Login";
import ChooseModel from "./pages/ChooseModel";

/* Core CSS required for Ionic components to work properly */
import "@ionic/react/css/core.css";

/* Basic CSS for apps built with Ionic */
import "@ionic/react/css/normalize.css";
import "@ionic/react/css/structure.css";
import "@ionic/react/css/typography.css";

/* Optional CSS utils that can be commented out */
import "@ionic/react/css/padding.css";
import "@ionic/react/css/float-elements.css";
import "@ionic/react/css/text-alignment.css";
import "@ionic/react/css/text-transformation.css";
import "@ionic/react/css/flex-utils.css";
import "@ionic/react/css/display.css";

/* Theme variables */
// import './theme/variables.css';

// interface
import CheckoutCart from "./util/CheckoutCart";
import UIContext from "./util/Context-API-login";

const App: React.FC = () => {
  const [item, setItem] = useState<CheckoutCart[]>([]);
  const { showTabs } = useContext(UIContext);

  let tabBar = showTabs ? undefined : { display: "none" };

  // adding item to cart from Apparel page
  const addToCart = (obj: CheckoutCart) => {
    setItem([...item, obj]);
  };

  // remove items from cart by unique id
  const removeFromCart = (uniqueId: string | undefined) => {
    const removeItem = item.filter((i) => i.uniqueId !== uniqueId);
    // console.log(removeItem);
    setItem(removeItem);
  };

  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/login">
              <Login />
            </Route>
            <Route exact path="/sizing">
              <SizeMatch />
            </Route>
            <Route exact path="/brands">
              <Brands />
            </Route>
            <Route exact path="/cart">
              <Cart shoppingCart={item} removeCartItem={removeFromCart} />
            </Route>
            <Route exact path="/checkout">
              <Checkout shoppingCart={item}/>
            </Route>
            <Route exact path="/apparel">
              <Apparel passUpApp={addToCart} />
            </Route>
            <Route exact path="/model">
              <Model />
            </Route>
            <Route exact path="/chooseModel">
              <ChooseModel />
            </Route>
            <Redirect to="/login" />
          </IonRouterOutlet>

          <IonTabBar slot="bottom" style={tabBar}>
            <IonTabButton tab="brands" href="/brands">
              <IonIcon icon={appsOutline} />
            </IonTabButton>
            <IonTabButton tab="model" href="/model">
              <IonIcon icon={planetOutline} />
            </IonTabButton>
            <IonTabButton tab="cart" href="/cart">
              <IonIcon icon={cartOutline} />
            </IonTabButton>
          </IonTabBar>
        </IonTabs>
      </IonReactRouter>
    </IonApp>
  );
};

export default App;
