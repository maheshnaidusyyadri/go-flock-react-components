import {
  IonCol,
  IonContent,
  IonItem,
  IonList,
  IonPage,
  IonRow,
  IonSkeletonText,
  IonToolbar,
} from "@ionic/react";
const EventMediaSkeleton: React.FC = ({}) => {
  return (
    <IonPage>
      {
        <IonToolbar>
          <IonItem
            style={{ width: "100%", padding: "0px", marginLeft: "-11px" }}
          >
            <IonSkeletonText
              animated={true}
              style={{ width: "70px", marginLeft: "170px" }}
            ></IonSkeletonText>
          </IonItem>
        </IonToolbar>
      }
      <IonContent className="ion-padding">
        <IonList>
          <IonRow>
            <IonCol>
              <IonSkeletonText
                style={{ width: "100%", height: "90px" }}
                animated={true}
              ></IonSkeletonText>
              <IonSkeletonText
                style={{ width: "100%", height: "100px" }}
                animated={true}
              ></IonSkeletonText>
              <IonSkeletonText
                style={{ width: "100%", height: "90px" }}
                animated={true}
              ></IonSkeletonText>
              <IonSkeletonText
                style={{ width: "100%", height: "125px" }}
                animated={true}
              ></IonSkeletonText>
              <IonSkeletonText
                style={{ width: "100%", height: "125px" }}
                animated={true}
              ></IonSkeletonText>
              <IonSkeletonText
                style={{ width: "100%", height: "95px" }}
                animated={true}
              ></IonSkeletonText>
            </IonCol>
            <IonCol>
              <IonSkeletonText
                style={{ width: "100%", height: "125px" }}
                animated={true}
              ></IonSkeletonText>
              <IonSkeletonText
                style={{ width: "100%", height: "125px" }}
                animated={true}
              ></IonSkeletonText>
              <IonSkeletonText
                style={{ width: "100%", height: "95px" }}
                animated={true}
              ></IonSkeletonText>
              <IonSkeletonText
                style={{ width: "100%", height: "90px" }}
                animated={true}
              ></IonSkeletonText>
              <IonSkeletonText
                style={{ width: "100%", height: "100px" }}
                animated={true}
              ></IonSkeletonText>
              <IonSkeletonText
                style={{ width: "100%", height: "150px" }}
                animated={true}
              ></IonSkeletonText>
            </IonCol>
          </IonRow>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default EventMediaSkeleton;
