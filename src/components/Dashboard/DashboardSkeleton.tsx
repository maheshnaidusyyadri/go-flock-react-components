import {
  IonCol,
  IonContent,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonSkeletonText,
} from "@ionic/react";
import Header from "../Header/Header";
import CenteredColumn from "../Common/CenteredColumn";
const DashboardSkeleton: React.FC = ({}) => {
  return (
    <IonPage>
      <Header
        showGoBack={false}
        showLogo={true}
        title={""}
        showProfile={true}
      />
      <IonContent className="ion-padding">
        <CenteredColumn>
          <IonSegment
            className="segment-tabs"
            value={"AllEvents"}
          >
            <IonSegmentButton value="AllEvents">
              <IonLabel>All events</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="MyEvents">
              <IonLabel>My events</IonLabel>
            </IonSegmentButton>
          </IonSegment>
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
        </CenteredColumn>
      </IonContent>
    </IonPage>
  );
};
export default DashboardSkeleton;
