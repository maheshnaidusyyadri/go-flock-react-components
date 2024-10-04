import React from "react";

// Define the props type
interface DisplayDateProps {
  inputDate: any;
}

const DisplayDate: React.FC<DisplayDateProps> = ({ inputDate }) => {
  console.log("inputDate", inputDate.seconds);

  // Convert the JSON date string to a JavaScript Date object
  const date = new Date(inputDate.seconds * 1000);

  // Use toLocaleDateString to format the date for month and day
  const formattedDate = date.toLocaleDateString("en-US", {
    month: "short", // Full month name (e.g., October)
    day: "numeric", // Numeric day (e.g., 2)
  });

  return <>{formattedDate}</>;
};

export default DisplayDate;
