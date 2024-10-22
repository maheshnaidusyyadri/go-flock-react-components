// import { IonCard, IonGrid, IonLabel } from "@ionic/react";
// import React, { useState } from "react";
// import PhoneInput from "react-phone-input-2";
// import "react-phone-input-2/lib/style.css";
// import { isValidPhoneNumber } from "react-phone-number-input";

// const CustomPhoneNumber = () => {
//   const [phoneNumber, setPhoneNumber] = useState("");
//   const [isValid, setIsValid] = useState(true);
//   const [errorMessage, setErrorMessage] = useState("");
//   const [selectedCountry, setSelectedCountry] = useState(null);

//   const handlePhoneChange = (value: any, country: any) => {
//     setSelectedCountry(country);
//     if (value) {
//       const valid = isValidPhoneNumber("+" + value);
//       setIsValid(valid);
//       if (!valid) {
//         setErrorMessage("Invalid phone number. Please enter a valid number.");
//       } else {
//         setErrorMessage("");
//       }
//     } else {
//       setIsValid(true);
//       setErrorMessage("");
//     }
//   };

//   return (
//     <div>
//       <IonGrid className="auth_cnt">
//         <PhoneInput
//           country={"us"}
//           value={phoneNumber}
//           onChange={handlePhoneChange}
//           placeholder="Enter phone number"
//           enableSearch={true}
//           countryCodeEditable={false}
//         />
//         {!isValid && <p style={{ color: "red" }}>{errorMessage}</p>}
//         <IonLabel className="countryname" style={{ color: "black" }}>
//           {selectedCountry?.name}
//         </IonLabel>
//       </IonGrid>
//     </div>
//   );
// };

// export default CustomPhoneNumber;
