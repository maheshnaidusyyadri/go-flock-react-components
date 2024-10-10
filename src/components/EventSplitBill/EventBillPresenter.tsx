import React, { useState } from "react";
import "./EventSplitBillPresenter.scss";
import {
  IonButton, 
  IonLabel,
  IonText,  
  IonFooter,
  IonGrid, 
  IonImg, 
  IonThumbnail,
  IonItem,
} from "@ionic/react";
import {
  EventSplitBillProps, 
} from "@goflock/types/src/index"; // Adjust the import based on your file structure
// import { checkmarkCircle, ellipseOutline } from 'ionicons/icons';
import "react-datepicker/dist/react-datepicker.css"; 
import Bill from "../../images/bill.svg"; 
import ProfileIcon from "../../images/profile.png"; 
import Header from "../Header/Header";
import Footer from "../Footer/Footer";

// import Header from '../Header/Header';

const EventBillPresenter: React.FC<EventSplitBillProps> = ({
  
}) => {
  
  // @ts-ignore
  const [startDate, setStartDate] = useState<Date>(new Date());
  // @ts-ignore
  const [endDate, setEndDate] = useState<Date>(new Date());
  // @ts-ignore
  const [startTime, setStartTime] = useState<string>("10:00 AM");
  // @ts-ignore
  const [endTime, setEndTime] = useState<string>("12:00 PM");

   

   

  return (
    <>  
      <Header         
        title='Split Bill'
        showMenu={false}
        showContactList={false} 
        showProfile = {true} 
      />
      <IonGrid
        className="pageCnt bill_cnt"        
      >
        <IonItem className="user_item">
          <IonThumbnail class="dp">
            <IonImg src={ProfileIcon} />            
          </IonThumbnail>
          <IonLabel class="user_name">Jackson Graham</IonLabel>
          <IonText class="amout">$0</IonText>
        </IonItem>
        <IonGrid className="action_screen_cnt">
          <IonImg className="ion-img"
            alt="Successfully Created Event"
            src={Bill}
          /> 
        </IonGrid>
        <IonFooter className="action_screen_buttons">
          <IonButton className="primary-btn rounded">Add Expense</IonButton> 
        </IonFooter>
      </IonGrid>
      <Footer eventId='' activeTab={"bills"} />
    </>
  );
};

export default EventBillPresenter;
