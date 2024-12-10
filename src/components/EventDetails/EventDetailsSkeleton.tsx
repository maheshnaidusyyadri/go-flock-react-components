import {
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
  IonSkeletonText,
  IonThumbnail,
} from "@ionic/react";
const EventDetailsSkeletonPresenter: React.FC = ({}) => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonItem className="ion-no-padding ion-no-margin">
          <IonThumbnail slot="start" style={{ width: "100%", height: "200px" }}>
            <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
        </IonItem>

        <IonItem>
          <IonSkeletonText
            animated={true}
            style={{ width: "100%" }}
          ></IonSkeletonText>
        </IonItem>
        <IonItem>
          <IonThumbnail slot="start">
            <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
          <IonLabel>
            <IonSkeletonText
              animated={true}
              style={{ width: "60%" }}
            ></IonSkeletonText>
            <IonSkeletonText
              animated={true}
              style={{ width: "30%" }}
            ></IonSkeletonText>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonThumbnail slot="start">
            <IonSkeletonText animated={true}></IonSkeletonText>
          </IonThumbnail>
          <IonLabel>
            <IonSkeletonText
              animated={true}
              style={{ width: "60%" }}
            ></IonSkeletonText>
          </IonLabel>
        </IonItem>
        <IonItem>
          <IonThumbnail slot="start" className="rounded">
            <IonSkeletonText
              animated={true}
              class="radius-50"
            ></IonSkeletonText>
          </IonThumbnail>
          <IonLabel>
            <IonSkeletonText
              animated={true}
              style={{ width: "30%" }}
            ></IonSkeletonText>
            <IonSkeletonText
              animated={true}
              style={{ width: "60%" }}
            ></IonSkeletonText>
          </IonLabel>
        </IonItem>
      </IonContent>
    </IonPage>
  );
};
export default EventDetailsSkeletonPresenter;
