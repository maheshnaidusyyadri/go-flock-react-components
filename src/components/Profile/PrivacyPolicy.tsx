import React from "react";
import { IonContent, IonCard, IonText, IonPage } from "@ionic/react";
import Header from "../Header/Header";

const PrivacyPolicy: React.FC = ({}) => {
  return (
    <IonPage>
      <Header
        title="Privacy Policy"
        showMenu={false}
        showContactList={false}
        className="darkheader"
      />
      <IonContent className="privacy_sec ion-padding">
        <IonCard className="privacy_cnt">
          <IonText className="privacy_text">
            Privacy is not for sale, and human rights should not be compromised
            out of fear or greed. I have as much privacy as a goldfish in a
            bowl. I give the fight up: let there be an end, a privacy, an
            obscure nook for me. I want to be forgotten even by God.
          </IonText>
          <IonText className="privacy_text">
            The first significant clause you write in your privacy policy should
            identify all of the personal data that your website or app collects
            from users.
          </IonText>
          <IonText className="privacy_text">
            Make this list as detailed as possible. If you leave something out,
            you could get into trouble with data privacy legislation like the
            GDPR.
          </IonText>
          <IonText className="privacy_text">
            Every byte of data breach is a bite on individual's privacy. In this
            fast growing digital era, cybersecurity awareness must be introduced
            as part of the new social norms to the basic unit of the society,
            because it is no longer an option but a crucial necessity.
          </IonText>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

export default PrivacyPolicy;
