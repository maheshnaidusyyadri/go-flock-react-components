import React, { useState } from "react";
import { Currency, EventSettingsProps, EventVisibility } from "@goflock/types";

const EventSettingsPresenter: React.FC<EventSettingsProps> = ({
  event,
  eventSettings,
  enableMediaSharing,
  disableMediaSharing,
  enableSplitBills,
  disableSplitBills,
  updateCurrency,
  updateEventVisibility,
}) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);
  const [settings, setSettings] = useState(eventSettings);

  const handleToggleMediaSharing = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const updatedSettings = settings.shareMedia
        ? await disableMediaSharing(event.id)
        : await enableMediaSharing(event.id);
      setSettings(updatedSettings);
    } catch (err) {
      setError("Failed to update media sharing settings");
    } finally {
      setIsLoading(false);
    }
  };

  const handleToggleSplitBills = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const updatedSettings = settings.splitBills
        ? await disableSplitBills(event.id)
        : await enableSplitBills(event.id);
      setSettings(updatedSettings);
    } catch (err) {
      setError("Failed to update split bills settings");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateCurrency = async (currency: Currency) => {
    setIsLoading(true);
    setError(null);
    try {
      const updatedSettings = await updateCurrency(currency);
      setSettings(updatedSettings);
    } catch (err) {
      setError("Failed to update currency");
    } finally {
      setIsLoading(false);
    }
  };

  const handleUpdateEventVisibility = async (visibility: EventVisibility) => {
    setIsLoading(true);
    setError(null);
    try {
      const updatedSettings = await updateEventVisibility(visibility);
      setSettings(updatedSettings);
    } catch (err) {
      setError("Failed to update event visibility");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div>
      <h2>Event Settings for {event.name}</h2>

      <div>
        <h3>Media Sharing</h3>
        <button
          onClick={handleToggleMediaSharing}
          disabled={isLoading}
        >
          {settings.shareMedia ? "Disable" : "Enable"} Media Sharing
        </button>
      </div>

      <div>
        <h3>Split Bills</h3>
        <button
          onClick={handleToggleSplitBills}
          disabled={isLoading}
        >
          {settings.splitBills ? "Disable" : "Enable"} Split Bills
        </button>
      </div>

      <div>
        <h3>Currency</h3>
        <select
          value={settings.currency}
          onChange={(e) => handleUpdateCurrency(e.target.value as Currency)}
          disabled={isLoading}
        >
          <option value="USD">USD</option>
          <option value="EUR">EUR</option>
          <option value="GBP">GBP</option>
          {/* Add other currencies as needed */}
        </select>
      </div>

      <div>
        <h3>Event Visibility</h3>
        <select
          value={""}
          onChange={(e) =>
            handleUpdateEventVisibility(e.target.value as EventVisibility)
          }
          disabled={isLoading}
        >
          <option value="Public">Public</option>
          <option value="Private">Private</option>
          <option value="Hidden">Hidden</option>
        </select>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default EventSettingsPresenter;
