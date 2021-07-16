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
  IonIcon
} from "@ionic/react";
import { appsOutline, planetOutline, cartOutline } from 'ionicons/icons';

import "./Brands.css";

const Brands: React.FC = () => {
  return (
    <IonPage>
      <IonContent>
        {/* Header */}
        <h1 className="ion-text-center">Brands</h1>

        {/* Searchbar */}
        <IonSearchbar></IonSearchbar>

        {/* Brand grid */}
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

      {/* Tabs */}
      <IonTabBar slot="bottom">
        <IonTabButton>
          <IonIcon icon={appsOutline} />
        </IonTabButton>
        <IonTabButton>
          <IonIcon icon={planetOutline} />
        </IonTabButton>
        <IonTabButton>
          <IonIcon icon={cartOutline} />
        </IonTabButton>
      </IonTabBar>
    </IonPage>
  );
};

export default Brands;
