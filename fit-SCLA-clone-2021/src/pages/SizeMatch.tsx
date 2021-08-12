import React, { useContext, useEffect } from "react";
import {
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
  IonCol,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
} from "@ionic/react";
import UIContext from '../util/Context-API-login';

import "./ChooseModel.css"

const SizeMatch: React.FC = () => {
  const { setShowTabs } = useContext(UIContext);

  useEffect(() => {
    setShowTabs(false);

    return () => {
      setShowTabs(true);
    }
  })

  return (
    <IonPage>
      <IonContent className="ion-text-center">
        <IonGrid>
          <IonRow>
            <IonCol>
              <img
                className="ion-text-center"
                src="https://images.squarespace-cdn.com/content/v1/575a6067b654f9b902f452f4/1552683653140-0UUVQSSUEWVC73AWAEQG/300Logo.png"
                alt="logo"
                width="150"
              />
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <h1 className="ion-text-center">Size Match</h1>
            </IonCol>
          </IonRow>

          <IonRow>
            <IonCol>
              <IonItem>
                <IonLabel>Height</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Weight</IonLabel>
                <IonInput></IonInput>
              </IonItem>
              <IonItem>
                <IonLabel>Age</IonLabel>
                <IonInput></IonInput>
              </IonItem>
            </IonCol>
          </IonRow>
          <IonRow className="ion-padding-top">
            <IonCol>
              <IonButton color="warning" fill="outline" routerLink="/chooseModel">
                Confirm
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default SizeMatch;
