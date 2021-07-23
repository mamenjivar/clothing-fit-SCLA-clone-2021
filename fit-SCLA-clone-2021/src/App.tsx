import React from "react";
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

const App: React.FC = () => {
  return (
    <IonApp>
      <IonReactRouter>
        <IonTabs>
          <IonRouterOutlet>
            <Route exact path="/sizing">
              <SizeMatch />
            </Route>
            <Route exact path="/brands">
              <Brands />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
            <Route exact path="/apparel">
              <Apparel />
            </Route>
            <Route exact path="/model">
              <Model />
            </Route>
            <Redirect to="/brands" />
          </IonRouterOutlet>

          <IonTabBar slot="bottom">
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
