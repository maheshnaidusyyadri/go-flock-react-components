import {
  IonContent,
  IonItem,
  IonLabel,
  IonPage,
  IonSkeletonText,
  IonThumbnail,
} from "@ionic/react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { EventProps } from "@goflock/types";
const EventDetailsSkeleton: React.FC<EventProps> = ({
  event,
  eventRelation,
}) => {
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
        <IonItem>
          <IonThumbnail slot="start" style={{ width: "100%", height: "300px" }}>
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
      {(["admin", "owner"].includes(eventRelation?.visitType) ||
        (["member"].includes(eventRelation?.visitType) &&
          eventRelation?.rsvp &&
          eventRelation.rsvp?.response)) && (
        <Footer
          event={event}
          activeTab={"invitation"}
          settings={event.settings}
          eventRelation={eventRelation}
        />
      )}
    </IonPage>
  );
};
export default EventDetailsSkeleton;
