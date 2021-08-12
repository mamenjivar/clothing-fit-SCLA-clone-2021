import React, { Fragment, useState } from "react";
import {
  IonButton,
  IonCard,
  IonCardContent,
  IonCardHeader,
  IonCardSubtitle,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonAlert,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
} from "@ionic/react";

// components
import ColoredLine from "../components/ColoredLine";

// css
import "./Checkout.css";

// interface
import CheckoutCart from "../util/CheckoutCart";

const Checkout: React.FC<{ shoppingCart?: CheckoutCart[] }> = (props) => {
  // alert for purchasing
  const [alert, onAlert] = useState<boolean>();
  const onPurchaseHandler = () => {
    onAlert(true);
  };

  return (
    <Fragment>
      <IonAlert
        isOpen={alert!}
        message="Confirmation Email Has Been Sent"
        buttons={[{ text: "Ok", handler: () => onAlert(false) }]}
      />
      <IonPage>
        <IonHeader>
          <IonToolbar>
            <IonButtons slot="start">
              <IonBackButton defaultHref="/brands" />
            </IonButtons>
            <IonTitle>Checkout</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent>
          {/* loop through array and see orders */}
          <h4>{props.shoppingCart?.length} Item(s)</h4>

          <ColoredLine color="black" />

          <IonGrid>
            {props.shoppingCart?.map((i: CheckoutCart) => (
              <IonRow key={i.uniqueId}>
                <IonCol>
                  <IonCard>
                    <img
                      src={i.image}
                      alt="shirt 01"
                      width="150"
                    />
                  </IonCard>
                </IonCol>
                <IonCol>
                  <IonCard className="item-info-card">
                    <IonCardHeader>
                      <IonCardSubtitle>{i.name}</IonCardSubtitle>
                    </IonCardHeader>
                    <IonCardContent>
                      ID: {i.shirtId} QT: 1 <br />
                      Price: {i.price}
                    </IonCardContent>
                  </IonCard>
                </IonCol>
              </IonRow>
            ))}
          </IonGrid>

          <ColoredLine color="black" />
          <IonGrid>
            <IonRow>
              <IonCol>
                <h4>Total: ${props.shoppingCart?.reduce((a, v) => a = a + Number(v.price), 0)}</h4>
              </IonCol>
            </IonRow>
            <IonRow>
              <IonCol className="ion-text-center">
                <IonButton
                  onClick={onPurchaseHandler}
                  shape="round"
                  color="success"
                >
                  Checkout
                </IonButton>
              </IonCol>
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonPage>
    </Fragment>
  );
};

export default Checkout;
