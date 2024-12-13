import {
  IonCol,
  IonContent,
  IonImg,
  IonList,
  IonPage,
  IonRow,
  IonSegment,
  IonSegmentButton,
  IonSkeletonText,
} from "@ionic/react";
import Header from "../Header/Header";
import GridIcon from "../../images/icons/all.svg";
import PhotoIcon from "../../images/icons/photos.svg";
import VideoIcon from "../../images/icons/videos.svg";
import Footer from "../Footer/Footer";
import { EventMediaProps } from "@goflock/types";

const EventMediaSkeleton: React.FC<EventMediaProps> = ({
  event,
  eventRelation,
}) => {
  return (
    <IonPage>
      <Header
        showMenu={false}
        showContactList={false}
        title={"Media"}
        showProfile={false}
      />
      <IonContent className="ion-padding">
        <IonSegment className="gallery_tabs" value={"all"}>
          <IonSegmentButton value="all">
            <IonImg src={GridIcon} />
          </IonSegmentButton>
          <IonSegmentButton value="photo">
            <IonImg src={PhotoIcon} />
          </IonSegmentButton>
          <IonSegmentButton value="video">
            <IonImg src={VideoIcon} />
          </IonSegmentButton>
        </IonSegment>
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
            </IonCol>
            <IonCol>
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
      <Footer
        activeTab={"media"}
        event={event}
        settings={event.settings}
        eventRelation={eventRelation}
      />
    </IonPage>
  );
};
export default EventMediaSkeleton;
