import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonLoading,
  IonAlert,
  IonItem,
  IonLabel,
  IonList,
  IonListHeader,
  IonText,
} from "@ionic/react";
import { EventProps, RSVP } from "@goflock/types/src/index";

const EventPresenter: React.FC<EventProps> = ({
  profile,
  event,
  deleteEvent,
  submitRSVP,
}) => {
  const [rsvpStatus, setRsvpStatus] = useState<RSVP | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const handleDeleteEvent = () => {
    setShowAlert(true);
  };

  const confirmDelete = async () => {
    setIsLoading(true);
    setShowAlert(false);
    try {
      await deleteEvent(event.id);
    } catch (error) {
      setError("Failed to delete the event");
    } finally {
      setIsLoading(false);
    }
  };

  const handleRSVP = async (rsvp: RSVP) => {
    setIsLoading(true);
    setError(null);
    try {
      await submitRSVP(event.id, profile.id, rsvp);
      setRsvpStatus(rsvp);
    } catch (err) {
      setError("Failed to submit RSVP");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <>
      {/* Loading Indicator */}
      <IonLoading
        isOpen={isLoading}
        message={"Please wait..."}
      />

      {/* Alert for Deleting Event */}
      <IonAlert
        isOpen={showAlert}
        onDidDismiss={() => setShowAlert(false)}
        header={"Delete Event"}
        message={"Are you sure you want to delete this event?"}
        buttons={[
          {
            text: "Cancel",
            role: "cancel",
            handler: () => setShowAlert(false),
          },
          {
            text: "Delete",
            role: "destructive",
            handler: confirmDelete,
          },
        ]}
      />

      {/* Event Card */}
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>{event.name}</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          <p>{event.description}</p>
          <p>
            <strong>RSVP Status:</strong>{" "}
            {rsvpStatus?.response || "Not responded yet"}
          </p>
          <p>
            <strong>Date:</strong>{" "}
            {new Date(event.time.startDate).toLocaleDateString()}
          </p>
          <p>
            <strong>Location:</strong> {event.location.name}
          </p>
          <p>
            <strong>Host:</strong> {event.owner}
          </p>

          {/* RSVP Actions */}
          <IonItem>
            <IonLabel>RSVP</IonLabel>
            <IonButton
              onClick={() =>
                handleRSVP({
                  response: "attending",
                  count: 1,
                } as RSVP)
              }
              disabled={isLoading}
            >
              Accept
            </IonButton>
            <IonButton
              onClick={() =>
                handleRSVP({
                  response: "not-attending",
                  count: 1,
                })
              }
              color="danger"
              disabled={isLoading}
            >
              Decline
            </IonButton>
          </IonItem>

          {/* Delete Event Button */}
          <IonButton
            color="danger"
            expand="block"
            onClick={handleDeleteEvent}
            disabled={isLoading}
          >
            Delete Event
          </IonButton>

          {/* Error Message */}
          {error && <p style={{ color: "red" }}>{error}</p>}
        </IonCardContent>
      </IonCard>

      {/* Section: Event Members */}
      <IonCard>
        <IonCardHeader>
          <IonCardTitle>Event Members</IonCardTitle>
        </IonCardHeader>

        <IonCardContent>
          {event.members?.length > 0 ? (
            <IonList>
              <IonListHeader>
                <IonLabel>Members List</IonLabel>
              </IonListHeader>
              {event.members.map((member) => (
                <IonItem key={member.id || member.flockId}>
                  <IonLabel>
                    <h2>{member.flockId}</h2>
                    <h2>{member.name}</h2>
                    <p>{member.email}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          ) : (
            <IonText>No members have been added yet.</IonText>
          )}
          <IonButton href={`/invite-members/${event.id}`}>
            Invite members
          </IonButton>
        </IonCardContent>
      </IonCard>
    </>
  );
};

export default EventPresenter;
