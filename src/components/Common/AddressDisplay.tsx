import { IonLabel } from "@ionic/react";
import React from "react";

// Define the props interface for AddressComponent
interface AddressDisplayProps {
  address: string;
}

// Utility function to split the address into two parts
function splitAddress(address: string): [string, string] {
  const parts = address.split(","); // Split the address by commas
  const firstLine = parts.slice(0, 2).join(","); // First two parts for the first line
  const secondLine = parts.slice(2).join(","); // Remaining parts for the second line

  return [firstLine, secondLine];
}

// React Component to display the address in two lines
const AddressDisplay: React.FC<AddressDisplayProps> = ({ address }) => {
  const [firstLine, secondLine] = splitAddress(address);

  return (
    <>
      <IonLabel>{firstLine}</IonLabel>
      <IonLabel>{secondLine}</IonLabel>
    </>
  );
};

export default AddressDisplay;
