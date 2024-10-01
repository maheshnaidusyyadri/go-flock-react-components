import React, { useState } from "react";
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
import ProfileDp from '../../images/profile.png';
import { ProfileProps } from "@goflock/types/src/index";
import Header from "../Header/Header";

const ProfilePresenter: React.FC<ProfileProps> = ({
  profile,
  setPreferredName, 
}) => {
  const [preferredName, setPreferredNameState] = useState<string>(
    profile.prefName || ""
  ); 
  const [isLoading, setIsLoading] = useState<boolean>(false); 

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

  

  

  

  return (
    <IonPage>
      <Header title="Profile Setting" showMenu={false} showContactList={false} />
      <IonContent className="profile_edit_cnt">
        <IonCard className="profile_edit_card">
          <span className="dp_wrap">
            <IonImg className="dp" src={ProfileDp}></IonImg> 
            <span className="dp_edit"></span>
          </span>
        </IonCard>
        <div className="profile_info_card">
          <div className="form-container">
              <IonCardContent className="pad0">
                <div className="form-group">
                  <IonInput
                    value={preferredName}
                    onIonChange={(e) => setPreferredNameState(e.detail.value!)}
                    placeholder="Enter your name"
                  />
                </div>
                <div className="form-group">
                  <IonInput                    
                    label="Phone Number"
                    labelPlacement="stacked"
                    placeholder="Enter Phone Number"                     
                  />
                </div>
                <div className="terms">
                  <IonToggle className="ion-toggle" labelPlacement="start">Get remainders, notifications via SMS.</IonToggle>
                </div>    
                <IonButton
                    expand="block"
                    onClick={handlePreferredNameChange}
                    disabled={isLoading || !preferredName}
                    className="primary-btn"
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

export default ProfilePresenter;
function setError(_arg0: null) {
  throw new Error("Function not implemented.");
}

