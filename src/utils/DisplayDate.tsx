import React from "react";

// Define the props type
interface DisplayDateProps {
  inputDate: any;
}

const DisplayDate: React.FC<DisplayDateProps> = ({ inputDate }) => {
  const { startDate, endDate } = inputDate;

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
    </>
  );
};

export default DisplayDate;
