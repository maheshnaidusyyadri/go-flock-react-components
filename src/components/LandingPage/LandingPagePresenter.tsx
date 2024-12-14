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
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
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
import expenseIcon from "../../images/landing/expences-icon.svg";
import splitImg from "../../images/landing/split-img.png";

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
            <Tabs className="landing-vertical-tabs">
              <div className="split-text">
                <div className="heading-badge split-badge">
                  <img src={expenseIcon} />
                  Split expenses
                </div>
                <h2>Split bills, not the experiences/momories</h2>
                <div className="tabs-nav col">
                  <TabList className="tablist">
                    <Tab className="tab">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        <g
                          id="Group_40"
                          data-name="Group 40"
                          transform="translate(-1.999 -1.993)"
                        >
                          <path
                            id="Path_249"
                            data-name="Path 249"
                            d="M31.677,42.8h-.088v-4H33.9a.8.8,0,1,0,0-1.6H31.589V34.8a.8.8,0,0,0-1.6,0v2.4H29.9a3.616,3.616,0,1,0,0,7.2h.088v4H27.677a.8.8,0,1,0,0,1.6h2.312v2.4a.8.8,0,0,0,1.6,0V50h.088a3.616,3.616,0,1,0,0-7.2Zm-1.776,0a2.021,2.021,0,1,1,0-4h.088v4Zm1.776,5.6h-.088v-4h.088a2.024,2.024,0,1,1,0,4Z"
                            transform="translate(-4.789 -6.402)"
                            fill="#fff"
                          />
                          <path
                            id="Path_250"
                            data-name="Path 250"
                            d="M48.663,16.166,35.655,15.6a.8.8,0,0,0-.6,1.368l1.7,1.7-3.56,3.56V12.4h2.4a.8.8,0,0,0,.544-1.392l-9.6-8.8a.8.8,0,0,0-1.088,0l-9.6,8.8A.8.8,0,0,0,16.4,12.4h2.4v9.824l-3.56-3.56,1.7-1.7a.8.8,0,0,0-.632-1.368L3.3,16.166a.8.8,0,0,0-.8.8L2,29.942a.8.8,0,0,0,1.368.6l1.7-1.7L13.2,36.99V37.2a12.8,12.8,0,0,0,25.6,0V36.99l8.136-8.152,1.7,1.7a.8.8,0,0,0,1.368-.6l-.568-13.008A.8.8,0,0,0,48.663,16.166ZM18.456,10.8,26,3.887,33.543,10.8H32.4a.8.8,0,0,0-.8.8V25.7a12.8,12.8,0,0,0-2.4-.88V11.6a.8.8,0,0,0-1.6,0V24.51a11.488,11.488,0,0,0-3.2,0V11.6a.8.8,0,0,0-1.6,0V24.822a12.8,12.8,0,0,0-2.4.88V11.6a.8.8,0,0,0-.8-.8ZM5.656,27.142a.8.8,0,0,0-1.136,0l-.8.8.448-10.216,10.216-.448-.8.8a.8.8,0,0,0,0,1.136L18.8,24.478v2.144a12.8,12.8,0,0,0-5.384,8.3ZM26,48.4A11.2,11.2,0,1,1,37.2,37.2,11.2,11.2,0,0,1,26,48.4ZM47.5,27.142a.8.8,0,0,0-1.136,0l-7.784,7.784a12.8,12.8,0,0,0-5.384-8.3V24.478l5.256-5.248a.8.8,0,0,0,0-1.136l-.8-.8,10.216.448.448,10.216Z"
                            transform="translate(0)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                      Splitting event expenses hassle-free.
                    </Tab>
                    <Tab className="tab">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        <g
                          id="Group_40"
                          data-name="Group 40"
                          transform="translate(-1.999 -1.993)"
                        >
                          <path
                            id="Path_249"
                            data-name="Path 249"
                            d="M31.677,42.8h-.088v-4H33.9a.8.8,0,1,0,0-1.6H31.589V34.8a.8.8,0,0,0-1.6,0v2.4H29.9a3.616,3.616,0,1,0,0,7.2h.088v4H27.677a.8.8,0,1,0,0,1.6h2.312v2.4a.8.8,0,0,0,1.6,0V50h.088a3.616,3.616,0,1,0,0-7.2Zm-1.776,0a2.021,2.021,0,1,1,0-4h.088v4Zm1.776,5.6h-.088v-4h.088a2.024,2.024,0,1,1,0,4Z"
                            transform="translate(-4.789 -6.402)"
                            fill="#fff"
                          />
                          <path
                            id="Path_250"
                            data-name="Path 250"
                            d="M48.663,16.166,35.655,15.6a.8.8,0,0,0-.6,1.368l1.7,1.7-3.56,3.56V12.4h2.4a.8.8,0,0,0,.544-1.392l-9.6-8.8a.8.8,0,0,0-1.088,0l-9.6,8.8A.8.8,0,0,0,16.4,12.4h2.4v9.824l-3.56-3.56,1.7-1.7a.8.8,0,0,0-.632-1.368L3.3,16.166a.8.8,0,0,0-.8.8L2,29.942a.8.8,0,0,0,1.368.6l1.7-1.7L13.2,36.99V37.2a12.8,12.8,0,0,0,25.6,0V36.99l8.136-8.152,1.7,1.7a.8.8,0,0,0,1.368-.6l-.568-13.008A.8.8,0,0,0,48.663,16.166ZM18.456,10.8,26,3.887,33.543,10.8H32.4a.8.8,0,0,0-.8.8V25.7a12.8,12.8,0,0,0-2.4-.88V11.6a.8.8,0,0,0-1.6,0V24.51a11.488,11.488,0,0,0-3.2,0V11.6a.8.8,0,0,0-1.6,0V24.822a12.8,12.8,0,0,0-2.4.88V11.6a.8.8,0,0,0-.8-.8ZM5.656,27.142a.8.8,0,0,0-1.136,0l-.8.8.448-10.216,10.216-.448-.8.8a.8.8,0,0,0,0,1.136L18.8,24.478v2.144a12.8,12.8,0,0,0-5.384,8.3ZM26,48.4A11.2,11.2,0,1,1,37.2,37.2,11.2,11.2,0,0,1,26,48.4ZM47.5,27.142a.8.8,0,0,0-1.136,0l-7.784,7.784a12.8,12.8,0,0,0-5.384-8.3V24.478l5.256-5.248a.8.8,0,0,0,0-1.136l-.8-.8,10.216.448.448,10.216Z"
                            transform="translate(0)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                      Easily track and divide costs among participants, ensuring
                      fairness an transparency.
                    </Tab>
                    <Tab className="tab">
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="48"
                        height="48"
                        viewBox="0 0 48 48"
                      >
                        <g
                          id="Group_40"
                          data-name="Group 40"
                          transform="translate(-1.999 -1.993)"
                        >
                          <path
                            id="Path_249"
                            data-name="Path 249"
                            d="M31.677,42.8h-.088v-4H33.9a.8.8,0,1,0,0-1.6H31.589V34.8a.8.8,0,0,0-1.6,0v2.4H29.9a3.616,3.616,0,1,0,0,7.2h.088v4H27.677a.8.8,0,1,0,0,1.6h2.312v2.4a.8.8,0,0,0,1.6,0V50h.088a3.616,3.616,0,1,0,0-7.2Zm-1.776,0a2.021,2.021,0,1,1,0-4h.088v4Zm1.776,5.6h-.088v-4h.088a2.024,2.024,0,1,1,0,4Z"
                            transform="translate(-4.789 -6.402)"
                            fill="#fff"
                          />
                          <path
                            id="Path_250"
                            data-name="Path 250"
                            d="M48.663,16.166,35.655,15.6a.8.8,0,0,0-.6,1.368l1.7,1.7-3.56,3.56V12.4h2.4a.8.8,0,0,0,.544-1.392l-9.6-8.8a.8.8,0,0,0-1.088,0l-9.6,8.8A.8.8,0,0,0,16.4,12.4h2.4v9.824l-3.56-3.56,1.7-1.7a.8.8,0,0,0-.632-1.368L3.3,16.166a.8.8,0,0,0-.8.8L2,29.942a.8.8,0,0,0,1.368.6l1.7-1.7L13.2,36.99V37.2a12.8,12.8,0,0,0,25.6,0V36.99l8.136-8.152,1.7,1.7a.8.8,0,0,0,1.368-.6l-.568-13.008A.8.8,0,0,0,48.663,16.166ZM18.456,10.8,26,3.887,33.543,10.8H32.4a.8.8,0,0,0-.8.8V25.7a12.8,12.8,0,0,0-2.4-.88V11.6a.8.8,0,0,0-1.6,0V24.51a11.488,11.488,0,0,0-3.2,0V11.6a.8.8,0,0,0-1.6,0V24.822a12.8,12.8,0,0,0-2.4.88V11.6a.8.8,0,0,0-.8-.8ZM5.656,27.142a.8.8,0,0,0-1.136,0l-.8.8.448-10.216,10.216-.448-.8.8a.8.8,0,0,0,0,1.136L18.8,24.478v2.144a12.8,12.8,0,0,0-5.384,8.3ZM26,48.4A11.2,11.2,0,1,1,37.2,37.2,11.2,11.2,0,0,1,26,48.4ZM47.5,27.142a.8.8,0,0,0-1.136,0l-7.784,7.784a12.8,12.8,0,0,0-5.384-8.3V24.478l5.256-5.248a.8.8,0,0,0,0-1.136l-.8-.8,10.216.448.448,10.216Z"
                            transform="translate(0)"
                            fill="#fff"
                          />
                        </g>
                      </svg>
                      Whether it's for gifts, food, or venue fees, the platform
                      helps you manage contributions and settle up with just a
                      few clicks, making group events stress-free and organized.
                    </Tab>
                  </TabList>
                </div>
                </div>
                <div className="split-img">
                  <TabPanel>
                    <figure>
                      <img src={splitImg} />
                    </figure>
                  </TabPanel>
                  <TabPanel>
                  <figure>
                      <img src={splitImg} />
                    </figure>
                  </TabPanel>
                  <TabPanel>
                  <figure>
                      <img src={splitImg} />
                    </figure>
                  </TabPanel>
                </div> 
            </Tabs>
          </div>
        </section>
        <section className="faq-sec">
          <div className="container faq-cnt">
            <h2>Freequently asked questions</h2>

            <IonGrid>
              <IonRow class="ion-justify-content-center">
                <IonCol size="12" size-md="10"> 
                  <IonAccordionGroup className="landing-accordian">
                    <IonAccordion value="first" no-lines>
                      <div slot="header" className="accordian-lablel" > 
                          How much storage do I get for my photos and videos? 
                      </div>
                      <div className="accordian-content" slot="content">
                        First Content
                      </div>
                    </IonAccordion>
                    <IonAccordion value="second">
                    <div slot="header" className="accordian-lablel" > 
                    Can I use Google Photos on an iOS device?
                      </div>
                      <div className="accordian-content" slot="content">
                        
                      Can I use Google Photos on an iOS device  Content
                      </div>
                       
                    </IonAccordion>
                    <IonAccordion value="third">
                    <div slot="header" className="accordian-lablel" > 
                    How do I back up my photos and videos?
                      </div>
                      <div className="accordian-content" slot="content"> 
                      Third Content
                      </div>
                       
                    </IonAccordion>
                    <IonAccordion value="fourth">
                    <div slot="header" className="accordian-lablel" > 
                    How do I back up my photos  ?
                      </div>
                      <div className="accordian-content" slot="content"> 
                      Fourth Content
                      </div>
                     
                    </IonAccordion>
                    <IonAccordion value="fifth">
                    <div slot="header" className="accordian-lablel" > 
                    How do I back up my photos and Videos  ?
                      </div>
                      <div className="accordian-content" slot="content"> 
                      photos and Videos Content
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
