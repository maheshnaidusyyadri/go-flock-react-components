import React, { useEffect, useState } from "react";
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
  IonGrid,
  IonBadge,
} from "@ionic/react";
import { ManageMembersProps } from "@goflock/types/src/index";
import Selected from "../../images/icons/selected.svg";
import Header from "../Header/Header";
import MenuIcon from "../../images/icons/Dots.svg";
import noMembers from "../../images/no-members.svg";
import HostIcon from "../../images/icons/host.svg";
import CoHostIcon from "../../images/icons/co-host.svg";
import NotificationIcon from "../../images/icons/notification.svg";
import userSearchIcon from "../../images/icons/userSearch.svg";
import membersIcon from "../../images/icons/members.svg";
import messagesIcon from "../../images/icons/messages.svg";

import { getDisplayName } from "../../utils/utils";
import { RoleType } from "@goflock/types/src/models/event/RoleType";
import Footer from "../Footer/Footer";
import RsvpStatus from "../Common/RsvpStatus";
//import CustomSelect from "../Common/CustomSelect";
import IonTextarea from "../Common/CustomTextarea";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../Common/CustomInput";
import CustomSelectRecipients from "./CustomSelectRecipients";

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
  const [showRecepients, setShowRecepients] = useState(false);
  const [selectedRecepients, setSelectedRecepients] = useState<string | "null">(
    "Birthdays"
  );
  const [Isfilter, setIsfilter] = useState(false);
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    register,
    //control,
    setValue,
    clearErrors,
  } = useForm();
  useEffect(() => {
    setValue("recipien", "ALL");
  }, []);

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
  const handleRecipientChange = (value: string) => {
    if (Isfilter) {
      setSelectedRecepients(value);
      setValue("recipien", value);
      setShowRecepients(false);
    } else {
      setSelectedRecepients(value);
      setValue("recipient", value);
      setShowRecepients(false);
      clearErrors("recipient");
    }
    console.log("Selected Event:", value);
  };
  const showRecipientsModal = () => {
    setIsfilter(false);
    setShowRecepients(true);
  };
  const showRecipientsPopup = () => {
    setIsfilter(true);
    setShowRecepients(true);
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
              <IonImg src={userSearchIcon} />
            </IonSegmentButton>
            <IonSegmentButton value="Members">
              <IonImg src={membersIcon} />
            </IonSegmentButton>
            <IonSegmentButton value="Messaging">
              <IonImg src={messagesIcon} />
            </IonSegmentButton>
          </IonSegment>

          {selectedSegment === "Track" && <RsvpStatus event={event} />}
          {selectedSegment === "Members" && (
            <IonGrid className="members_page ion-no-padding">
              <IonGrid className="menbers_list ion-no-padding">
                {members && members.length > 0 ? (
                  <IonList className="list_wrap event_members">
                    {/* <IonRow>
                      <IonCol className="form-group ion-padding-bottom">
                        <CustomSelect
                          control={control}
                          label=""
                          fieldName="recipients"
                          placeholder="Select Recipients"
                          defaultValue={"All(125)"}
                          options={[
                            { value: "All(125)", label: "All(125)" },
                            { value: "Vacations", label: "Not Attending(40)" },
                            {
                              value: "Attending(10)",
                              label: "Attending(10)",
                            },
                            {
                              value: "Not Responding(30)",
                              label: "Not Responding(30)",
                            },
                            { value: "Not Sure(20)", label: "Not Sure(20)" },
                          ]}
                          isRequired={false}
                          errors={errors}
                          errorText="Recipients"
                        />
                      </IonCol>
                    </IonRow> */}
                    <IonRow>
                      <IonCol
                        className="form-group ion-padding-bottom"
                        onClick={showRecipientsPopup}
                      >
                        <CustomInput
                          fieldName={"recipien"}
                          isRequired={false}
                          errors={errors}
                          errorText={"Recipients"}
                          register={register}
                          readOnly={true}
                        />
                      </IonCol>
                    </IonRow>
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
                          <IonItem className="member-actions">
                            <IonLabel class="notifies ion-no-margin">
                              <IonImg
                                className="notifies-icon"
                                src={NotificationIcon}
                              />
                              <IonBadge className="count">2</IonBadge>
                            </IonLabel>

                            <IonImg
                              onClick={() => {
                                if (member) {
                                  setSelectedUser(member);
                                  setShowAction(true);
                                }
                              }}
                              src={MenuIcon}
                              alt="More Details"
                            />
                          </IonItem>
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
              </IonGrid>
            </IonGrid>
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
                {/* <IonRow>
                  <IonCol className="form-group ion-padding-bottom">
                    <CustomSelect
                      control={control}
                      label="Recipients"
                      fieldName="recipient"
                      placeholder="Select Recipients"
                      options={[
                        { value: "All(125)", label: "All(125)" },
                        { value: "Vacations", label: "Not Attending(40)" },
                        {
                          value: "Attending(10)",
                          label: "Attending(10)",
                        },
                        {
                          value: "Not Responding(30)",
                          label: "Not Responding(30)",
                        },
                        { value: "Not Sure(20)", label: "Not Sure(20)" },
                      ]}
                      isRequired={true}
                      errors={errors}
                      errorText="Recipients"
                      //onIonChange={(e: any) => setEventType(e)}
                    />
                  </IonCol>
                </IonRow> */}
                <IonRow>
                  <IonCol
                    className="form-group ion-padding-bottom"
                    onClick={showRecipientsModal}
                  >
                    <CustomInput
                      placeholder={"Select Recipients"}
                      label={"Recipients"}
                      fieldName={"recipient"}
                      isRequired={true}
                      errors={errors}
                      errorText={"Recipients"}
                      register={register}
                      readOnly={true}
                      defaultValue={selectedRecepients}
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
        </IonContent>
        <IonFooter class="stickyFooter">
          {}
          {selectedSegment === "Messaging" && members && members.length > 0 ? (
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

      <IonGrid
        className={
          showRecepients ? "custom-action-modal open" : "custom-action-modal"
        }
      >
        {showRecepients && (
          <CustomSelectRecipients
            onChange={handleRecipientChange}
            defaultValue={selectedRecepients}
          />
        )}
      </IonGrid>
    </>
  );
};

export default ManageMembersPresenter;
