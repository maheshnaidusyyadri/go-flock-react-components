import React, { useState } from "react";
import { ProfileProps } from "@goflock/types/src/index";

const ProfilePresenter: React.FC<ProfileProps> = ({
  profile,
  setPreferredName,
  setIsIntroShown,
  setSMSPreference,
  logout,
}) => {
  const [preferredName, setPreferredNameState] = useState<string>(
    profile.prefName || ""
  );
  const [isIntroShown, setIsIntroShownState] = useState<boolean>(
    profile.isIntroShown || false
  );
  const [smsPreference, setSMSPreferenceState] = useState<boolean>(
    profile.preferences.smsNotifications || false
  );
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const handlePreferredNameChange = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const success = await setPreferredName(preferredName);
      if (!success) {
        throw new Error("Failed to set preferred name");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleIntroShownChange = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const success = await setIsIntroShown(isIntroShown);
      if (!success) {
        throw new Error("Failed to update intro visibility");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSMSPreferenceChange = async () => {
    setIsLoading(true);
    setError(null);
    try {
      const success = await setSMSPreference(smsPreference);
      if (!success) {
        throw new Error("Failed to update SMS preference");
      }
    } catch (err: any) {
      setError(err.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handleLogout = () => {
    logout();
  };

  return (
    <div>
      <h2>Profile Settings</h2>

      <div>
        <label>
          Preferred Name:
          <input
            type="text"
            value={preferredName}
            onChange={(e) => setPreferredNameState(e.target.value)}
          />
        </label>
        <button
          onClick={handlePreferredNameChange}
          disabled={isLoading || !preferredName}
        >
          Save
        </button>
      </div>

      <div>
        <label>
          Show Intro:
          <input
            type="checkbox"
            checked={isIntroShown}
            onChange={(e) => setIsIntroShownState(e.target.checked)}
          />
        </label>
        <button
          onClick={handleIntroShownChange}
          disabled={isLoading}
        >
          Save
        </button>
      </div>

      <div>
        <label>
          SMS Notifications:
          <input
            type="checkbox"
            checked={smsPreference}
            onChange={(e) => setSMSPreferenceState(e.target.checked)}
          />
        </label>
        <button
          onClick={handleSMSPreferenceChange}
          disabled={isLoading}
        >
          Save
        </button>
      </div>

      <div>
        <button
          onClick={handleLogout}
          disabled={isLoading}
        >
          Logout
        </button>
      </div>

      {error && <p style={{ color: "red" }}>{error}</p>}
    </div>
  );
};

export default ProfilePresenter;
