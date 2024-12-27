import {
  IonAccordion,
  IonAccordionGroup,
  IonCol,
  IonContent,
  IonGrid,
  IonPage,
  IonRow,
} from "@ionic/react";
import "./LandingPagePresenter.scss";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import invitozLogoLight from "../../images/landing/invitoz-light.svg";
import arrow from "../../images/landing/right-arrow.svg";
import invitozLogo from "../../images/invitoz_dark.svg";
import InvitationImg1 from "../../images/landing/invitation-img-1.png";
import InvitationImg2 from "../../images/landing/invitation-img-2.png";
import InvitationImg3 from "../../images/landing/invitation-img-3.png";
import InvitationImg4 from "../../images/landing/invitation-img-4.png";
import bannerImage from "../../images/landing/banner-img-1.png";
import eventsImg_1 from "../../images/landing/events-img-1.png";
import eventsImg_2 from "../../images/landing/events-img-2.png";
import eventsImg_3 from "../../images/landing/events-img-3.png";

import photoSec1 from "../../images/landing/photos-img-1.png";
import photoSec2 from "../../images/landing/photos-img-2.png";
import photoSec3 from "../../images/landing/photos-img-3.png";
import photoSec4 from "../../images/landing/photos-img-4.png";
import photoSec5 from "../../images/landing/photos-img-3.png";
import photoSec6 from "../../images/landing/photos-img-2.png";

import facebook from "../../images/landing/facebook-icon.svg";
import twitter from "../../images/landing/twitter-icon.svg";
import instagram from "../../images/landing/instagram-icon.svg";
import eventIcon from "../../images/landing/calender-icon.svg";
import invitationIcon from "../../images/landing/invitation-icon.svg";
import expenseIcon from "../../images/landing/expences-icon.svg";
import splitImg from "../../images/landing/split-img.png";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const LandingPagePresenter: React.FC = ({}) => {
  var settings = {
    dots: false,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    cssEase: "linear",
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 2000,
    variableWidth: true,
  };
  const [isSticky, setIsSticky] = useState(false);
  const handleContentScroll = (e: any) => {
    const currentScrollTop = e.detail.scrollTop;
    if (currentScrollTop > 0) {
      setIsSticky(true);
    } else {
      setIsSticky(false);
    }
  };
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };
  return (
    <IonPage>
      <IonContent
        onIonScroll={handleContentScroll}
        scrollEvents={true}
      >
        <header className={`header ${isSticky ? "stickyheader" : ""}`}>
          <div className="container header-cnt">
            <a
              className="logo"
              href="#"
            >
              <img src={invitozLogo} />
            </a>
            <nav className="nav">
              <ul>
                <li>
                  <a onClick={() => scrollToSection("home")}>home</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("events")}>Events</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("invitations")}>
                    Invitations
                  </a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("photos")}>Photos</a>
                </li>
                <li>
                  <a onClick={() => scrollToSection("expenses")}>
                    Split Expenses
                  </a>
                </li>
              </ul>
            </nav>
            <a
              href=""
              className="get-app"
            >
              Get started
              <img src={arrow} />
            </a>
          </div>
        </header>
        <section
          className="home-banner"
          id="home"
        >
          <div className="container banner-cnt">
            <div className="banner-text">
              <h1>Your Ultimate AI Event Companion</h1>
              <p>
                Say goodbye to event stress with Invitoz. This AI-powered
                assistant simplifies invitations, RSVPs, communication, memory
                sharing, and expense tracking. Plan smarter, celebrate better,
                and make every event extraordinary.
              </p>
            </div>
            <div className="banner-img">
              <figure>
                <img src={bannerImage as unknown as string} />
              </figure>
            </div>
          </div>
        </section>
        <section
          className="events-sec"
          id="events"
        >
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
                  <img src={eventsImg_1 as unknown as string} />
                </figure>
              </div>
              <div className="event-blocks">
                <p>
                  Customize essential details like date, location, and theme,
                  and enjoy close integration with invitations to streamline the
                  process from the start.
                </p>
                <figure>
                  <img src={eventsImg_2 as unknown as string} />
                </figure>
              </div>
              <div className="event-blocks">
                <p>
                  Track RSVPs effortlessly and keep everyone in sync, making
                  planning simple and efficient.
                </p>
                <figure>
                  <img src={eventsImg_3 as unknown as string} />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section
          className="invitations-sec"
          id="invitations"
        >
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
                  <img src={InvitationImg1 as unknown as string} />
                </figure>
              </div>
              <div className="invitaion-blocks pallet-2">
                <figure>
                  <img src={InvitationImg2 as unknown as string} />
                </figure>
              </div>
              <div className="invitaion-blocks pallet-3">
                <figure>
                  <img src={InvitationImg3 as unknown as string} />
                </figure>
              </div>
              <div className="invitaion-blocks pallet-4">
                <figure>
                  <img src={InvitationImg4 as unknown as string} />
                </figure>
              </div>
            </div>
          </div>
        </section>

        <section
          className="media-sec"
          id="photos"
        >
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
          <Slider {...settings}>
            <div className="slide">
              <img src={photoSec1 as unknown as string} />
            </div>
            <div className="slide">
              <img src={photoSec2 as unknown as string} />
            </div>
            <div className="slide">
              <img src={photoSec3 as unknown as string} />
            </div>
            <div className="slide">
              <img src={photoSec4 as unknown as string} />
            </div>
            <div className="slide">
              <img src={photoSec5 as unknown as string} />
            </div>
            <div className="slide">
              <img src={photoSec6 as unknown as string} />
            </div>
          </Slider>
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

        <section
          className="split-sec"
          id="expenses"
        >
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
                    <img src={splitImg as unknown as string} />
                  </figure>
                </TabPanel>
                <TabPanel>
                  <figure>
                    <img src={splitImg as unknown as string} />
                  </figure>
                </TabPanel>
                <TabPanel>
                  <figure>
                    <img src={splitImg as unknown as string} />
                  </figure>
                </TabPanel>
              </div>
            </Tabs>
          </div>
        </section>
        <section className="faq-sec">
          <div className="container faq-cnt">
            <h2>Frequently asked questions</h2>

            <IonGrid>
              <IonRow class="ion-justify-content-center">
                <IonCol
                  size="12"
                  size-md="10"
                >
                  <IonAccordionGroup className="landing-accordian">
                    <IonAccordion
                      value="faq-1"
                      no-lines
                    >
                      <div
                        slot="header"
                        className="accordian-lablel"
                      >
                        What is Invitoz?
                      </div>
                      <div
                        className="accordian-content"
                        slot="content"
                      >
                        Invitoz is an AI-powered event management assistant
                        designed to simplify every aspect of event planning and
                        coordination. From creating beautiful invitations and
                        managing RSVPs to vendor suggestions, communication,
                        photo sharing, and expense tracking, Invitoz is your
                        ultimate all-in-one event companion.
                      </div>
                    </IonAccordion>
                    <IonAccordion value="faq-2">
                      <div
                        slot="header"
                        className="accordian-lablel"
                      >
                        What types of events can I use Invitoz for?
                      </div>
                      <div
                        className="accordian-content"
                        slot="content"
                      >
                        <p>
                          Invitoz is versatile and can be used for various
                          events, including:
                        </p>
                        <ul>
                          <li>Birthdays</li>
                          <li>Baby showers</li>
                          <li>Get togathers</li>
                          <li>House warmings</li>
                          <li>Anniversaries</li>
                          <li>Corporate events</li>
                          <li>And more!</li>
                        </ul>
                      </div>
                    </IonAccordion>
                    <IonAccordion value="faq-3">
                      <div
                        slot="header"
                        className="accordian-lablel"
                      >
                        Can I use Invitoz for co-hosted events?
                      </div>
                      <div
                        className="accordian-content"
                        slot="content"
                      >
                        Yes! Invitoz is perfect for co-hosted events, allowing
                        multiple organizers to collaborate on invitations,
                        RSVPs, expenses, and event planning seamlessly.
                      </div>
                    </IonAccordion>
                    <IonAccordion value="faq-4">
                      <div
                        slot="header"
                        className="accordian-lablel"
                      >
                        Can I share event photos and videos using Invitoz?
                      </div>
                      <div
                        className="accordian-content"
                        slot="content"
                      >
                        Yes! Invitoz allows you to upload and share event photos
                        and videos with your guests, creating a shared gallery
                        of memories that everyone can enjoy.
                      </div>
                    </IonAccordion>
                    <IonAccordion value="faq-5">
                      <div
                        slot="header"
                        className="accordian-lablel"
                      >
                        How long are photos and videos retained in Invitoz?
                      </div>
                      <div
                        className="accordian-content"
                        slot="content"
                      >
                        Photos and videos are retained for up to 1 month by
                        default. You will receive reminders before any content
                        is archived or deleted, with the option to download or
                        export to your favourite image storage.
                      </div>
                    </IonAccordion>
                    <IonAccordion value="faq-6">
                      <div
                        slot="header"
                        className="accordian-lablel"
                      >
                        Is there a storage limit for photos and videos?
                      </div>
                      <div
                        className="accordian-content"
                        slot="content"
                      >
                        Yes, Limited to 10 GB of photo and video storage per
                        event.
                      </div>
                    </IonAccordion>
                    <IonAccordion value="faq-7">
                      <div
                        slot="header"
                        className="accordian-lablel"
                      >
                        Can I export photos and videos from Invitoz?
                      </div>
                      <div
                        className="accordian-content"
                        slot="content"
                      >
                        Absolutely! Invitoz provides an easy export feature to
                        download all your photos and videos to your device. You
                        can export individual files or entire event galleries in
                        one go.
                      </div>
                    </IonAccordion>
                    <IonAccordion value="faq-8">
                      <div
                        slot="header"
                        className="accordian-lablel"
                      >
                        Does Invitoz provide vendor suggestions?
                      </div>
                      <div
                        className="accordian-content"
                        slot="content"
                      >
                        Yes, Invitoz uses AI to offer tailored vendor
                        suggestions based on your event type, location, and
                        preferences. Whether you need catering, a venue, or a
                        photographer, Invitoz helps you find the right fit.
                      </div>
                    </IonAccordion>
                    <IonAccordion value="faq-9">
                      <div
                        slot="header"
                        className="accordian-lablel"
                      >
                        How secure is event data, photo and video storage on
                        Invitoz?
                      </div>
                      <div
                        className="accordian-content"
                        slot="content"
                      >
                        Invitoz prioritizes your privacy and data security. All
                        your information, from guest lists to financial details,
                        are stored securely and only visible to you. Invitoz
                        uses encrypted servers to store all event details,
                        media, ensuring your memories are safe and accessible
                        only to authorized users.
                      </div>
                    </IonAccordion>
                    <IonAccordion value="faq-10">
                      <div
                        slot="header"
                        className="accordian-lablel"
                      >
                        How does expense tracking work with co-hosts?
                      </div>
                      <div
                        className="accordian-content"
                        slot="content"
                      >
                        Invitoz provides a collaborative expense tracking tool
                        that helps you and your co-hosts monitor event costs,
                        split expenses, and ensure transparency throughout the
                        planning process.
                      </div>
                    </IonAccordion>
                  </IonAccordionGroup>
                </IonCol>
              </IonRow>
              <IonRow class="ion-justify-content-center">
                <IonCol
                  size="12"
                  size-md="10"
                >
                  <div className="container faq-cnt">
                    <div className="banner-text">
                      <p>
                        If you have more questions or need support, feel free to
                        contact us directly through the app or at
                        support@invitoz.com.
                      </p>
                    </div>
                  </div>
                </IonCol>
              </IonRow>
            </IonGrid>
          </div>
        </section>
        <footer className="footer-sec">
          <a
            href="#"
            className="logo"
          >
            <img src={invitozLogoLight} />
          </a>
          <h3>Your Ultimate AI Event Companion</h3>
          <div className="copy-cnt">
            <p>
              &copy; 2024 Innovedika Inc. All rights reserved.{" "}
              <a href="#">Privacy Policy</a>
            </p>
            <div className="social-list">
              <ul>
                <li>
                  <a href="#">
                    <img
                      src={facebook}
                      alt="facebook"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={instagram}
                      alt="instagram"
                    />
                  </a>
                </li>
                <li>
                  <a href="#">
                    <img
                      src={twitter}
                      alt="twitter"
                    />
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
