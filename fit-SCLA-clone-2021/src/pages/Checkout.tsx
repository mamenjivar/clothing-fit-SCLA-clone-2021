import { IonContent, IonPage } from '@ionic/react';
import React from 'react';

const Checkout: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <h1 className="ion-text-center">Order Summary</h1>
            </IonContent>
        </IonPage>
    );
};

export default Checkout;