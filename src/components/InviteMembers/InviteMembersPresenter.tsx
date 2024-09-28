import React, { useState } from "react";
import "./InviteMembersPresenter.scss";
import {
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonSearchbar,
  IonToolbar,
  IonThumbnail,
  IonImg,
} from "@ionic/react";
import { InviteMembersProps } from "@goflock/types/src/index"; // Adjust the import based on your file structure
// import { checkmarkCircle, ellipseOutline } from 'ionicons/icons';
import "react-datepicker/dist/react-datepicker.css";
import memberDp from "../../images/member.png";
import unSelect from "../../images/icons/close.svg";
import userDp from "../../images/user.png";
import Selected from "../../images/icons/selected.svg";

import Header from "../Header/Header";

const InviteMembersPresenter: React.FC<InviteMembersProps> = ({}) => {
  console.log("InviteMembersPresenter");
  ////// Member List
  const members = [
    {
      name: "Mahesh Naidu Syyadri",
      phone: "(307) 555-0133",
      image: memberDp,
    },
    {
      name: "Esther Howard",
      phone: "(308) 555-0121",
      image: memberDp,
    },
    {
      name: "Leslie Alexander",
      phone: "(704) 555-0127",
      image: memberDp,
    },
    {
      name: "Brooklyn Simmons",
      phone: "(629) 555-0129",
      image: memberDp,
    },
    {
      name: "Guy Hawkins",
      phone: "(207) 555-0119",
      image: memberDp,
    },
  ];
  //////Selected Members
  const users = [
    { name: "Mahesh Naidu Syyadri", img: userDp },
    { name: "Brooklyn Simmons", img: userDp },
    { name: "Guy Hawkins", img: userDp },
    { name: "Kathryn Murphy", img: userDp },
    { name: "Leslie Alexander", img: userDp },
  ];

  const [searchText, setSearchText] = useState(""); // State to track search input

  // Filter members based on search text
  const filteredMembers = members.filter(
    (member) =>
      member.name.toLowerCase().includes(searchText.toLowerCase()) ||
      member.phone.includes(searchText)
  );

  return (
    <IonContent className="create_event">
      <Header
        title="Add Member"
        showMenu={false}
        showContactList={true}
      />
      <div className="members_page">
        <p className="paragraph">
          Type the username or phone number of your friends or colleagues to be
          able to invite them.
        </p>
        <IonToolbar>
          <IonSearchbar
            value={searchText}
            onIonInput={(e) => setSearchText(e.detail.value!)} // Update search text
            placeholder="Search by name or phone"
          />
        </IonToolbar>
        <div className="users_list">
          <ul>
            {users.map((user, index) => (
              <li key={index}>
                <IonThumbnail
                  slot="start"
                  className="dp"
                >
                  <IonImg
                    src={user.img}
                    alt={user.name}
                  />
                  <span className="selection">
                    <img
                      src={unSelect}
                      alt="Remove"
                    />
                  </span>
                </IonThumbnail>
                <h2>{user.name}</h2>
              </li>
            ))}
          </ul>
        </div>
        <span className="devider"></span>
        <div className="menbers_list">
          <h6>All Members</h6>
          <IonList className="list_wrap">
            {filteredMembers.map((member, index) => (
              <IonItem
                key={index}
                className="list_item"
              >
                <IonThumbnail
                  slot="start"
                  className="dp"
                >
                  <IonImg
                    src={member.image}
                    alt={`${member.name}'s profile`}
                  />
                  <span className="selection">
                    <img
                      src={Selected}
                      alt="Select"
                    />
                  </span>
                </IonThumbnail>
                <IonLabel className="member-info">
                  <h2>{member.name}</h2>
                  <p>{member.phone}</p>
                </IonLabel>
              </IonItem>
            ))}
          </IonList>
        </div>
      </div>
    </IonContent>
  );
};

export default InviteMembersPresenter;
