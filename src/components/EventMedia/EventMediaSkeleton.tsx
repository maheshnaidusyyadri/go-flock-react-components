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

export const EventMediaSkeleton: React.FC = () => {
  return (
    <IonPage>
      <Header
        showMenu={false}
        showContactList={false}
        title={"Media"}
        showProfile={false}
      />
      <IonContent className="ion-padding">
        <IonSegment
          className="gallery-tabs"
          value={"all"}
        >
          <IonSegmentButton value="all">
            <IonImg
              src={GridIcon.src || (GridIcon.value as unknown as string)}
            />
          </IonSegmentButton>
          <IonSegmentButton value="photo">
            <IonImg
              src={PhotoIcon.src || (PhotoIcon.value as unknown as string)}
            />
          </IonSegmentButton>
          <IonSegmentButton value="video">
            <IonImg
              src={VideoIcon.src || (VideoIcon.value as unknown as string)}
            />
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
    </IonPage>
  );
};
export default EventMediaSkeleton;
