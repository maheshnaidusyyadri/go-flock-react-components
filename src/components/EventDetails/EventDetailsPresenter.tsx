import React from "react";
import "./EventDetailsPresenter.scss";
import { IonButton, IonContent } from "@ionic/react";
import { CreateNewEventProps } from "@goflock/types/src/index"; // Adjust the import based on your file structure
// import { checkmarkCircle, ellipseOutline } from 'ionicons/icons';
import "react-datepicker/dist/react-datepicker.css";
import EventDp from "../../images/event_DP.png";
import clockIcon from "../../images/icons/clock.svg";
import locationIcon from "../../images/icons/location.svg";
import GlobeIcon from "../../images/icons/globe.svg";
import addUserIcon from "../../images/icons/addUser.svg";
import userDp from "../../images/user.png";
import userTickIcon from "../../images/icons/userTick.svg";
import userCrossIcon from "../../images/icons/userCross.svg";
import helpIcon from "../../images/icons/help.svg";

import Header from "../Header/Header";

const CreateNewEvent: React.FC<CreateNewEventProps> = ({}) => {
  // const [locationQuery, setLocationQuery] = useState<string>("");
  // const [locationResults, setLocationResults] = useState<LocationInfo[]>([]);
  // const [selectedLocation, setSelectedLocation] = useState<LocationInfo | null>(
  //   null
  // );
  return (
    <>
      <IonContent className="create_event">
        <Header
          title="Giggles & Games Gala"
          showMenu={true}
          showContactList={false}
        />
        <div className="event_details">
          <div className="event_info">
            <figure>
              <img
                src={EventDp}
                alt="Event"
              />
            </figure>
            <p>
              Lorem ipsum dolor sit amet consectetur. Feugiat tristique
              adipiscing augue vestibulum comma. Nec facilisi accumsan at
              pretium tempor et magna.
            </p>
            <ul className="listitems">
              <li>
                <div className="venue_info">
                  <span className="dp">
                    <img
                      src={clockIcon}
                      alt="Page Back"
                    />
                  </span>
                  <div className="event_titles">
                    <label>Mar 16 (Fri) - May 18 2021 (Mon)</label>
                    <em>9:00 AM - 11:30 AM</em>
                  </div>
                </div>
              </li>
              <li>
                <div className="venue_info">
                  <span className="dp">
                    <img
                      src={locationIcon}
                      alt=" "
                    />
                  </span>
                  <div className="event_titles">
                    <label>New York, NY</label>
                    <em>9:00 AM - 11:30 AM</em>
                  </div>
                </div>
                <span className="event_type">
                  <img
                    src={GlobeIcon}
                    alt=""
                  />
                </span>
              </li>
            </ul>
          </div>
          <span className="devider"></span>
          <div className="users_info">
            <div className="users_head">
              <h6>Invite Guests</h6>
              <a>
                <img
                  src={addUserIcon}
                  alt="Event"
                />
              </a>
            </div>
            <div className="users_list">
              <ul>
                <li>
                  <span>
                    <img
                      src={userDp}
                      alt="Event"
                    />
                    <em></em>
                  </span>
                  <small>Leslie Leslie</small>
                </li>
                <li>
                  <span>
                    <img
                      src={userDp}
                      alt="Event"
                    />
                    <em></em>
                  </span>
                  <small>Leslie Leslie</small>
                </li>
                <li>
                  <span>
                    <img
                      src={userDp}
                      alt="Event"
                    />
                    <em></em>
                  </span>
                  <small>Leslie Leslie</small>
                </li>
                <li>
                  <span>
                    <img
                      src={userDp}
                      alt="Event"
                    />
                    <em></em>
                  </span>
                  <small>Leslie Leslie</small>
                </li>
                <li>
                  <span>
                    <img
                      src={userDp}
                      alt="Event"
                    />
                    <em></em>
                  </span>
                  <small>Leslie Leslie</small>
                </li>
                <li>
                  <span>
                    <img
                      src={userDp}
                      alt="Event"
                    />
                    <em></em>
                  </span>
                  <small>Leslie Leslie</small>
                </li>
                <li>
                  <span>
                    <img
                      src={userDp}
                      alt="Event"
                    />
                    <em></em>
                  </span>
                  <small>Leslie Leslie</small>
                </li>
                <li>
                  <span>
                    <img
                      src={userDp}
                      alt="Event"
                    />
                    <em></em>
                  </span>
                  <small>Leslie Leslie</small>
                </li>
              </ul>
            </div>
          </div>
          <span className="devider"></span>
          <div className="status_sec">
            <h5>RSVP Status</h5>
            <div className="status_cards success">
              <div className="status_card">
                <small>
                  <img
                    src={userCrossIcon}
                    alt="Event"
                  />
                </small>
                <label>Attending</label>
                <span className="devider"></span>
                <em>0</em>
              </div>
              <div className="status_card error">
                <small>
                  <img
                    src={userTickIcon}
                    alt="Event"
                  />
                </small>
                <label>Not Attending</label>
                <span className="devider"></span>
                <em>0</em>
              </div>
              <div className="status_card warning">
                <small>
                  <img
                    src={helpIcon}
                    alt="Event"
                  />
                </small>
                <label>Not Sure</label>
                <span className="devider"></span>
                <em>0</em>
              </div>
            </div>
          </div>
          <IonButton className="primary-btn rounded">Invite Guests</IonButton>
        </div>
      </IonContent>
    </>
  );
};
export default CreateNewEvent;
