import { IonCardSubtitle } from "@ionic/react";
import React from "react";

// Define the props type
interface DisplayDateProps {
  inputDate?: {
    startDate?: string;
    endDate?: string;
    startTime?: string;
    endTime?: string;
  };
  isTimeRequired?: boolean;
}

const DisplayDate: React.FC<DisplayDateProps> = ({
  inputDate,
  isTimeRequired = false,
}) => {
  const { startDate, endDate, startTime, endTime } = inputDate || {};

  // Convert the start and end date strings to JavaScript Date objects if they exist
  const startDateObj = startDate ? new Date(startDate) : undefined;
  const endDateObj = endDate ? new Date(endDate) : undefined;

  // Format the dates using toLocaleDateString if they are defined
  const formattedStartDate = startDateObj
    ? startDateObj.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : undefined;

  const formattedEndDate = endDateObj
    ? endDateObj.toLocaleDateString("en-US", {
        month: "short",
        day: "numeric",
      })
    : undefined;

  // Format the times if they are defined
  const formattedStartTime = startTime
    ? new Date(startTime).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    : undefined;

  const formattedEndTime = endTime
    ? new Date(endTime).toLocaleTimeString("en-US", {
        hour: "numeric",
        minute: "2-digit",
        hour12: true,
      })
    : undefined;

  return (
    <>
      {(formattedStartDate || formattedEndDate) && (
        <>
          {formattedStartDate === formattedEndDate
            ? formattedStartDate
            : `${formattedStartDate || ""}${
                formattedEndDate ? ` - ${formattedEndDate}` : ""
              }`}
        </>
      )}
      {isTimeRequired && (formattedStartTime || formattedEndTime) && (
        <IonCardSubtitle className="event-subtitle">
          {formattedStartTime || ""}{" "}
          {formattedStartTime && formattedEndTime ? " - " : ""}{" "}
          {formattedEndTime || ""}
        </IonCardSubtitle>
      )}
    </>
  );
};

export default DisplayDate;
