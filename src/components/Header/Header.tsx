// src/components/Header/Header.tsx
import { useState } from "react";

import { IonHeader, IonTitle, IonActionSheet } from "@ionic/react";
import "./Header.scss";
import backArrow from "../../images/icons/back-arrow.svg";
import Menu from "../../images/icons/menu.svg";
import ContactListIcon from "../../images/icons/ContactList.svg";

const Header = ({ title = "", showMenu = true, showContactList = false }) => {
  const [showFirstActionSheet, setShowFirstActionSheet] = useState(false);
  const [showDeleteActionSheet, setShowDeleteActionSheet] = useState(false);

  const handleBack = () => {
    window.history.back(); // Goes back to the previous page
  };

  return (
    <>
      <IonHeader className="main-header">
        <div className="header-cnt">
          <img
            src={backArrow}
            alt="Page Back"
            onClick={handleBack}
          />
          <IonTitle className="page-title">{title}</IonTitle>
          {showMenu && (
            <span
              id="open-action-sheet"
              className="menu_icon"
            >
              <img
                src={Menu}
                alt="More Details"
              />
            </span>
          )}
          {showContactList && (
            <span className="menu_icon contactList">
              <img
                src={ContactListIcon}
                alt="Contact List"
              />
            </span>
          )}
        </div>
      </IonHeader>

      <IonActionSheet
        trigger="open-action-sheet"
        className="action-menu-end"
        buttons={[
          {
            text: "Copy link",
            role: "destructive",
            data: {
              action: "delete",
            },
          },
          {
            text: "Edit Event",
            data: {
              action: "share",
            },
          },
          {
            text: "Add Checklist",
            data: {
              action: "cancel",
            },
          },
          {
            text: "Delete Event",
            data: {
              action: "cancel",
            },
            handler: () => {
              console.log("Delete clicked " + showFirstActionSheet);
              setShowFirstActionSheet(false); // Close the first action sheet
              setShowDeleteActionSheet(true); // Open the delete action sheet
            },
          },
        ]}
      ></IonActionSheet>

      <IonActionSheet
        className="action-menu-end"
        isOpen={showDeleteActionSheet} // Controls visibility of delete action sheet
        onDidDismiss={() => setShowDeleteActionSheet(false)} // Dismiss delete action sheet
        buttons={[
          {
            text: "Delete Event",
            role: "destructive",
            data: {
              action: "delete",
            },
            cssClass: "fill-btn",
          },
          {
            text: "Cancel",
            data: {
              action: "cancel",
            },
            cssClass: "rounded",
          },
        ]}
      ></IonActionSheet>
    </>
  );
};

export default Header;
