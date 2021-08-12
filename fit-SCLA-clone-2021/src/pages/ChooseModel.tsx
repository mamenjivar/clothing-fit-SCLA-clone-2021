import React, { useState, useEffect } from "react";
import {
  IonCard,
  IonPage,
  IonRow,
  IonCol,
  IonButton,
  IonIcon,
} from "@ionic/react";
import { arrowForwardOutline, arrowBackOutline } from "ionicons/icons";
import UIContext from "../util/Context-API-login";
// import "./ModelChoose.css";

const ChooseModel: React.FC = () => {
  const { setShowTabs } = React.useContext(UIContext);
  const [switchModel, setSwitchModel] = useState<string>(
    "https://i.imgur.com/xgEY2wO.png"
  );
  const [count, setCount] = useState<number>(0);

  const modelViewArray = [
    "https://i.imgur.com/xgEY2wO.png",
    "https://i.imgur.com/2uaCPJ8.png",
    "https://i.imgur.com/92FJrHK.png",
    "https://i.imgur.com/6bV979U.png",
  ];

  // choose model going right
  const goRight = () => {
    setSwitchModel(modelViewArray[count]);

    if (count === 3) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

//   make model go left
  const goLeft = () => {
    setSwitchModel(modelViewArray[count]);

    if (count === 0) {
      setCount(3);
    } else {
      setCount(count - 1);
    }
  };

  // for navigation tab bar bottom page
  useEffect(() => {
    setShowTabs(false);

    return () => {
      setShowTabs(true);
    };
  });

  return (
    <IonPage className="k">
      <h1 className="ion-text-center">Model</h1>

      <IonCard></IonCard>
      <IonRow className="ion-text-center">
        <IonCol size="2" className="vertical-button ion-text-center">
          <IonButton onClick={goLeft}>
            <IonIcon icon={arrowBackOutline} />
          </IonButton>
        </IonCol>
        <IonCol size="8">
          <img src={switchModel} alt="model to choose" height="300" />
        </IonCol>
        <IonCol size="2" className="vertical-button ion-text-center">
          <IonButton onClick={goRight}>
            <IonIcon icon={arrowForwardOutline} />
          </IonButton>
        </IonCol>
      </IonRow>
      <IonRow>
        <IonCol className="ion-text-center">
          <IonButton
            fill="outline"
            color="warning"
            href="brands"
            className="ion-text-center"
          >
            Confirm
          </IonButton>{" "}
          <IonCard></IonCard>
          <IonButton fill="outline" color="warning" href="Description">
            Cancel
          </IonButton>
        </IonCol>
      </IonRow>
    </IonPage>
  );
};

export default ChooseModel;
