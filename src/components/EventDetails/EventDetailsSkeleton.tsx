import {
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonPage,
  IonSkeletonText,
  IonThumbnail,
} from "@ionic/react";
import Header from "../Header/Header";
import { EventProps } from "@goflock/types";
import CenteredColumn from "../Common/CenteredColumn";
const EventDetailsSkeleton: React.FC<EventProps> = ({}) => {
  return (
    <IonPage>
      <Header
        showLogo={true}
        showGoBack={false}
        title={"Annual Family Reunion"}
        showMenu={true}
        showContactList={false}
      />
      <IonContent className="ion-padding">
        <IonGrid>
          <CenteredColumn>
            <IonItem>
              <IonThumbnail
                slot="start"
                style={{ width: "100%", height: "300px" }}
              >
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
              <IonSkeletonText
                animated={true}
                style={{ width: "100%" }}
              ></IonSkeletonText>
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
              <IonThumbnail
                slot="start"
                className="rounded"
              >
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
          </CenteredColumn>
        </IonGrid>
      </IonContent>
    </IonPage>
  );
};
export default EventDetailsSkeleton;
