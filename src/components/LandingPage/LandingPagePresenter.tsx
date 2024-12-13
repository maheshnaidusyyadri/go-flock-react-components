import {
  IonAccordion,
  IonAccordionGroup,
  IonCol,
  IonContent,
  IonGrid,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
} from "@ionic/react";
import "./LandingPagePresenter.scss";
import invitozLogoLight from "../../images/landing/invitoz-light.svg";
import invitozLogo from "../../images/invitoz_dark.svg";
import appStore from "../../images/landing/app-store-icon.svg";
import googlePlay from "../../images/landing/google-play-icon.svg";
import InvitationImg1 from "../../images/landing/invitation-img-1.png";
import InvitationImg2 from "../../images/landing/invitation-img-2.png";
import InvitationImg3 from "../../images/landing/invitation-img-3.png";
import InvitationImg4 from "../../images/landing/invitation-img-4.png";
import bannerImage from "../../images/landing/banner-img-1.png";
import eventsImg_1 from "../../images/landing/events-img-1.png";
import eventsImg_2 from "../../images/landing/events-img-2.png";
import eventsImg_3 from "../../images/landing/events-img-3.png";
import facebook from "../../images/landing/facebook-icon.svg";
import twitter from "../../images/landing/twitter-icon.svg";
import instagram from "../../images/landing/instagram-icon.svg";
import eventIcon from "../../images/landing/calender-icon.svg";
import invitationIcon from "../../images/landing/invitation-icon.svg";

const LandingPagePresenter: React.FC = ({}) => {
  return (
    <IonPage>
      <header className="header">
        <div className="container header-cnt">
          <a className="logo" href="#">
            <img src={invitozLogo} />
          </a>
          <nav className="nav">
            <ul>
              <li>
                <a href="#home">home</a>
              </li>
              <li>
                <a href="#events">Events</a>
              </li>
              <li>
                <a href="#invitations">Invitations</a>
              </li>
              <li>
                <a href="#photos">Photos</a>
              </li>
              <li>
                <a href="#expenses">Split Expenses</a>
              </li>
            </ul>
          </nav>
          <a href="#" className="get-app">
            Get the App
          </a>
        </div>
      </header>
      <IonContent>
        <section className="home-banner" id="home">
          <div className="container banner-cnt">
            <div className="banner-text">
              <h1>
                Bringing people together, <br /> Creating lasting memories.
              </h1>
              <p>
                All-in-one platform for seamless even planning, invitations,
                photo sharing, and expense splitting-everything you need to
                celebrate together effortlessly.
              </p>
              <div className="app-buttons">
                <a href="#">
                  <img src={appStore} />
                </a>
                <a href="#">
                  <img src={googlePlay} />
                </a>
              </div>
            </div>
            <div className="banner-img">
              <figure>
                <img src={bannerImage} />
              </figure>
            </div>
          </div>
        </section>
        <section className="events-sec" id="events">
          <div className="container events-cnt">
            <div className="heading-badge event-badge">
              <img src={eventIcon} />
              Events
            </div>
            <h2>Create Events with ease!</h2>
            {/* <p>Lorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem IpsumLorem Ipsum</p> */}
            <div className="event-widgets">
              <div className="event-blocks">
                <p>Setting up events is quick and intuitive.</p>
                <figure>
                  <img src={eventsImg_1} />
                </figure>
              </div>
              <div className="event-blocks">
                <p>
                  Customize essential details like date, location, and theme,
                  and enjoy close integration with invitations to streamline the
                  process from the start.
                </p>
                <figure>
                  <img src={eventsImg_2} />
                </figure>
              </div>
              <div className="event-blocks">
                <p>
                  Track RSVPs effortlessly and keep everyone in sync, making
                  planning simple and efficient.
                </p>
                <figure>
                  <img src={eventsImg_3} />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="invitations-sec" id="invitations">
          <div className="container invitations-cnt">
            <div className="heading-badge invitation-badge">
              <img src={invitationIcon} />
              Invitations
            </div>
            <h2>Seamless Invitation Management</h2>
            <p>
              Invitoz simplifies managing invitations by keeping everything
              organized in one place. Easily send, track, and update
              invitations, view RSVP responses in real time, and communicate
              with guests as needed. With Invitoz, managing your guest list is
              seamless and stress-free.
            </p>
            <div className="invitaion-widgets">
              <div className="invitaion-blocks pallet-1">
                <figure>
                  <img src={InvitationImg1} />
                </figure>
              </div>
              <div className="invitaion-blocks pallet-2">
                <figure>
                  <img src={InvitationImg2} />
                </figure>
              </div>
              <div className="invitaion-blocks pallet-3">
                <figure>
                  <img src={InvitationImg3} />
                </figure>
              </div>
              <div className="invitaion-blocks pallet-4">
                <figure>
                  <img src={InvitationImg4} />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section className="media-sec" id="photos">
          <div className="container media-cnt">
            <div className="heading-badge photos-badge">
              <img src={invitationIcon} />
              Photos
            </div>
            <h2>Make the moments memorables, with Invitoz</h2>
            <p>
              Capturing memories is effortless. Take photos during the event and
              easily share them with selected members. Collaborate with chosen
              individuals to create shared albums, ensuring everyone has access
              to the best moments of the celebration.
            </p>
          </div>
          {/* <IonGrid>
            <IonRow>
                <IonCol size="3">
                <IonImg src={photoSec1} />
                </IonCol>
                <IonCol size="3">
                <IonImg src={photoSec2} />
                </IonCol>
                <IonCol size="3">
                <IonImg src={photoSec3} />
                </IonCol>
                <IonCol size="3">
                <IonImg src={photoSec4} />
                </IonCol>
            </IonRow>
        </IonGrid> */}
        </section>

        <section className="split-sec" id="expenses">
          <div className="container split-cnt">
            {/* <div className="split-text">
                <div className="heading-badge split-badge">
                    <img src={expenseIcon} />
                    Split expenses
                </div>
                <h2>Split bills, not the experiences/momories</h2>
                <div className="tabs-nav col">
                    <nav>
                      <a>Splitting event expenses hassle-free.</a>
                      <a>Easily track and divide costs among participants, ensuring fairness an transparency.</a>
                      <a>Whether it's for gifts, food, or venue fees, the platform helps you manage contributions and settle up with just a few clicks, making group events stress-free and organized.</a>
                    </nav>
                  </div>
            </div>
            <div className="split-img">
                <div className="tabs tabs-content col">
                    <div className="content">
                        <figure>
                            <img src={expenseImg1} />
                        </figure>
                    </div>
                    <div className="content">
                        <figure>
                            <img src={expenseImg1} />
                        </figure>
                    </div>
                    <div className="content">
                        <figure>
                            <img src={expenseImg1} />
                        </figure>
                    </div>
                  </div>
                  
                
            </div> */}
          </div>
        </section>
        <section className="faq-sec">
          <div className="container faq-cnt">
            <h2>Freequently asked questions</h2>

            <IonGrid>
              <IonRow class="ion-justify-content-center">
                <IonCol size="12" size-md="8">
                  <IonAccordionGroup>
                    <IonAccordion value="first">
                      <IonItem slot="header" color="">
                        <IonLabel>
                          How much storage do I get for my photos and videos?
                        </IonLabel>
                      </IonItem>
                      <div className="ion-padding" slot="content">
                        First Content
                      </div>
                    </IonAccordion>
                    <IonAccordion value="second">
                      <IonItem slot="header" color="">
                        <IonLabel>
                          Can I use Google Photos on an iOS device?
                        </IonLabel>
                      </IonItem>
                      <div className="ion-padding" slot="content">
                        Second Content
                      </div>
                    </IonAccordion>
                    <IonAccordion value="third">
                      <IonItem slot="header" color="">
                        <IonLabel>
                          How do I back up my photos and videos?
                        </IonLabel>
                      </IonItem>
                      <div className="ion-padding" slot="content">
                        Third Content
                      </div>
                    </IonAccordion>
                    <IonAccordion value="third">
                      <IonItem slot="header" color="">
                        <IonLabel>How do I edit my photos?</IonLabel>
                      </IonItem>
                      <div className="ion-padding" slot="content">
                        Third Content
                      </div>
                    </IonAccordion>
                    <IonAccordion value="third">
                      <IonItem slot="header" color="">
                        <IonLabel>How can I share my photos?</IonLabel>
                      </IonItem>
                      <div className="ion-padding" slot="content">
                        Third Content
                      </div>
                    </IonAccordion>
                    <IonAccordion value="third">
                      <IonItem slot="header" color="">
                        <IonLabel>How do I search for my photos?</IonLabel>
                      </IonItem>
                      <div className="ion-padding" slot="content">
                        Third Content
                      </div>
                    </IonAccordion>
                  </IonAccordionGroup>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </section>
        <footer className="footer-sec">
          <a href="#">
            <img src={invitozLogoLight} />
          </a>
          <h3>
            A comprehensive platform for managing invites,
            <br /> photos, and expenses, all in one place.
          </h3>
          <h6>download</h6>
          <div className="app-buttons">
            <a href="#">
              <img src={appStore} alt="app store" />
            </a>
            <a href="#">
              <img src={googlePlay} alt="google play" />
            </a>
          </div>
          <div className="copy-cnt">
            <p>
              &copy; 2024 Script Runner. All rights reserved.{" "}
              <a href="#">Privacy Policy</a>
            </p>
            <div className="social-list">
              <ul>
                <li>
                  <a href="#">
                    <img src={facebook} alt="facebook" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={instagram} alt="instagram" />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img src={twitter} alt="twitter" />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </footer>
      </IonContent>
    </IonPage>
  );
};
export default LandingPagePresenter;
