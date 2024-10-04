import { IonFooter } from "@ionic/react";
import "./Footer.scss";

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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M17.1979 5.68336L12.3979 2.32503C11.0896 1.40836 9.08125 1.45836 7.82292 2.43336L3.64792 5.6917C2.81458 6.3417 2.15625 7.67503 2.15625 8.72503V14.475C2.15625 16.6 3.88125 18.3334 6.00625 18.3334H14.9896C17.1146 18.3334 18.8396 16.6084 18.8396 14.4834V8.83336C18.8396 7.70836 18.1146 6.32503 17.1979 5.68336ZM11.1229 15C11.1229 15.3417 10.8396 15.625 10.4979 15.625C10.1563 15.625 9.87292 15.3417 9.87292 15V12.5C9.87292 12.1584 10.1563 11.875 10.4979 11.875C10.8396 11.875 11.1229 12.1584 11.1229 12.5V15Z"
                  fill="#18181B"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="link"
              href={`/event-media/${eventId}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M12.9974 18.9584H7.9974C3.4724 18.9584 1.53906 17.0251 1.53906 12.5001V7.50008C1.53906 2.97508 3.4724 1.04175 7.9974 1.04175H12.9974C17.5224 1.04175 19.4557 2.97508 19.4557 7.50008V12.5001C19.4557 17.0251 17.5224 18.9584 12.9974 18.9584ZM7.9974 2.29175C4.15573 2.29175 2.78906 3.65841 2.78906 7.50008V12.5001C2.78906 16.3417 4.15573 17.7084 7.9974 17.7084H12.9974C16.8391 17.7084 18.2057 16.3417 18.2057 12.5001V7.50008C18.2057 3.65841 16.8391 2.29175 12.9974 2.29175H7.9974Z"
                  fill="#71717A"
                />
                <path
                  d="M7.9987 8.95846C6.73203 8.95846 5.70703 7.93346 5.70703 6.66679C5.70703 5.40012 6.73203 4.37512 7.9987 4.37512C9.26536 4.37512 10.2904 5.40012 10.2904 6.66679C10.2904 7.93346 9.26536 8.95846 7.9987 8.95846ZM7.9987 5.62512C7.4237 5.62512 6.95703 6.09179 6.95703 6.66679C6.95703 7.24179 7.4237 7.70846 7.9987 7.70846C8.5737 7.70846 9.04036 7.24179 9.04036 6.66679C9.04036 6.09179 8.5737 5.62512 7.9987 5.62512Z"
                  fill="#71717A"
                />
                <path
                  d="M2.724 16.4168C2.524 16.4168 2.324 16.3168 2.20733 16.1418C2.01566 15.8585 2.09066 15.4668 2.38233 15.2751L6.49066 12.5168C7.39066 11.9085 8.63233 11.9835 9.449 12.6751L9.724 12.9168C10.1407 13.2751 10.849 13.2751 11.2573 12.9168L14.724 9.9418C15.6073 9.18346 16.999 9.18346 17.8907 9.9418L19.249 11.1085C19.5073 11.3335 19.5407 11.7251 19.3157 11.9918C19.0907 12.2501 18.699 12.2835 18.4323 12.0585L17.074 10.8918C16.6573 10.5335 15.949 10.5335 15.5323 10.8918L12.0657 13.8668C11.1823 14.6251 9.79066 14.6251 8.899 13.8668L8.624 13.6251C8.24066 13.3001 7.60733 13.2668 7.18233 13.5585L3.074 16.3168C2.96566 16.3835 2.84066 16.4168 2.724 16.4168Z"
                  fill="#71717A"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="link"
              href={`/event-split-bill/${eventId}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M10.0819 18.9585C9.42358 18.9585 8.79858 18.6168 8.36524 18.0335L7.51523 16.9168C7.34023 16.6835 7.10691 16.5502 6.85691 16.5335C6.61525 16.5168 6.35693 16.6335 6.1486 16.8418C5.43193 17.6085 4.73189 17.9752 4.07356 17.9585C3.62356 17.9418 3.23189 17.7418 2.93189 17.3752C2.89856 17.3335 2.86524 17.2752 2.84024 17.2168C2.51524 16.5168 2.36523 15.5668 2.36523 14.1418V5.87517C2.36523 4.45017 2.51524 3.50851 2.84024 2.80017C2.86524 2.75017 2.89023 2.70017 2.93189 2.6585C3.22356 2.2835 3.61527 2.08351 4.06527 2.05851C4.73193 2.03351 5.44026 2.41684 6.14026 3.16684C6.34859 3.39184 6.59857 3.50017 6.84857 3.48351C7.09857 3.46684 7.33189 3.33351 7.50689 3.10017L8.3569 1.97517C8.79024 1.39184 9.41523 1.05017 10.0736 1.05017C10.7319 1.05017 11.3569 1.39184 11.7902 1.97517L12.6319 3.09184C12.8069 3.3335 13.0486 3.46684 13.3069 3.48351C13.5486 3.50017 13.8069 3.3835 14.0152 3.16684C14.6986 2.4335 15.3736 2.05851 16.0236 2.05851C16.4902 2.05851 16.9236 2.26684 17.2236 2.6585C17.2569 2.70017 17.2902 2.75017 17.3152 2.8085C17.6402 3.5085 17.7902 4.45851 17.7902 5.88351V14.1502C17.7902 15.5752 17.6402 16.5168 17.3152 17.2252C17.2819 17.3002 17.2403 17.3668 17.1819 17.4252C16.9236 17.7585 16.4986 17.9668 16.0236 17.9668C15.3736 17.9668 14.6986 17.5918 14.0152 16.8585C13.8152 16.6418 13.5402 16.5252 13.3069 16.5418C13.0486 16.5585 12.8152 16.6918 12.6319 16.9335L11.7902 18.0502C11.3652 18.6168 10.7402 18.9585 10.0819 18.9585ZM6.81526 15.2752C6.84859 15.2752 6.89026 15.2752 6.92359 15.2752C7.54026 15.3085 8.11523 15.6335 8.5069 16.1585L9.35691 17.2835C9.76525 17.8335 10.3819 17.8335 10.7902 17.2918L11.6319 16.1752C12.0319 15.6418 12.6153 15.3252 13.2319 15.2918C13.8486 15.2585 14.4652 15.5168 14.9152 16.0002C15.5319 16.6585 15.9069 16.7085 16.0069 16.7085C16.0736 16.7085 16.1319 16.6918 16.1903 16.6418C16.4236 16.1168 16.5236 15.3252 16.5236 14.1418V5.87517C16.5236 4.7085 16.4153 3.91684 16.1903 3.39184C16.1236 3.31684 16.0569 3.30851 16.0069 3.30851C15.9069 3.30851 15.5319 3.35851 14.9152 4.01684C14.4652 4.50017 13.8486 4.7585 13.2319 4.72517C12.6069 4.69184 12.0236 4.36684 11.6236 3.84184L10.7819 2.72517C10.3736 2.17517 9.75691 2.17517 9.34857 2.72517L8.49856 3.85851C8.10689 4.38351 7.53192 4.70017 6.91525 4.73351C6.29859 4.76684 5.6819 4.50851 5.2319 4.03351C4.72357 3.48351 4.33193 3.30017 4.11526 3.30851C4.06526 3.30851 4.00691 3.32517 3.94025 3.39184C3.71525 3.91684 3.60689 4.7085 3.60689 5.87517V14.1418C3.60689 15.3168 3.71525 16.1085 3.94025 16.6335C4.01525 16.7002 4.06526 16.7085 4.11526 16.7168C4.3236 16.7252 4.71523 16.5418 5.22356 16.0002C5.66523 15.5252 6.24026 15.2752 6.81526 15.2752Z"
                  fill="#71717A"
                />
                <path
                  d="M13.8307 9.16675H7.16406C6.8224 9.16675 6.53906 8.88341 6.53906 8.54175C6.53906 8.20008 6.8224 7.91675 7.16406 7.91675H13.8307C14.1724 7.91675 14.4557 8.20008 14.4557 8.54175C14.4557 8.88341 14.1724 9.16675 13.8307 9.16675Z"
                  fill="#71717A"
                />
                <path
                  d="M12.1641 12.0835H7.16406C6.8224 12.0835 6.53906 11.8002 6.53906 11.4585C6.53906 11.1168 6.8224 10.8335 7.16406 10.8335H12.1641C12.5057 10.8335 12.7891 11.1168 12.7891 11.4585C12.7891 11.8002 12.5057 12.0835 12.1641 12.0835Z"
                  fill="#71717A"
                />
              </svg>
            </a>
          </li>
          <li>
            <a
              className="link"
              href={`/event-settings/${eventId}`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="20"
                viewBox="0 0 21 20"
                fill="none"
              >
                <path
                  d="M10.498 13.1251C8.77305 13.1251 7.37305 11.7251 7.37305 10.0001C7.37305 8.27512 8.77305 6.87512 10.498 6.87512C12.223 6.87512 13.623 8.27512 13.623 10.0001C13.623 11.7251 12.223 13.1251 10.498 13.1251ZM10.498 8.12512C9.46471 8.12512 8.62305 8.96679 8.62305 10.0001C8.62305 11.0335 9.46471 11.8751 10.498 11.8751C11.5314 11.8751 12.373 11.0335 12.373 10.0001C12.373 8.96679 11.5314 8.12512 10.498 8.12512Z"
                  fill="#71717A"
                />
                <path
                  d="M13.1724 18.4919C12.9974 18.4919 12.8224 18.4669 12.6474 18.4252C12.1307 18.2835 11.6974 17.9585 11.4224 17.5002L11.3224 17.3335C10.8307 16.4835 10.1557 16.4835 9.66406 17.3335L9.5724 17.4919C9.2974 17.9585 8.86406 18.2919 8.3474 18.4252C7.8224 18.5669 7.28073 18.4919 6.8224 18.2169L5.38906 17.3919C4.88073 17.1002 4.51406 16.6252 4.35573 16.0502C4.20573 15.4752 4.28073 14.8835 4.5724 14.3752C4.81406 13.9502 4.88073 13.5669 4.73906 13.3252C4.5974 13.0835 4.23906 12.9419 3.7474 12.9419C2.53073 12.9419 1.53906 11.9502 1.53906 10.7335V9.26686C1.53906 8.0502 2.53073 7.05853 3.7474 7.05853C4.23906 7.05853 4.5974 6.91686 4.73906 6.6752C4.88073 6.43353 4.8224 6.0502 4.5724 5.6252C4.28073 5.11686 4.20573 4.51686 4.35573 3.9502C4.50573 3.3752 4.8724 2.9002 5.38906 2.60853L6.83073 1.78353C7.7724 1.2252 9.01406 1.5502 9.58073 2.50853L9.68073 2.6752C10.1724 3.5252 10.8474 3.5252 11.3391 2.6752L11.4307 2.51686C11.9974 1.5502 13.2391 1.2252 14.1891 1.79186L15.6224 2.61686C16.1307 2.90853 16.4974 3.38353 16.6557 3.95853C16.8057 4.53353 16.7307 5.1252 16.4391 5.63353C16.1974 6.05853 16.1307 6.44186 16.2724 6.68353C16.4141 6.9252 16.7724 7.06686 17.2641 7.06686C18.4807 7.06686 19.4724 8.05853 19.4724 9.2752V10.7419C19.4724 11.9585 18.4807 12.9502 17.2641 12.9502C16.7724 12.9502 16.4141 13.0919 16.2724 13.3335C16.1307 13.5752 16.1891 13.9585 16.4391 14.3835C16.7307 14.8919 16.8141 15.4919 16.6557 16.0585C16.5057 16.6335 16.1391 17.1085 15.6224 17.4002L14.1807 18.2252C13.8641 18.4002 13.5224 18.4919 13.1724 18.4919ZM10.4974 15.4085C11.2391 15.4085 11.9307 15.8752 12.4057 16.7002L12.4974 16.8585C12.5974 17.0335 12.7641 17.1585 12.9641 17.2085C13.1641 17.2585 13.3641 17.2335 13.5307 17.1335L14.9724 16.3002C15.1891 16.1752 15.3557 15.9669 15.4224 15.7169C15.4891 15.4669 15.4557 15.2085 15.3307 14.9919C14.8557 14.1752 14.7974 13.3335 15.1641 12.6919C15.5307 12.0502 16.2891 11.6835 17.2391 11.6835C17.7724 11.6835 18.1974 11.2585 18.1974 10.7252V9.25853C18.1974 8.73353 17.7724 8.3002 17.2391 8.3002C16.2891 8.3002 15.5307 7.93353 15.1641 7.29186C14.7974 6.6502 14.8557 5.80853 15.3307 4.99186C15.4557 4.7752 15.4891 4.51686 15.4224 4.26686C15.3557 4.01686 15.1974 3.81686 14.9807 3.68353L13.5391 2.85853C13.1807 2.64186 12.7057 2.76686 12.4891 3.13353L12.3974 3.29186C11.9224 4.11686 11.2307 4.58353 10.4891 4.58353C9.7474 4.58353 9.05573 4.11686 8.58073 3.29186L8.48906 3.1252C8.28073 2.7752 7.81406 2.6502 7.45573 2.85853L6.01406 3.69186C5.7974 3.81686 5.63073 4.0252 5.56406 4.2752C5.4974 4.5252 5.53073 4.78353 5.65573 5.0002C6.13073 5.81686 6.18906 6.65853 5.8224 7.3002C5.45573 7.94186 4.6974 8.30853 3.7474 8.30853C3.21406 8.30853 2.78906 8.73353 2.78906 9.26686V10.7335C2.78906 11.2585 3.21406 11.6919 3.7474 11.6919C4.6974 11.6919 5.45573 12.0585 5.8224 12.7002C6.18906 13.3419 6.13073 14.1835 5.65573 15.0002C5.53073 15.2169 5.4974 15.4752 5.56406 15.7252C5.63073 15.9752 5.78906 16.1752 6.00573 16.3085L7.4474 17.1335C7.6224 17.2419 7.83073 17.2669 8.0224 17.2169C8.2224 17.1669 8.38906 17.0335 8.4974 16.8585L8.58906 16.7002C9.06406 15.8835 9.75573 15.4085 10.4974 15.4085Z"
                  fill="#71717A"
                />
              </svg>
            </a>
          </li>
        </ul>
      </nav>
    </IonFooter>
  );
};

export default Footer;
