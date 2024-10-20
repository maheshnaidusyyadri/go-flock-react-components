import React, { useRef, useState } from "react";
import {
  IonContent,
  IonPage,
  IonInput,
  IonButton,
  IonCard,
  IonImg,
  IonCardContent,
  IonToggle,
} from "@ionic/react";
import ProfileDp from "../../images/profile.png";
import Header from "../Header/Header";
import { Profile } from "@goflock/types";

type EditProfileProps = {
  profile: Profile;
  setPreferredName: (prefName: string) => Promise<boolean>;
  setSMSPreference: (smsNotifications: boolean) => Promise<boolean>;
};

const EditProfile: React.FC<EditProfileProps> = ({
  profile,
  setPreferredName,
}) => {
  const [preferredName, setPreferredNameState] = useState<string>(
    profile.prefName || ""
  );
  const [phone, setPhone] = useState<string>(profile.phone || "");

  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Ref for the hidden file input
  const [image, setImage] = useState<string | null>(null); // State to hold the selected image
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
  const handleFileChange = async (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    const file = event.target.files?.[0];
    if (file) {
      console.log("Selected file:", file.name);
      const base64 = await convertFileToBase64(file);
      setImage(base64); // Set the selected image as the new profile picture
      console.log("SelectedImage", base64);
    } else {
      console.log("No file selected");
    }
  };

  const convertFileToBase64 = (file: File): Promise<string> => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        resolve(reader.result as string);
      };
      reader.onerror = reject;
      reader.readAsDataURL(file);
    });
  };

  return (
    <IonPage>
      <Header
        title="Edit Profile"
        showMenu={false}
        showContactList={false}
        className="darkheader"
      />
      {/* Hidden file input for image upload */}
      <input
        type="file"
        accept="image/*"
        style={{ display: "none" }} // Hide the file input
        ref={fileInputRef} // Assign ref to the file input
        onChange={handleFileChange} // Handle file change
      />
      <IonContent className="profile_edit_cnt">
        <IonCard className="profile_edit_card">
          <span className="dp_wrap">
            <IonImg className="dp" src={image || ProfileDp}></IonImg>
            <span
              className="dp_edit"
              onClick={() => fileInputRef.current?.click()}
            ></span>
          </span>
        </IonCard>
        <div className="profile_info_card">
          <div className="form-container">
            <IonCardContent className="pad0">
              <div className="form-group">
                <IonInput
                  label="Name"
                  value={preferredName}
                  onIonChange={(e) => setPreferredNameState(e.detail.value!)}
                  labelPlacement="stacked"
                  placeholder="Enter your name"
                />
              </div>
              <div className="form-group">
                <IonInput
                  label="Phone Number"
                  labelPlacement="stacked"
                  placeholder="Enter Phone Number"
                  value={phone}
                  onIonChange={(e) => setPhone(e.detail.value!)}
                />
              </div>
              <div className="terms">
                <IonToggle className="ion-toggle" labelPlacement="start">
                  Get remainders, notifications via SMS.
                </IonToggle>
              </div>
              <IonButton
                expand="block"
                onClick={handlePreferredNameChange}
                disabled={isLoading || !preferredName}
                className="primary-btn rounded"
              >
                Save
              </IonButton>
            </IonCardContent>
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default EditProfile;
function setError(_arg0: null) {
  throw new Error("Function not implemented.");
}
