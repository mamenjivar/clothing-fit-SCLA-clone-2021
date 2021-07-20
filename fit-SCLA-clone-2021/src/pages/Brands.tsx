import {
  IonCard,
  IonContent,
  IonPage,
  IonSearchbar,
  IonCardContent,
  IonGrid,
  IonRow,
  IonCol,
  IonTabBar,
  IonTabButton,
  IonIcon,
  IonTabs,
  IonRouterOutlet,
} from "@ionic/react";
import { appsOutline, planetOutline, cartOutline } from "ionicons/icons";

import "./Brands.css";

const Brands: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        {/* Header */}
        <h1 className="ion-text-center">Brands</h1>

        {/* Searchbar */}
        <IonSearchbar></IonSearchbar>

        <IonGrid>
          <IonRow>
            <IonCol>
              <IonCard className="cardBrand">
                <img
                  src="https://www.logolynx.com/images/logolynx/ff/ff70a6c86033e1760d439ce0ab7609d9.jpeg"
                  alt="nike logo"
                  width="150"
                />
                <IonCardContent>FLGD</IonCardContent>
              </IonCard>
            </IonCol>

            <IonCol>
              <IonCard className="cardBrand">
                <img
                  src="https://www.logolynx.com/images/logolynx/ff/ff70a6c86033e1760d439ce0ab7609d9.jpeg"
                  alt="nike logo"
                  width="150"
                />
                <IonCardContent>NIKE</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard className="cardBrand">
                <img
                  src="https://www.logolynx.com/images/logolynx/ff/ff70a6c86033e1760d439ce0ab7609d9.jpeg"
                  alt="nike logo"
                  width="150"
                />
                <IonCardContent>AEON</IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="cardBrand">
                <img
                  src="https://www.logolynx.com/images/logolynx/ff/ff70a6c86033e1760d439ce0ab7609d9.jpeg"
                  alt="nike logo"
                  width="150"
                />
                <IonCardContent>CHAMPION</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonCard className="cardBrand">
                <img
                  src="https://www.logolynx.com/images/logolynx/ff/ff70a6c86033e1760d439ce0ab7609d9.jpeg"
                  alt="nike logo"
                  width="150"
                />
                <IonCardContent>PUMA</IonCardContent>
              </IonCard>
            </IonCol>
            <IonCol>
              <IonCard className="cardBrand">
                <img
                  src="https://www.logolynx.com/images/logolynx/ff/ff70a6c86033e1760d439ce0ab7609d9.jpeg"
                  alt="nike logo"
                  width="150"
                />
                <IonCardContent>SUPREME</IonCardContent>
              </IonCard>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};

export default Brands;
