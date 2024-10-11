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
  IonList,
} from "@ionic/react";
import {
  //EventSplitBillProps, 
} from "@goflock/types/src/index"; // Adjust the import based on your file structure
// import { checkmarkCircle, ellipseOutline } from 'ionicons/icons';
import "react-datepicker/dist/react-datepicker.css"; 
import EditIcon from "../../images/icons/EditWhite.svg"; 
import ProfileIcon from "../../images/profile.png";  

import Header from "../Header/Header";
import Footer from "../Footer/Footer";


interface EventSplitBillProps {
  members: { 
    name: string; 
    phone: string;  
    expanse: string; 
    profileImage?: string 
    className : string
  }[];
   
}

const ExpensesPresenter: React.FC<EventSplitBillProps> = ({ 
  members = [ ],
 

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
        title='Expenses'
        showMenu={false}
        showContactList={false} 
        showProfile = {true} 
      />
      <IonGrid
        className="pageCnt bill_cnt"        
      > 
          <IonList className="list_wrap">  
              {members.map((member, index) => (
                <IonItem
                  key={index}
                  className="user_item" 
                > 
                  <IonThumbnail
                    slot="start"
                    className="dp"
                  >
                    <IonImg
                      src={ProfileIcon}
                      alt={`${member.name}'s profile`}
                    /> 
                  </IonThumbnail>
                  <IonLabel className="user_name">
                     {member.name}
                     {member.phone}
                  </IonLabel>
                  <IonText class="amout" className={member.className}>
                    {member.expanse}
                  </IonText>
                </IonItem>
              ))}
          </IonList>       
        <IonFooter className="action_screen_buttons">
          <IonButton className="primary-btn rounded"><IonImg src={EditIcon} /> Edit Expense</IonButton> 
        </IonFooter>
      </IonGrid>
      <Footer eventId='' activeTab={"bills"} />
    </>
  );
};

export default ExpensesPresenter;
