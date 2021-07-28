import React from "react";
import {
  IonContent,
  IonPage,
  IonCol,
  IonRow,
  IonGrid,
  IonCard,
  IonCardHeader,
  IonCardSubtitle,
  IonCardContent,
  IonButton,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonButtons,
  IonBackButton,
  IonTitle,
} from "@ionic/react";
import { planetOutline, cartOutline } from "ionicons/icons";

// interface
import CheckoutCart from "../util/CheckoutCart";

// LOCAL_DB
import CLOTHES_TO_CHOOSE from "../util/CLOTHES_TO_CHOOSE";

const Apparel: React.FC<{ passUpApp: (obj: CheckoutCart) => void }> = (
  props
) => {
  const addToCart = (id: string) => {
    let appareling = CLOTHES_TO_CHOOSE.filter((a) => a.id === id)[0];
    props.passUpApp(appareling);
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonButtons slot="start">
            <IonBackButton defaultHref="/brands" />
          </IonButtons>
          <IonTitle>FLGD</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <img
                  src={CLOTHES_TO_CHOOSE[0].image}
                  alt="shirt 01"
                  width="150"
                />
              </IonCard>
            </IonCol>
            <IonCol className="ion-no-padding">
              <IonCard className="item-info-card">
                <IonCardHeader>
                  <IonCardSubtitle>Mens T-Shirt</IonCardSubtitle>
                  <IonCardSubtitle>
                    {CLOTHES_TO_CHOOSE[0].price}
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonRow>
                    <IonCol>
                      <IonButton fill="outline" size="default">
                        <IonIcon icon={planetOutline} />
                      </IonButton>
                      <IonButton
                        fill="solid"
                        color="success"
                        size="default"
                        onClick={() => addToCart("01")}
                      >
                        <IonIcon icon={cartOutline} />
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <img
                  src={CLOTHES_TO_CHOOSE[1].image}
                  alt="shirt 01"
                  width="150"
                />
              </IonCard>
            </IonCol>
            <IonCol className="ion-no-padding">
              <IonCard className="item-info-card">
                <IonCardHeader>
                  <IonCardSubtitle>Mens T-Shirt</IonCardSubtitle>
                  <IonCardSubtitle>
                    {CLOTHES_TO_CHOOSE[1].price}
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonRow>
                    <IonCol>
                      <IonButton fill="outline" size="default">
                        <IonIcon icon={planetOutline} />
                      </IonButton>
                      <IonButton
                        fill="solid"
                        color="success"
                        size="default"
                        onClick={() => addToCart("02")}
                      >
                        <IonIcon icon={cartOutline} />
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard>
                <img
                  src={CLOTHES_TO_CHOOSE[2].image}
                  alt="shirt 01"
                  width="150"
                />
              </IonCard>
            </IonCol>
            <IonCol className="ion-no-padding">
              <IonCard className="item-info-card">
                <IonCardHeader>
                  <IonCardSubtitle>Mens T-Shirt</IonCardSubtitle>
                  <IonCardSubtitle>
                    {CLOTHES_TO_CHOOSE[2].price}
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  <IonRow>
                    <IonCol className="ion-no-padding">
                      <IonButton
                        href="/cart"
                        className="ion-no-padding"
                        fill="outline"
                        size="default"
                      >
                        <IonIcon icon={planetOutline} />
                      </IonButton>
                      <IonButton
                        className="ion-no-padding"
                        fill="solid"
                        color="success"
                        size="default"
                        onClick={() => addToCart("03")}
                      >
                        <IonIcon icon={cartOutline} />
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Apparel;
