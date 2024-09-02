import React, { useState } from "react";
import { EventProps, RSVP } from "@goflock/types";

const EventPresenter: React.FC<EventProps> = ({
  profile,
  event,
  deleteEvent,
  submitRSVP,
}) => {
  const [rsvpStatus, setRsvpStatus] = useState<RSVP | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handleDeleteEvent = () => {
    deleteEvent(event.id);
  };

  async (rsvp: RSVP) => {
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
    <div>
      <h2>{event.name}</h2>
      <p>{event.description}</p>
      <p>{rsvpStatus?.response}</p>
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

      <div>
        <button
          onClick={handleDeleteEvent}
          disabled={isLoading}
        >
          Delete Event
        </button>
      </div>

      <div>
        <h3>RSVP</h3>
        <button
          //onClick={() => handleRSVP()}
          disabled={isLoading}
        >
          Accept
        </button>
        <button
          //onClick={() => handleRSVP(RSVP.Declined)}
          disabled={isLoading}
        >
          Decline
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default EventPresenter;
