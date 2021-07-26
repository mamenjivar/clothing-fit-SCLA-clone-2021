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

interface Checkoutcart {
  id?: string;
  image?: string;
  name?: string;
  price?: string;
}

const Cart: React.FC<{ shoppingCart?: Checkoutcart[] }> = (props) => {
  return (
    <IonPage>
      <IonContent>
        <h1 className="ion-text-center">Cart</h1>

        {/* Searchbar */}
        <IonSearchbar></IonSearchbar>

        {/* shirt with price grid */}
        <IonGrid>
          {props.shoppingCart?.map((i: Checkoutcart) => (
            <Fragment>
              <IonRow>
                <IonCol>
                  <IonCard>
                    <img src={i.image} alt="shirt 01" width="150" />
                  </IonCard>
                </IonCol>
                <IonCol className="ion-no-padding">
                  <IonCard className="item-info-card">
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
                            <IonIcon icon={trashOutline} />
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
