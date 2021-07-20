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
} from "@ionic/react";
import { planetOutline, cartOutline } from "ionicons/icons";

const Apparel: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        {/* based on what apparel you clicked */}
        <h1>FLGD</h1>

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
                      {/* </IonCol>
                        <IonCol> */}
                      <IonButton fill="solid" color="success" size="default">
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
                      {/* </IonCol>
                                            <IonCol> */}
                      <IonButton fill="solid" color="success" size="default">
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
                    <IonCol className="ion-no-padding">
                      <IonButton
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
                      >
                        <IonIcon icon={cartOutline} />
                      </IonButton>
                    </IonCol>
                  </IonRow>
                </IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>

          {/* Submit button */}
          <IonRow>
            <IonCol className="ion-text-center">
              <IonButton shape="round" color="success" href="/checkout">
                Confirm
              </IonButton>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Apparel;
