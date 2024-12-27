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
import userSearchIcon from "../../images/icons/userSearch.svg";
import membersIcon from "../../images/icons/members.svg";
import Footer from "../Footer/Footer";
import { ManageMembersProps } from "@goflock/types";

const ManageMembersSkeleton: React.FC<ManageMembersProps> = ({
  event,
  eventRelation,
}) => {
  return (
    <IonPage style={{ padding: "5px" }}>
      <Header
        title="Manage members"
        showMenu={false}
      />
      <IonContent className="ion-padding">
        <IonSegment
          className="segment-tabs"
          value={"Track"}
        >
          <IonSegmentButton value="Track">
            <IonImg
              src={
                userSearchIcon.src ||
                (userSearchIcon.value as unknown as string)
              }
            />
          </IonSegmentButton>
          <IonSegmentButton value="Members">
            <IonImg
              src={membersIcon.src || (membersIcon.value as unknown as string)}
            />
          </IonSegmentButton>
        </IonSegment>
        <IonSkeletonText
          animated={true}
          style={{ width: "30%" }}
        />
        <IonList>
          <IonRow>
            <IonCol
              style={{
                border: "0.1px solid #dedede",
                height: "40px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IonSkeletonText
                animated={true}
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
              <IonSkeletonText
                animated={true}
                style={{ width: "30%" }}
              />
            </IonCol>
          </IonRow>
        </IonList>
        <IonList>
          <IonRow>
            <IonCol
              style={{
                border: "0.1px solid #dedede",
                height: "40px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IonSkeletonText
                animated={true}
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
              <IonSkeletonText
                animated={true}
                style={{ width: "30%" }}
              />
            </IonCol>
          </IonRow>
        </IonList>
        <IonList>
          <IonRow>
            <IonCol
              style={{
                border: "0.1px solid #dedede",
                height: "40px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IonSkeletonText
                animated={true}
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
              <IonSkeletonText
                animated={true}
                style={{ width: "30%" }}
              />
            </IonCol>
          </IonRow>
        </IonList>
        <IonList>
          <IonRow>
            <IonCol
              style={{
                border: "0.1px solid #dedede",
                height: "40px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IonSkeletonText
                animated={true}
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
              <IonSkeletonText
                animated={true}
                style={{ width: "30%" }}
              />
            </IonCol>
          </IonRow>
        </IonList>
        <IonList>
          <IonRow>
            <IonCol
              style={{
                border: "0.1px solid #dedede",
                height: "40px",
                borderRadius: "5px",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
              }}
            >
              <IonSkeletonText
                animated={true}
                style={{ width: "30px", height: "30px", borderRadius: "50%" }}
              />
              <IonSkeletonText
                animated={true}
                style={{ width: "30%" }}
              />
            </IonCol>
          </IonRow>
        </IonList>
      </IonContent>
      <Footer
        event={event}
        activeTab={"members"}
        settings={event.settings}
        eventRelation={eventRelation}
        hideFooter={true}
      />
    </IonPage>
  );
};
export default ManageMembersSkeleton;
