import { IonFooter } from "@ionic/react";
import "./Footer.scss";
import homeIcon from "../../images/icons/home.svg";
import mediaIcon from "../../images/icons/media.svg";
import splitIcon from "../../images/icons/split.svg";
import settingsIcon from "../../images/icons/settings.svg";

interface FooterProps {
  eventId: string;
  activeTab: string;
}

const Footer: React.FC<FooterProps> = ({ eventId }) => {
  return (
    <IonFooter className="main-footer">
      <nav>
        <ul>
          <li>
            <a
              className="link active"
              href={`/event/${eventId}`}
            >
              <img src={homeIcon} />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a
              className="link"
              href={`/event-media/${eventId}`}
            >
              <img src={mediaIcon} />
              <span>Media</span>
            </a>
          </li>
          <li>
            <a
              className="link"
              href={`/event-split-bill/${eventId}`}
            >
              <img src={splitIcon} />
              <span>Split Bill</span>
            </a>
          </li>
          <li>
            <a
              className="link"
              href={`/event-settings/${eventId}`}
            >
              <img src={settingsIcon} />
              <span>Settings</span>
            </a>
          </li>
        </ul>
      </nav>
    </IonFooter>
  );
};

export default Footer;
