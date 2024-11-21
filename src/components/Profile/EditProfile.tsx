import React, { useEffect, useRef, useState } from "react";
import {
  IonContent,
  IonPage,
  IonButton,
  IonCard,
  IonImg,
  IonToggle,
  IonCol,
  IonRow,
  IonGrid,
  IonFooter,
} from "@ionic/react";
import ProfileDp from "../../images/profile.png";
import Header from "../Header/Header";
import { Profile } from "@goflock/types";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../Common/CustomInput";

type EditProfileProps = {
  profile: Profile;
  setPreferredName: (prefName: string) => Promise<boolean>;
  setSMSPreference: (smsNotifications: boolean) => Promise<boolean>;
  setProfileOpen: (close: boolean) => void;
};

const EditProfile: React.FC<EditProfileProps> = ({
  profile,
  setPreferredName,
  setProfileOpen,
  setSMSPreference,
}) => {
  const [preferredName, setPreferredNameState] = useState<string>(
    profile.prefName || ""
  );
  const [phone, setPhone] = useState<string>(profile.phone || "");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fileInputRef = useRef<HTMLInputElement | null>(null); // Ref for the hidden file input
  const [image, setImage] = useState<string | null>(null); // State to hold the selected image
  const [sendNotification, setSendNotification] = useState(false);
  const methods = useForm();
  const {
    handleSubmit,
    formState: { errors },
    register,
    setValue,
  } = useForm();
  useEffect(() => {
    if (profile.prefName) {
      setValue("name", profile.prefName);
    }
    if (profile.phone) {
      setValue("phone", "+" + profile.phone);
    }
  }, [profile.prefName, profile.phone]);

  const handlePreferredNameChange = async () => {
    console.log("formData,", isLoading);
    setIsLoading(true);
    try {
      const success = await setPreferredName(preferredName);
      console.log(success);

      if (success) {
        setProfileOpen(false);
      }
    } catch (err: any) {
    } finally {
      setIsLoading(false);
    }
  };
  const handleNotification = (event: CustomEvent) => {
    setSendNotification(event.detail.checked);
    setSMSPreference(event.detail.checked);
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

  const onError = (err: any) => {
    console.log(err);
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
            <IonImg
              className="dp"
              src={image || profile.pictureUrl || ProfileDp}
            ></IonImg>
            <span
              className="dp_edit"
              onClick={() => fileInputRef.current?.click()}
            ></span>
          </span>
        </IonCard>
        <div className="profile_info_card ion-no-margin">
          <FormProvider {...methods}>
            <IonGrid className="ion-no-padding">
              <IonRow>
                <IonCol className="form-group ion-padding-bottom">
                  <CustomInput
                    placeholder={"Enter your name"}
                    label={"Event Name"}
                    fieldName={"name"}
                    isRequired={true}
                    errors={errors}
                    defaultValue={preferredName}
                    errorText={"Name"}
                    register={register}
                    onInputChange={(e) =>
                      setPreferredNameState(e.detail.value!)
                    }
                  />
                </IonCol>
              </IonRow>
              <IonRow>
                <IonCol className="form-group ion-padding-bottom">
                  <CustomInput
                    placeholder={"Enter Phone Number"}
                    label={"Phone Number"}
                    fieldName={"phone"}
                    isRequired={false}
                    errors={errors}
                    defaultValue={phone}
                    errorText={"Phone Number"}
                    inputType={"text"}
                    register={register}
                    onInputChange={(e) => setPhone(e.detail.value!)}
                    readOnly={true}
                  />
                </IonCol>
              </IonRow>
              <div className="terms">
                <IonToggle
                  className="ion-toggle"
                  labelPlacement="start"
                  checked={sendNotification}
                  onIonChange={handleNotification}
                >
                  Get remainders, notifications via SMS.
                </IonToggle>
              </div>
            </IonGrid>
          </FormProvider>
        </div>
      </IonContent>
      <IonFooter className="stickyFooter">
        <IonButton
          expand="block"
          onClick={handleSubmit(handlePreferredNameChange, onError)}
          className="primary-btn rounded"
        >
          Save
        </IonButton>
      </IonFooter>
    </IonPage>
  );
};

export default EditProfile;
