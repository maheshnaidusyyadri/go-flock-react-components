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
  IonChip,
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
import allIcon from "../../images/rsvp/all.svg";
import attendingIcon from "../../images/rsvp/attending.svg";
import notAttendingIcon from "../../images/rsvp/notAttending.svg";
import notSureIcon from "../../images/rsvp/notSure.svg";

import { getDisplayName } from "../../utils/utils";
import Footer from "../Footer/Footer";
import RsvpStatus from "../Common/RsvpStatus";
import IonTextarea from "../Common/CustomTextarea";
import { FormProvider, useForm } from "react-hook-form";
import CustomModalSelect from "../Common/CustomModalSelect";
import { EventMember } from "@goflock/types/dist/models/event/EventMember";

const ManageMembersPresenter: React.FC<ManageMembersProps> = ({
  eventId,
  event,
  eventRelation,
  members,
  removeMember,
  addAdmin,
  removeAdmin,
  copyEventLink,
  socialShareEventLink,
}) => {
  const [selectedSegment, setSelectedSegment] = useState<
    "Members" | "Track" | "Messaging"
  >("Track");
  const [showAction, setShowAction] = useState(false);
  const [selectedUser, setSelectedUser] = useState<EventMember | null>(null);
  const [recipientsList, SetRecipientsList] = useState<
    { value: string; label: string }[]
  >([]);
  const [filterMember, setFilterMember] = useState("all");
  const [isFromFilter, setIsFromFilter] = useState(false);
  const [filteredMembersList, setFilteredMembersList] = useState<EventMember[]>(
    []
  );

  const methods = useForm();
  const {
    formState: { errors },
    register,
    setValue,
    clearErrors,
    control,
  } = useForm();
  useEffect(() => {
    if (!event?.counters) return;
    const { attendingRSVP, maybeRSVP, declinedRSVP, totalRSVP } =
      event.counters;
    const options = [
      {
        value: `All${
          totalRSVP && totalRSVP.total > 0 ? `(${totalRSVP.total})` : ""
        }`,
        label: `All${
          totalRSVP && totalRSVP.total > 0 ? `(${totalRSVP.total})` : ""
        }`,
        icon: allIcon,
        type: "all",
      },
      {
        value: `Attending${
          attendingRSVP && attendingRSVP.total > 0
            ? `(${attendingRSVP.total})`
            : ""
        }`,
        label: `Attending${
          attendingRSVP && attendingRSVP.total > 0
            ? `(${attendingRSVP.total})`
            : ""
        }`,
        icon: attendingIcon,
        type: "attending",
      },
      {
        value: `Maybe${
          maybeRSVP && maybeRSVP.total > 0 ? `(${maybeRSVP.total})` : ""
        }`,
        label: `Maybe${
          maybeRSVP && maybeRSVP.total > 0 ? `(${maybeRSVP.total})` : ""
        }`,
        icon: notSureIcon,
        type: "maybe",
      },
      {
        value: `Declined${
          declinedRSVP && declinedRSVP.total > 0
            ? `(${declinedRSVP.total})`
            : ""
        }`,
        label: `Declined${
          declinedRSVP && declinedRSVP.total > 0
            ? `(${declinedRSVP.total})`
            : ""
        }`,
        icon: notAttendingIcon,
        type: "not-attending",
      },
    ];
    SetRecipientsList(options);
  }, [event]);

  useEffect(() => {
    const filteredMembers = members?.filter((item: any) => {
      if (filterMember === "all") return true;
      return item?.rsvp?.response === filterMember;
    });
    setFilteredMembersList(filteredMembers);
    console.log("membersList", members);
  }, [filterMember, members]);

  const handleDelete = () => {
    if (selectedUser) {
      removeMember(selectedUser);
    }
  };
  const handleCohost = () => {
    if (selectedUser) {
      let roles = selectedUser.roles || [];
      if (roles.includes("admin") && roles.includes("member")) {
        removeAdmin(selectedUser);
      } else if (roles.includes("member")) {
        addAdmin(selectedUser);
      }
    }
  };
  const getActionName = () => {
    if (selectedUser) {
      let roles = selectedUser.roles || [];
      if (roles.includes("admin") && roles.includes("member")) {
        return "Dismiss as co-host";
      }
      if (roles.includes("member")) {
        return "Make co-host";
      }
    }
    return "No action available";
  };
  const handleFilter = (selectedItem: any) => {
    setIsFromFilter(true);
    setFilterMember(selectedItem);
    console.log("handleFilter", selectedItem);
  };

  return (
    <>
      <IonPage className="invite_page">
        <Header
          eventId={eventId}
          title="Manage members"
          showMenu={false}
        />
        <IonContent
          className="invite_members ion-padding-end ion-padding-start ion-padding-bottom"
          scrollEvents={true}
        >
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
          </IonSegment>

          {selectedSegment === "Track" && <RsvpStatus event={event} />}
          {selectedSegment === "Members" && (
            <IonGrid className="members_page ion-no-padding">
              <IonGrid className="menbers_list ion-no-padding">
                {((filteredMembersList &&
                  filteredMembersList.length == 0 &&
                  isFromFilter) ||
                  (filteredMembersList &&
                    filteredMembersList.length > 0 &&
                    !isFromFilter) ||
                  isFromFilter) && (
                  <IonRow>
                    <IonCol className="form-group ion-padding-bottom">
                      <CustomModalSelect
                        title="Recipients"
                        subTitle="Select recipients type"
                        control={control}
                        label=""
                        fieldName="recipien"
                        placeholder="Select Recipients"
                        options={recipientsList}
                        isRequired={false}
                        errors={errors}
                        errorText="Recipients"
                        register={register}
                        setValue={setValue}
                        clearErrors={clearErrors}
                        defaultValue={recipientsList[0].value}
                        onChangeSelect={handleFilter}
                        filterApply={true}
                      />
                    </IonCol>
                  </IonRow>
                )}
                {filteredMembersList && filteredMembersList.length > 0 ? (
                  <IonList className="list_wrap event_members">
                    {filteredMembersList.map((member, index) => (
                      <IonItem
                        key={index}
                        className="list_item"
                      >
                        <IonThumbnail
                          slot="start"
                          className="dp"
                        >
                          {member?.roles?.includes("owner") && (
                            <IonImg
                              className="type"
                              src={HostIcon}
                            />
                          )}
                          {member?.roles?.includes("admin") && (
                            <IonImg
                              className="type co"
                              src={CoHostIcon}
                            />
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
                            <img
                              src={
                                member.rsvp?.response === "attending"
                                  ? attendingIcon
                                  : member.rsvp?.response === "maybe"
                                    ? notSureIcon
                                    : member.rsvp?.response === "not-attending"
                                      ? notAttendingIcon
                                      : Selected
                              }
                              alt="Selected"
                            />
                          </span>
                        </IonThumbnail>
                        <IonLabel className="member-info">
                          <h2>
                            {(member.rsvp?.name || member.name) +
                              (member?.roles?.includes("owner")
                                ? " (Host)"
                                : member?.roles?.includes("admin")
                                  ? " (Co-host)"
                                  : "")}
                          </h2>

                          <p>{member.phoneNumber}</p>
                        </IonLabel>
                        {member.rsvp?.adultsCount !== undefined && (
                          <IonChip outline={true}>
                            {member.rsvp?.adultsCount + " adults"}
                          </IonChip>
                        )}
                        {member.rsvp?.kidsCount !== undefined && (
                          <IonChip outline={true}>
                            {member.rsvp?.kidsCount + " kids"}
                          </IonChip>
                        )}
                        {!member?.roles?.includes("owner") && (
                          <IonItem className="member-actions">
                            {member?.notificationCount && (
                              <IonLabel class="notifies ion-no-margin">
                                <IonImg
                                  className="notifies-icon"
                                  src={NotificationIcon}
                                />
                                <IonBadge className="count">
                                  {member.notificationCount}
                                </IonBadge>
                              </IonLabel>
                            )}
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
                ) : isFromFilter ? (
                  <IonText class="subtitle">No Result Found</IonText>
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
                <IonRow>
                  <IonCol className="form-group ion-padding-bottom">
                    <CustomModalSelect
                      title="Recipients"
                      subTitle="Select recipients type"
                      control={control}
                      label="Recipients"
                      fieldName="recipient"
                      placeholder="Select Recipients"
                      options={recipientsList}
                      isRequired={true}
                      errors={errors}
                      errorText="Recipients"
                      register={register}
                      setValue={setValue}
                      clearErrors={clearErrors}
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
        {/* Disabling invitation flow for now. We will only support link sharing. */}
        {/* <IonFooter class="stickyFooter">
          {}
          {selectedSegment === "Messaging" && members && members.length > 0 ? (
            <IonButton
              className="primary-btn rounded"
              onClick={handleSubmit(onSendMessage, onError)}
            >
              {"Send message"}
            </IonButton>
          ) : (
            <IonButton
              className="primary-btn rounded"
              onClick={() => goToInviteContacts(eventId)}
            >
              {"Invite Guests"}
            </IonButton>
          )}
        </IonFooter> */}
        <IonFooter class="stickyFooter">
          <IonRow>
            <IonCol>
              <IonButton
                className="primary-btn rounded"
                onClick={() => copyEventLink(eventId)}
              >
                {"Copy invitation link"}
              </IonButton>
            </IonCol>
          </IonRow>
          <IonRow>
            <IonCol>
              <IonButton
                className="primary-btn rounded"
                onClick={() => socialShareEventLink(eventId)}
              >
                {"Share invitation link"}
              </IonButton>
            </IonCol>
          </IonRow>
        </IonFooter>
        <Footer
          eventId={eventId}
          activeTab={"members"}
          settings={event.settings}
          eventRelation={eventRelation}
          hideFooter={true}
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
              ? "Remove " + selectedUser.name || selectedUser.phoneNumber || ""
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
