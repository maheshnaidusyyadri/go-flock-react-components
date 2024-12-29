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
import CenteredColumn from "../Common/CenteredColumn";

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
        <CenteredColumn>
          <IonSegment
            className="gallery-tabs"
            value={"all"}
          >
            <IonSegmentButton value="all">
              <IonImg
                src={
                  GridIcon.src ||
                  (GridIcon.value as unknown as string) ||
                  (GridIcon as unknown as string)
                }
              />
            </IonSegmentButton>
            <IonSegmentButton value="photo">
              <IonImg
                src={
                  PhotoIcon.src ||
                  (PhotoIcon.value as unknown as string) ||
                  (PhotoIcon as unknown as string)
                }
              />
            </IonSegmentButton>
            <IonSegmentButton value="video">
              <IonImg
                src={
                  VideoIcon.src ||
                  (VideoIcon.value as unknown as string) ||
                  (VideoIcon as unknown as string)
                }
              />
            </IonSegmentButton>
          </IonSegment>
        </CenteredColumn>
        <IonList>
          <IonRow>
            <IonCol size="2">
              <IonSkeletonText
                style={{ width: "100%", height: "90px" }}
                animated={true}
              ></IonSkeletonText>
            </IonCol>
            <IonCol size="3">
              <IonSkeletonText
                style={{ width: "100%", height: "90px" }}
                animated={true}
              ></IonSkeletonText>
            </IonCol>
            <IonCol size="3">
              <IonSkeletonText
                style={{ width: "100%", height: "90px" }}
                animated={true}
              ></IonSkeletonText>
            </IonCol>
            <IonCol size="2">
              <IonSkeletonText
                style={{ width: "100%", height: "90px" }}
                animated={true}
              ></IonSkeletonText>
            </IonCol>
            <IonCol size="2">
              <IonSkeletonText
                style={{ width: "100%", height: "90px" }}
                animated={true}
              ></IonSkeletonText>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol size="3">
              <IonSkeletonText
                style={{ width: "100%", height: "90px" }}
                animated={true}
              ></IonSkeletonText>
            </IonCol>
            <IonCol size="4">
              <IonSkeletonText
                style={{ width: "100%", height: "90px" }}
                animated={true}
              ></IonSkeletonText>
            </IonCol>
            <IonCol size="2">
              <IonSkeletonText
                style={{ width: "100%", height: "90px" }}
                animated={true}
              ></IonSkeletonText>
            </IonCol>
            <IonCol size="1">
              <IonSkeletonText
                style={{ width: "100%", height: "90px" }}
                animated={true}
              ></IonSkeletonText>
            </IonCol>
            <IonCol size="2">
              <IonSkeletonText
                style={{ width: "100%", height: "90px" }}
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
