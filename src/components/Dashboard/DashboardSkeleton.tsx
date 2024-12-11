import {
  IonCol,
  IonContent,
  IonGrid,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSkeletonText,
  IonToolbar,
} from "@ionic/react";
const DashboardSkeleton: React.FC = ({}) => {
  return (
    <IonPage>
      <IonToolbar>
        <IonGrid>
          <IonRow>
            <IonCol>
              <IonSkeletonText
                style={{ width: "50px", height: "50px" }}
                animated={true}
              ></IonSkeletonText>
            </IonCol>
            <IonCol>
              <IonSkeletonText
                style={{
                  width: "50px",
                  height: "50px",
                  borderRadius: "50%",
                  float: "right",
                }}
                animated={true}
              ></IonSkeletonText>
            </IonCol>
          </IonRow>
        </IonGrid>
      </IonToolbar>
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
export default DashboardSkeleton;
