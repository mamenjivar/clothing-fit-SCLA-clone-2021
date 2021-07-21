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
} from "@ionic/react";

// css
import "./Checkout.css";

const Checkout: React.FC = () => {
  // alert for purchase
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
        <IonContent>
          <h1 className="ion-text-center">Order Summary</h1>

          {/* loop through array and see orders */}
          <h4>ACTIVE ORDERS</h4>

          <IonGrid>
            <IonRow>
              <IonCol>
                <IonCard>
                  <img
                    src="https://cdn.shopify.com/s/files/1/0250/0714/products/Go-To-Tee-010100002C8-lake-green-flat_300x.jpg?v=1614195208"
                    alt="shirt 01"
                    width="150"
                  />
                </IonCard>
              </IonCol>
              <IonCol>
                <IonCard className="item-info-card">
                  <IonCardHeader>
                    <IonCardSubtitle>Mens T-Shirt</IonCardSubtitle>
                  </IonCardHeader>
                  <IonCardContent>
                    ID: 900632004 QT: 1 <br />
                    Price: $19.99
                  </IonCardContent>
                </IonCard>
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
