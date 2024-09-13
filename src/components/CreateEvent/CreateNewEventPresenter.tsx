import React, { useState } from "react";
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonInput,
  IonList,
  IonItem,
  IonLabel,
} from "@ionic/react";
import {
  CreateNewEventProps,
  LocationInfo,
  DraftEvent,
} from "@goflock/types/src/index"; // Adjust the import based on your file structure

const CreateNewEvent: React.FC<CreateNewEventProps> = ({
  searchLocation,
  createEvent,
  goToEvent,
}) => {
  const [locationQuery, setLocationQuery] = useState<string>("");
  const [locationResults, setLocationResults] = useState<LocationInfo[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<LocationInfo | null>(
    null
  );
  const [eventName, setEventName] = useState<string>("");
  const [isCreating, setIsCreating] = useState<boolean>(false);

  // Handle location search
  const handleSearchLocation = async () => {
    if (locationQuery.trim() === "") return;
    const results = await searchLocation(locationQuery);
    setLocationResults(results);
  };

  // Handle creating an event
  const handleCreateEvent = async () => {
    if (!selectedLocation || eventName.trim() === "") return;

    setIsCreating(true);
    const draftEvent: DraftEvent = {
      name: eventName,
      type: "birthday",
    };

    try {
      await createEvent(draftEvent);
      goToEvent("id");
    } catch (error) {
      console.error("Error creating event:", error);
    } finally {
      setIsCreating(false);
    }
  };

  return (
    <IonCard>
      <IonCardHeader>
        <IonCardTitle>Create a New Event</IonCardTitle>
      </IonCardHeader>
      <IonCardContent>
        <IonInput
          value={eventName}
          placeholder="Event Name"
          onIonChange={(e) => setEventName(e.detail.value!)}
          clearInput
        />

        <IonInput
          value={locationQuery}
          placeholder="Search for a location"
          onIonChange={(e) => setLocationQuery(e.detail.value!)}
          clearInput
        />
        <IonButton
          onClick={handleSearchLocation}
          expand="block"
        >
          Search Location
        </IonButton>

        {locationResults.length > 0 && (
          <IonList>
            {locationResults.map((location) => (
              <IonItem
                key={""}
                button
                onClick={() => setSelectedLocation(location)}
              >
                <IonLabel>{location.name}</IonLabel>
              </IonItem>
            ))}
          </IonList>
        )}

        {selectedLocation && (
          <div>
            <p>Selected Location: {selectedLocation.name}</p>
          </div>
        )}

        <IonButton
          onClick={handleCreateEvent}
          expand="block"
          disabled={isCreating || !selectedLocation || !eventName}
        >
          {isCreating ? "Creating Event..." : "Create Event"}
        </IonButton>
      </IonCardContent>
    </IonCard>
  );
};

export default CreateNewEvent;
