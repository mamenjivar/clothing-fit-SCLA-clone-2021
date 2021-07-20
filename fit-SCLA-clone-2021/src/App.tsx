import { Redirect, Route } from "react-router-dom";
import {
  IonApp,
  IonRouterOutlet,
  IonTabs,
  IonTabBar,
  IonTabButton,
  IonIcon,
} from "@ionic/react";
import { IonReactRouter } from "@ionic/react-router";
import { appsOutline, planetOutline, cartOutline } from "ionicons/icons";

import Brands from "./pages/Brands";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";

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

const App: React.FC = () => (
  <IonApp>
    {/* general routes */}
    <IonReactRouter>
      <IonRouterOutlet>
        <Route exact path="/home">
          <Brands />
        </Route>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
        <Route exact path="/cart">
          <Cart />
        </Route>
        <Route exact path="/checkout">
          <Checkout />
        </Route>
      </IonRouterOutlet>

      {/* tabs bottom */}
      {/* TODO: push this into its own component */}
      <IonTabs>
        <IonRouterOutlet>
          <IonRouterOutlet>
            <Route exact path="/home">
              <Brands />
            </Route>
            <Route exact path="/cart">
              <Cart />
            </Route>
            <Route exact path="/checkout">
              <Checkout />
            </Route>
          </IonRouterOutlet>
        </IonRouterOutlet>
        <IonTabBar slot="bottom">
          <IonTabButton tab="brands" href="/home">
            <IonIcon icon={appsOutline} />
          </IonTabButton>
          <IonTabButton tab="cart" href="/cart">
            <IonIcon icon={planetOutline} />
          </IonTabButton>
          <IonTabButton tab="checkout" href="/checkout">
            <IonIcon icon={cartOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;
