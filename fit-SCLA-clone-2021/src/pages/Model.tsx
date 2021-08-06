import React, { useState } from "react";
import { IonContent, IonPage, IonButton } from "@ionic/react";

const Model: React.FC = () => {
  const [rotateModel, setRotateModel] = useState<string>();
  const [count, setCount] = useState<number>(0);

  const modelViewArray = [
    "https://www.dmhaesthetics.com/website2015/wp-content/uploads/2015/03/19244704-Blank-Anatomy-Figure-Front-view-Stock-Photo-anatomy-human-body.jpg",
    "https://thumbs.dreamstime.com/b/side-view-portrait-young-man-full-length-isolated-white-background-35859175.jpg",
    "https://previews.123rf.com/images/ghoststone/ghoststone1506/ghoststone150600061/41194116-back-view-of-man-in-jeans-standing-young-guy-rear-view-people-collection-backside-view-of-person-iso.jpg",
    "https://c8.alamy.com/comp/B98RT5/anatomy-of-the-muscular-system-lateral-view-B98RT5.jpg",
  ];

  const onRotateHandler = () => {
    setRotateModel(modelViewArray[count]);

    if (count === 3) {
      setCount(0);
    } else {
      setCount(count + 1);
    }
  };

  return (
    <IonPage>
      <IonContent>
        <h1>Model</h1>
        <img src={rotateModel} alt="model rotating" width="200"/>
        <IonButton onClick={onRotateHandler}>Rotate</IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Model;
