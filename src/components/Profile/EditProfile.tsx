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
  IonAvatar,
} from "@ionic/react";
import Header from "../Header/Header";
import { Profile } from "@goflock/types";
import { FormProvider, useForm } from "react-hook-form";
import CustomInput from "../Common/CustomInput";
import { getDisplayName } from "../../utils/utils";
import CenteredColumn from "../Common/CenteredColumn";

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
      setValue("phone", profile.phone);
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

  const SaveProfileButton = (
    <CenteredColumn>
      <IonButton
        expand="block"
        onClick={handleSubmit(handlePreferredNameChange, onError)}
        className="primary-btn rounded"
      >
        Save
      </IonButton>
    </CenteredColumn>
  );

  return (
    <IonPage>
      <Header
        title="Edit Profile"
        showMenu={false}
        showContactList={false}
        className="darkheader"
      />
      <IonContent className="">
        <IonGrid>
          <CenteredColumn>
            {/* Hidden file input for image upload */}
            <input
              type="file"
              accept="image/*"
              style={{ display: "none" }} // Hide the file input
              ref={fileInputRef} // Assign ref to the file input
              onChange={handleFileChange} // Handle file change
            />

            <IonCard className="profile_edit_card profile_edit_cnt">
              <span className="dp_wrap">
                {image || profile.pictureUrl ? (
                  <IonImg
                    className="dp"
                    src={image || profile.pictureUrl}
                  ></IonImg>
                ) : profile?.prefName ? (
                  <IonAvatar className="profile-dp">
                    {getDisplayName(profile.prefName)}
                  </IonAvatar>
                ) : null}
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
                        label={"Name"}
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
                    <IonCol className="form-group non-editable ion-padding-bottom">
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
          </CenteredColumn>
          <div className="ion-hide-md-down ion-padding-top">
            {SaveProfileButton}
          </div>
        </IonGrid>
      </IonContent>
      <IonFooter className="ion-padding ion-hide-md-up">
        <IonGrid>{SaveProfileButton}</IonGrid>
      </IonFooter>
    </IonPage>
  );
};

export default EditProfile;
