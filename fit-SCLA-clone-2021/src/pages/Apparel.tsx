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
import CheckoutCart from '../util/CheckoutCart';

const clothesToChoose = [
  {
    id: "01",
    image:
      "https://imgprd19.hobbylobby.com/2/d2/2d/2d22d4c34e27b131ae4b74b6a6ba9a035b7eabae/350Wx350H-422790-0320.jpg",
    name: "Men's T-Shirt",
    price: "$19.99",
  },
  {
    id: "02",
    image:
      "https://cdn.shopify.com/s/files/1/0250/0714/products/Go-To-Tee-010100002C8-lake-green-flat_300x.jpg?v=1614195208",
    name: "Men's T-Shirt",
    price: "$23.99",
  },
  {
    id: "03",
    image:
      "https://imgprd19.hobbylobby.com/3/7d/79/37d79e89dfc9b9948dbe7357e04dfb04402d6d84/350Wx350H-601666-0320.jpg",
    name: "Men's T-Shirt",
    price: "$30.99",
  },
  {
    id: "04",
    image:
      "https://target.scene7.com/is/image/Target/GUEST_4ef9c5c7-6ecf-46f6-b13a-ba9074750224?wid=488&hei=488&fmt=pjpeg",
    name: "Men's T-Shirt",
    price: "$50.99",
  },
];

const Apparel: React.FC<{ passUpApp: (obj: CheckoutCart) => void }> = (
  props
) => {
  const addToCart = (id: string) => {
    let appareling = clothesToChoose.filter((a) => a.id === id)[0];
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
      {/* based on what apparel you clicked */}

      <IonContent>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard>
                <img
                  src="https://imgprd19.hobbylobby.com/2/d2/2d/2d22d4c34e27b131ae4b74b6a6ba9a035b7eabae/350Wx350H-422790-0320.jpg"
                  alt="shirt 01"
                  width="150"
                />
              </IonCard>
            </IonCol>
            <IonCol className="ion-no-padding">
              <IonCard className="item-info-card">
                <IonCardHeader>
                  <IonCardSubtitle>Mens T-Shirt</IonCardSubtitle>
                  <IonCardSubtitle>$19.99</IonCardSubtitle>
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
                  src="https://cdn.shopify.com/s/files/1/0250/0714/products/Go-To-Tee-010100002C8-lake-green-flat_300x.jpg?v=1614195208"
                  alt="shirt 01"
                  width="150"
                />
              </IonCard>
            </IonCol>
            <IonCol className="ion-no-padding">
              <IonCard className="item-info-card">
                <IonCardHeader>
                  <IonCardSubtitle>Mens T-Shirt</IonCardSubtitle>
                  <IonCardSubtitle>$19.99</IonCardSubtitle>
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
                  src="https://imgprd19.hobbylobby.com/3/7d/79/37d79e89dfc9b9948dbe7357e04dfb04402d6d84/350Wx350H-601666-0320.jpg"
                  alt="shirt 01"
                  width="150"
                />
              </IonCard>
            </IonCol>
            <IonCol className="ion-no-padding">
              <IonCard className="item-info-card">
                <IonCardHeader>
                  <IonCardSubtitle>Mens T-Shirt</IonCardSubtitle>
                  <IonCardSubtitle>$19.99</IonCardSubtitle>
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
                      {/* </IonCol> */}
                      {/* <IonCol> */}
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
