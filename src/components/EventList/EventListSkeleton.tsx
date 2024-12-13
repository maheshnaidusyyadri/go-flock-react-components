import {
  IonCol,
  IonContent,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSkeletonText,
} from "@ionic/react";
import Header from "../Header/Header";
const EventListSkeleton: React.FC = ({}) => {
  return (
    <IonPage>
      <Header
        title=""
        showLogo={false}
        showContactList={false}
        showGoBack={true}
        showProfile={false}
      />
      <IonContent className="ion-padding">
        <IonList>
          <IonRow>
            <IonCol>
              <IonSkeletonText
                style={{ width: "100%", height: "75px" }}
                animated={true}
              ></IonSkeletonText>

              <IonLabel>
                <IonSkeletonText
                  animated={true}
                  style={{ width: "80%", height: "10%" }}
                ></IonSkeletonText>

                <IonSkeletonText
                  animated={true}
                  style={{ width: "60%" }}
                ></IonSkeletonText>
              </IonLabel>
            </IonCol>
            <IonCol>
              <IonSkeletonText
                style={{ width: "100%", height: "75px" }}
                animated={true}
              ></IonSkeletonText>

              <IonLabel>
                <IonSkeletonText
                  animated={true}
                  style={{ width: "80%", height: "10%" }}
                ></IonSkeletonText>

                <IonSkeletonText
                  animated={true}
                  style={{ width: "60%" }}
                ></IonSkeletonText>
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonList>
        <IonList>
          <IonRow>
            <IonCol>
              <IonSkeletonText
                style={{ width: "100%", height: "75px" }}
                animated={true}
              ></IonSkeletonText>

              <IonLabel>
                <IonSkeletonText
                  animated={true}
                  style={{ width: "80%", height: "10%" }}
                ></IonSkeletonText>

                <IonSkeletonText
                  animated={true}
                  style={{ width: "60%" }}
                ></IonSkeletonText>
              </IonLabel>
            </IonCol>
            <IonCol>
              <IonSkeletonText
                style={{ width: "100%", height: "75px" }}
                animated={true}
              ></IonSkeletonText>

              <IonLabel>
                <IonSkeletonText
                  animated={true}
                  style={{ width: "80%", height: "10%" }}
                ></IonSkeletonText>

                <IonSkeletonText
                  animated={true}
                  style={{ width: "60%" }}
                ></IonSkeletonText>
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonList>
        <IonList>
          <IonRow>
            <IonCol>
              <IonSkeletonText
                style={{ width: "100%", height: "75px" }}
                animated={true}
              ></IonSkeletonText>

              <IonLabel>
                <IonSkeletonText
                  animated={true}
                  style={{ width: "80%", height: "10%" }}
                ></IonSkeletonText>

                <IonSkeletonText
                  animated={true}
                  style={{ width: "60%" }}
                ></IonSkeletonText>
              </IonLabel>
            </IonCol>
            <IonCol>
              <IonSkeletonText
                style={{ width: "100%", height: "75px" }}
                animated={true}
              ></IonSkeletonText>

              <IonLabel>
                <IonSkeletonText
                  animated={true}
                  style={{ width: "80%", height: "10%" }}
                ></IonSkeletonText>

                <IonSkeletonText
                  animated={true}
                  style={{ width: "60%" }}
                ></IonSkeletonText>
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonList>
        <IonList>
          <IonRow>
            <IonCol>
              <IonSkeletonText
                style={{ width: "100%", height: "75px" }}
                animated={true}
              ></IonSkeletonText>

              <IonLabel>
                <IonSkeletonText
                  animated={true}
                  style={{ width: "80%", height: "10%" }}
                ></IonSkeletonText>

                <IonSkeletonText
                  animated={true}
                  style={{ width: "60%" }}
                ></IonSkeletonText>
              </IonLabel>
            </IonCol>
            <IonCol>
              <IonSkeletonText
                style={{ width: "100%", height: "75px" }}
                animated={true}
              ></IonSkeletonText>

              <IonLabel>
                <IonSkeletonText
                  animated={true}
                  style={{ width: "80%", height: "10%" }}
                ></IonSkeletonText>

                <IonSkeletonText
                  animated={true}
                  style={{ width: "60%" }}
                ></IonSkeletonText>
              </IonLabel>
            </IonCol>
          </IonRow>
        </IonList>
      </IonContent>
    </IonPage>
  );
};
export default EventListSkeleton;
