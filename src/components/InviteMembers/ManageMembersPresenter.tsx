import React, { useState } from "react";
import "./ManageMembersPresenter.scss";
import {
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonThumbnail,
  IonImg,
  IonAvatar,
  IonFooter,
  IonButton,
  IonSegment,
  IonSegmentButton,
  IonPage,
  IonActionSheet,
  IonCard,
  IonText,
  IonRow,
  IonCol,
} from "@ionic/react";
import { ManageMembersProps } from "@goflock/types/src/index";
import Selected from "../../images/icons/selected.svg";
import Header from "../Header/Header";
import Menu from "../../images/icons/menu.svg";
import noMembers from "../../images/no-members.svg";
import HostIcon from "../../images/icons/host.svg";
import CoHostIcon from "../../images/icons/co-host.svg";
import { getDisplayName } from "../../utils/utils";
import { RoleType } from "@goflock/types/src/models/event/RoleType";
import Footer from "../Footer/Footer";
import RsvpStatus from "../Common/RsvpStatus";
import CustomSelect from "../Common/CustomSelect";
import IonTextarea from "../Common/CustomTextarea";
import { FormProvider, useForm } from "react-hook-form";

interface EventMember {
  id?: string;
  flockId?: string;
  eventId?: string;
  name?: string;
  phoneNumber?: string;
  email?: string;
  profileImg?: string;
  addedByUid?: string;
  phone?: string;
  roles?: RoleType[];
}
const ManageMembersPresenter: React.FC<ManageMembersProps> = ({
  eventId,
  event,
  eventRelation,
  members,
  removeMember,
  addAdmin,
  removeAdmin,
}) => {
  const [selectedSegment, setSelectedSegment] = useState<
    "Members" | "Track" | "Messaging"
  >("Track");
  const [showAction, setShowAction] = useState(false);
  const [selectedUser, setSelectedUser] = useState<EventMember | null>(null);
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    register,
    control,
  } = useForm();

  const handleDelete = () => {
    if (selectedUser) {
      removeMember(selectedUser);
    }
  };
  const handleCohost = () => {
    if (selectedUser && selectedUser?.roles?.includes("member")) {
      addAdmin(selectedUser);
    } else if (selectedUser && selectedUser?.roles?.includes("admin")) {
      removeAdmin(selectedUser);
    }
  };
  const getActionName = () => {
    if (selectedUser && selectedUser?.roles?.includes("member")) {
      return "Make co-host";
    } else if (selectedUser && selectedUser?.roles?.includes("admin")) {
      return "Dismiss as co-host";
    }
  };
  const onSendMessage = (formData: any) => {
    console.log("onSendMessage-formData", formData);
  };
  const onError = (err: any) => {
    console.log("onSendMessage-err", err);
  };

  return (
    <>
      <IonPage className="invite_page">
        <Header eventId={eventId} title="Manage members" showMenu={false} />
        <IonContent className="invite_members ion-padding">
          <IonSegment
            className="segment-tabs"
            value={selectedSegment}
            onIonChange={(e) =>
              setSelectedSegment(
                e.detail.value as "Members" | "Track" | "Messaging"
              )
            }
          >
            <IonSegmentButton value="Track">
              <IonLabel>Track</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="Members">
              <IonLabel>Members</IonLabel>
            </IonSegmentButton>
            <IonSegmentButton value="Messaging">
              <IonLabel>Messaging</IonLabel>
            </IonSegmentButton>
          </IonSegment>
          {selectedSegment === "Track" && <RsvpStatus event={event} />}
          {selectedSegment === "Members" && (
            <div className="members_page">
              <div className="menbers_list ">
                {members && members.length > 0 ? (
                  <IonList className="list_wrap event_members">
                    {members.map((member, index) => (
                      <IonItem key={index} className="list_item">
                        <IonThumbnail slot="start" className="dp">
                          {member?.roles?.includes("owner") && (
                            <IonImg className="type" src={HostIcon} />
                          )}
                          {member?.roles?.includes("admin") && (
                            <IonImg className="type co" src={CoHostIcon} />
                          )}
                          {member.profileImg ? (
                            <IonImg
                              src={member.profileImg}
                              alt={`${member.name}'s profile`}
                            />
                          ) : (
                            <IonAvatar class="profile-dp">
                              {getDisplayName(member.name || "")}
                            </IonAvatar>
                          )}
                          <span className="selection">
                            <img src={Selected} alt="Selected" />
                          </span>
                        </IonThumbnail>
                        <IonLabel className="member-info">
                          <h2>
                            {member.name +
                              (member?.roles?.includes("owner")
                                ? " (Host)"
                                : member?.roles?.includes("admin")
                                ? " (Co-host)"
                                : "")}
                          </h2>

                          <p>{member.phoneNumber}</p>
                        </IonLabel>
                        {!member?.roles?.includes("owner") && (
                          <IonAvatar
                            className="action_menu"
                            onClick={() => {
                              if (member) {
                                setSelectedUser(member);
                                setShowAction(true);
                              }
                            }}
                          >
                            <IonImg src={Menu} alt="More Details" />
                          </IonAvatar>
                        )}
                      </IonItem>
                    ))}
                  </IonList>
                ) : (
                  <IonCard className="nodata">
                    <IonImg src={noMembers} />
                    <IonLabel class="title">No invitees</IonLabel>
                    <IonText class="subtitle">
                      Go to contacts and add members
                    </IonText>
                  </IonCard>
                )}
              </div>
            </div>
          )}
          {selectedSegment === "Messaging" &&
            (members && members.length > 0 ? (
              <FormProvider {...methods}>
                <IonRow>
                  <IonCol className="form-group ion-padding-bottom">
                    <IonTextarea
                      placeholder={"Message"}
                      label={"Message"}
                      fieldName={"message"}
                      isRequired={true}
                      errors={errors}
                      errorText={"Message"}
                      register={register}
                    />
                  </IonCol>
                </IonRow>
                <IonRow>
                  <IonCol className="form-group ion-padding-bottom">
                    <CustomSelect
                      control={control}
                      label="Recipients"
                      fieldName="recipients"
                      placeholder="Select Recipients"
                      options={[
                        { value: "Birthday", label: "Birthday" },
                        { value: "Vacations", label: "Vacations" },
                        {
                          value: "GetTogether",
                          label: "Get together",
                        },
                        { value: "Other", label: "Other" },
                      ]}
                      isRequired={true}
                      errors={errors}
                      errorText="Recipients"
                      //onIonChange={(e: any) => setEventType(e)}
                    />
                  </IonCol>
                </IonRow>
              </FormProvider>
            ) : (
              <IonCard className="nodata">
                <IonImg src={noMembers} />
                <IonLabel class="title">No invitees</IonLabel>
                <IonText class="subtitle">
                  Go to contacts and add members
                </IonText>
              </IonCard>
            ))}
          <IonFooter class="stickyFooter">
            {}
            {selectedSegment === "Messaging" &&
            members &&
            members.length > 0 ? (
              <IonButton
                className="primary-btn rounded"
                onClick={handleSubmit(onSendMessage, onError)}
              >
                {"Send message"}
              </IonButton>
            ) : (
              <IonButton className="primary-btn rounded">
                {"Invite Guests"}
              </IonButton>
            )}
          </IonFooter>
        </IonContent>
        <Footer
          eventId={eventId}
          activeTab={"members"}
          settings={event.settings}
          eventRelation={eventRelation}
        />
      </IonPage>
      <IonActionSheet
        isOpen={showAction}
        onDidDismiss={() => setShowAction(false)}
        className="action-menu-end"
        header="Manage Member"
        subHeader="Make/remove admin or remove the member"
        buttons={[
          {
            text: getActionName(),
            role: "destructive",
            data: {
              action: "Add-Cohost",
            },
            cssClass: "fill-btn dark-btn",
            handler: () => {
              handleCohost();
            },
          },
          {
            text: selectedUser
              ? "Remove " + selectedUser.name || selectedUser.phone || ""
              : "",
            data: {
              action: "Delete",
            },
            cssClass: "rounded border-red",
            handler: () => {
              handleDelete();
            },
          },
        ]}
      />
    </>
  );
};

export default ManageMembersPresenter;
