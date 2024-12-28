import {
  IonCol,
  IonContent,
  IonGrid,
  IonIcon,
  IonImg,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonRow,
  IonSkeletonText,
  IonThumbnail,
  IonTitle,
} from "@ionic/react";
import Header from "../Header/Header";

import ProfileIcon from "../../images/icons/profile-circle.svg";
import PrivacyIcon from "../../images/icons/shield-tick.svg";
import LogOutIcon from "../../images/icons/logOut.svg";
import rightArrow from "../.././images/icons/arrow-right.svg";

const ProfileSkeleton: React.FC = ({}) => {
  return (
    <IonPage style={{ padding: "5px" }}>
      <Header
        title="Profile Settings"
        showMenu={false}
        showContactList={false}
        leftButtonAction={() => {
          location.href = "/dashboard";
        }}
      />
      <IonContent className="ion-padding">
        <IonRow>
          <IonCol
            style={{
              width: "100%",
              border: "0.1px solid #dedede",
              marginTop: "10px",
              borderRadius: "5px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              padding: "20px 0px 20px 0px",
            }}
          >
            <IonSkeletonText
              animated={true}
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
              }}
            ></IonSkeletonText>
            <IonSkeletonText
              animated={true}
              style={{
                width: "90px",
                borderRadius: "5px",
              }}
            ></IonSkeletonText>
            <IonSkeletonText
              animated={true}
              style={{
                width: "120px",
                borderRadius: "5px",
              }}
            ></IonSkeletonText>
          </IonCol>
        </IonRow>
        {true && (
          <IonGrid className="pad0 profile-settings">
            <IonTitle className="list-title">Setting Options</IonTitle>
            <IonList className="list-wrap">
              <IonItem className="list-item">
                <IonThumbnail
                  slot="start"
                  className="dp"
                >
                  <IonImg
                    className="ion-img"
                    src={
                      ProfileIcon.src ||
                      (ProfileIcon.value as unknown as string) ||
                      (ProfileIcon as unknown as string)
                    }
                    alt="Profile"
                  />
                </IonThumbnail>
                <IonLabel className="list-info">
                  <IonTitle className="name">Profile</IonTitle>
                  <IonIcon
                    src={
                      rightArrow.src ||
                      (rightArrow.value as unknown as string) ||
                      (rightArrow as unknown as string)
                    }
                  ></IonIcon>
                </IonLabel>
              </IonItem>
              <IonItem className="list-item">
                <IonThumbnail
                  slot="start"
                  className="dp"
                >
                  <IonImg
                    className="ion-img"
                    src={
                      PrivacyIcon.src ||
                      (PrivacyIcon.value as unknown as string) ||
                      (PrivacyIcon as unknown as string)
                    }
                    alt="Privacy"
                  />
                </IonThumbnail>
                <IonLabel className="list-info">
                  <IonTitle className="name">Privacy</IonTitle>
                  <IonIcon
                    src={
                      rightArrow.src ||
                      (rightArrow.value as unknown as string) ||
                      (rightArrow as unknown as string)
                    }
                  ></IonIcon>
                </IonLabel>
              </IonItem>

              <IonItem
                className="list-item"
                id="open-logout-action"
              >
                <IonThumbnail
                  slot="start"
                  className="dp"
                >
                  <IonImg
                    className="ion-img"
                    src={
                      LogOutIcon.src ||
                      (LogOutIcon.value as unknown as string) ||
                      (LogOutIcon as unknown as string)
                    }
                    alt="Log Out"
                  />
                </IonThumbnail>
                <IonLabel className="list-info">
                  <IonTitle className="name">Log Out</IonTitle>
                  <IonIcon
                    src={
                      rightArrow.src ||
                      (rightArrow.value as unknown as string) ||
                      (rightArrow as unknown as string)
                    }
                  ></IonIcon>
                </IonLabel>
              </IonItem>
            </IonList>
          </IonGrid>
        )}
      </IonContent>
    </IonPage>
  );
};
export default ProfileSkeleton;
