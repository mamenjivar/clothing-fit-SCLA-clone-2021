import React from 'react';
import { Route } from 'react-router-dom';
import { IonTabs, IonRouterOutlet , IonTabBar, IonTabButton, IonIcon} from '@ionic/react';
import { appsOutline, planetOutline, cartOutline } from "ionicons/icons";

// Pages
import Brands from '../pages/Brands';
import Cart from '../pages/Cart';
import Checkout from '../pages/Checkout';

const MenuTab: React.FC = () => {
    return (
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
          <IonTabButton tab="model">
            <IonIcon icon={planetOutline} />
          </IonTabButton>
          <IonTabButton tab="cart" href="/cart">
            <IonIcon icon={cartOutline} />
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    )
};

export default MenuTab;