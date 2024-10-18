import { IonCardSubtitle } from "@ionic/react";
import React from "react";

// Define the props type
interface DisplayDateProps {
  inputDate?: any;
  isTimeRequired?:boolean
}

const DisplayDate: React.FC<DisplayDateProps> = ({ inputDate,isTimeRequired=false }) => {
  const { startDate, endDate,startTime,endTime } = inputDate;
  console.log('inputDate-',inputDate)

  // Convert the start and end date strings to JavaScript Date objects
  const startDateObj = new Date(startDate);
  const endDateObj = new Date(endDate);

  // Format the dates using toLocaleDateString
  const formattedStartDate = startDateObj.toLocaleDateString("en-US", {
    month: "short", // Short month name (e.g., Oct)
    day: "numeric", // Numeric day (e.g., 18)
  });

  const formattedEndDate = endDateObj.toLocaleDateString("en-US", {
    month: "short", // Short month name (e.g., Oct)
    day: "numeric", // Numeric day (e.g., 18)
  });

  // If the start and end dates are the same, just display one
  return (
    <>
      {formattedStartDate} - {formattedEndDate}
      {isTimeRequired && (
        <IonCardSubtitle className="event_subtitle">
        {startTime} - {endTime}
        </IonCardSubtitle>
      )}

    </>
  );
};

export default DisplayDate;
