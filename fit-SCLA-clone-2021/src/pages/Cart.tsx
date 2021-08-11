import React, { Fragment } from "react";
import {
  IonPage,
  IonContent,
  IonSearchbar,
  IonGrid,
  IonRow,
  IonCol,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonIcon,
  IonButton,
} from "@ionic/react";
import { planetOutline, trashOutline } from "ionicons/icons";

import "./Cart.css";

// interface
import CheckoutCart from "../util/CheckoutCart";

const Cart: React.FC<{ shoppingCart?: CheckoutCart[] }> = (props) => {
  // removing item from cart by unique id
  const removeItemCart = (id: string | undefined) => {
    
  }

  return (
    <IonPage>
      <IonContent>
        <h1 className="ion-text-center">Cart</h1>

        {/* Searchbar */}
        <IonSearchbar></IonSearchbar>

        {/* shirt with price grid */}
        <IonGrid>
          {props.shoppingCart?.map((i: CheckoutCart) => (
            <Fragment>
              <IonRow>
                <IonCol>
                  <IonCard key={i.uniqueId}>
                    <img src={i.image} alt="shirt 01" width="150" />
                  </IonCard>
                </IonCol>
                <IonCol className="ion-no-padding">
                  <IonCard key={i.uniqueId} className="item-info-card">
                    <IonCardHeader>
                      <IonCardSubtitle>{i.name}</IonCardSubtitle>
                      <IonCardSubtitle>{i.price}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      <IonRow>
                        <IonCol>
                          <IonButton fill="outline" size="default">
                            <IonIcon icon={planetOutline} />
                          </IonButton>
                          <IonButton fill="solid" color="danger" size="default">
                            <IonIcon icon={trashOutline} onClick={() => removeItemCart(i.uniqueId)}/>
                          </IonButton>
                        </IonCol>
                      </IonRow>
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            </Fragment>
          ))}

          {/* Submit button */}
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton shape="round" color="success" routerLink="/checkout">
                Confirm
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Cart;
