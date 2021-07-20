import {
    IonPage,
    IonContent,
    IonSearchbar,
    IonGrid,
    IonRow,
    IonCol,
    IonCard,
    IonCardHeader,
    IonCardSubtitle,
    IonCardContent,
    IonIcon,
    IonButton
} from "@ionic/react";
import { planetOutline, trashOutline } from 'ionicons/icons';

import "./Cart.css";

const Cart: React.FC = () => {
    return (
        <IonPage>
            <IonContent>
                <h1 className="ion-text-center">Cart</h1>

                {/* Searchbar */}
                <IonSearchbar></IonSearchbar>

                {/* shirt with price grid */}
                <IonGrid>
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
                                                <IonButton  fill="outline" size="default">
                                                    <IonIcon icon={planetOutline} />
                                                </IonButton>
                                            {/* </IonCol>
                                            <IonCol> */}
                                                <IonButton  fill="solid" color="danger" size="default" >
                                                    <IonIcon icon={trashOutline} />
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
                                                <IonButton  fill="outline" size="default">
                                                    <IonIcon icon={planetOutline} />
                                                </IonButton>
                                            {/* </IonCol>
                                            <IonCol> */}
                                                <IonButton  fill="solid" color="danger" size="default" >
                                                    <IonIcon icon={trashOutline} />
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
                                                <IonButton  fill="outline" size="default">
                                                    <IonIcon icon={planetOutline} />
                                                </IonButton>
                                            {/* </IonCol> */}
                                            {/* <IonCol> */}
                                                <IonButton  fill="solid" color="danger" size="default" >
                                                    <IonIcon icon={trashOutline} />
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
                            <IonButton color="success">Confirm</IonButton>
                        </IonCol>
                    </IonRow>
                </IonGrid>
            </IonContent>
        </IonPage>
    );
};

export default Cart;
