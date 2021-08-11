import React, { useState } from "react";
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
  // unique id generator
  const { v4: uuidv4 } = require("uuid");

  const [selectedSize, setSelectedSize] = useState<string>();

  // add item to cart
  const addToCart = (id: string) => {
    let appareling = CLOTHES_TO_CHOOSE.filter((a) => a.id === id)[0];

    let object = {
      uniqueId: uuidv4().toString(),
      shirtId: appareling.id,
      size: selectedSize,
      image: appareling.image,
      name: appareling.name,
      price: appareling.price,
    };
    // console.log(object);
    props.passUpApp(object);
  };

  // for select tag
  const onChangeHandler = (event: any) => {
    setSelectedSize(event.target.value);
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

      {/* LOOP THIS INTO MAP */}
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
            <IonCol className="ion-no-margin">
              <IonCard className="item-info-card">
                <IonCardHeader>
                  <IonCardSubtitle>Mens T-Shirt</IonCardSubtitle>
                  <IonCardSubtitle>
                    {CLOTHES_TO_CHOOSE[0].price}
                  </IonCardSubtitle>
                </IonCardHeader>
                <IonCardContent>
                  {/* need to work on the css to make it more stylish */}
                  <select value={selectedSize} onChange={onChangeHandler}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
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
                  {/* need to work on the css to make it more stylish */}
                  <select value={selectedSize} onChange={onChangeHandler}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
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
                  {/* need to work on the css to make it more stylish */}
                  <select value={selectedSize} onChange={onChangeHandler}>
                    <option value="small">Small</option>
                    <option value="medium">Medium</option>
                    <option value="large">Large</option>
                  </select>
                  <IonButton href="/cart" fill="outline" size="default">
                    <IonIcon icon={planetOutline} />
                  </IonButton>
                  <IonButton
                    fill="solid"
                    color="success"
                    size="default"
                    onClick={() => addToCart("03")}
                  >
                    <IonIcon icon={cartOutline} />
                  </IonButton>
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
