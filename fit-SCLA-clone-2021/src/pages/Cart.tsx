import {
    IonPage,
    IonContent,
    IonSearchbar,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardTitle,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonButton,
    IonTabBar,
    IonTabButton
} from "@ionic/react";
import { appsOutline, planetOutline, cartOutline } from 'ionicons/icons';

import "./Cart.css";

const Cart: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <h1 className="ion-text-center">Cart section</h1>

                {/* Searchbar */}
                <IonSearchbar></IonSearchbar>

                {/* shirt with price grid */}
                <IonGrid>
                </IonGrid>
                    <IonRow>
                        <IonCol>
                            <IonCard>
                                <img src="https://cdn.shopify.com/s/files/1/0250/0714/products/Go-To-Tee-010100002C8-lake-green-flat_300x.jpg?v=1614195208" alt="shirt 01" width="150"/>
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
                                                <IonButton className="ion-no-padding" fill="outline" size="default">
                                                    <IonIcon icon={appsOutline} />
                                                </IonButton>
                                            </IonCol>
                                            <IonCol>
                                                <IonButton className="ion-no-padding" fill="solid" color="success" size="default" >
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
                                <img src="https://cdn.shopify.com/s/files/1/0250/0714/products/Go-To-Tee-010100002C8-lake-green-flat_300x.jpg?v=1614195208" alt="shirt 01" width="150"/>
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
                                                <IonButton className="ion-no-padding" fill="outline" size="default">
                                                    <IonIcon icon={appsOutline} />
                                                </IonButton>
                                            </IonCol>
                                            <IonCol>
                                                <IonButton className="ion-no-padding" fill="solid" color="success" size="default" >
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
                                <img src="https://cdn.shopify.com/s/files/1/0250/0714/products/Go-To-Tee-010100002C8-lake-green-flat_300x.jpg?v=1614195208" alt="shirt 01" width="150"/>
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
                                                <IonButton className="ion-no-padding" fill="outline" size="default">
                                                    <IonIcon icon={appsOutline} />
                                                </IonButton>
                                            </IonCol>
                                            <IonCol>
                                                <IonButton className="ion-no-padding" fill="solid" color="success" size="default" >
                                                    <IonIcon icon={cartOutline} />
                                                </IonButton>
                                            </IonCol>
                                        </IonRow>
                                </IonCardContent>
                            </IonCard>
                        </IonCol>
                    </IonRow>
            </IonContent>

        {/* bottom navbar */}
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

export default Cart;
