import React, { useState } from "react";
import './CreateNewEventPresenter.scss';
import {
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonInput,
  IonList,
  IonItem,
  IonLabel,
  IonContent,
  IonIcon, 
  IonTextarea,
  IonSelect,
  IonSelectOption,
  IonRadioGroup,
  IonRadio
} from "@ionic/react";
import {
  CreateNewEventProps,
  LocationInfo,
  DraftEvent,
} from "@goflock/types/src/index"; // Adjust the import based on your file structure
// import { checkmarkCircle, ellipseOutline } from 'ionicons/icons';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { IonDatetime, IonDatetimeButton, IonModal } from '@ionic/react';
import Success from '../../images/celebration.svg';



// import Header from '../Header/Header';

const CreateNewEvent: React.FC<CreateNewEventProps> = ({
  searchLocation,
  createEvent,
  goToEvent,
}) => {
  const [locationQuery, setLocationQuery] = useState<string>("");
  const [locationResults, setLocationResults] = useState<LocationInfo[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<LocationInfo | null>(
    null
  );
  const [eventName, setEventName] = useState<string>("");
  const [isCreating, setIsCreating] = useState<boolean>(false);

  // Handle location search
  const handleSearchLocation = async () => {
    if (locationQuery.trim() === "") return;
    const results = await searchLocation(locationQuery);
    setLocationResults(results);
  };

  // Handle creating an event
  const handleCreateEvent = async () => {
    if (!selectedLocation || eventName.trim() === "") return;

    setIsCreating(true);
    const draftEvent: DraftEvent = {
      name: eventName,
      type: "birthday",
    };

    try {
      await createEvent(draftEvent);
      goToEvent("id");
    } catch (error) {
      console.error("Error creating event:", error);
    } finally {
      setIsCreating(false);
    }
  };
////////////////
const [currentStep, setCurrentStep] = useState(1); // Track the current step
  const totalSteps = 3; // Define the total number of steps

  // Function to go to the next step
  const nextStep = () => {
    if (currentStep < totalSteps) setCurrentStep((prev) => prev + 1);
  };

  // Function to go to the previous step
  const prevStep = () => {
    if (currentStep > 1) setCurrentStep((prev) => prev - 1);
  };

  // Render steps dynamically based on the total number of steps
  const renderSteps = () => {
    return Array.from({ length: totalSteps }, (_, index) => (
      <div
        key={index}
        className={`step ${index + 1 <= currentStep ? 'active' : ''}`}
      > 
      </div>
    ));
  };

  const getStepClass = (step) => {
    if (step < currentStep) return 'prev';
    if (step === currentStep) return 'current';
    if (step > currentStep) return 'next';
    return '';
  };

  const [startDate, setStartDate] = useState(new Date());

  return (
    <>
    {/* <IonCard>
      <IonCardHeader>
        <IonCardTitle>Create a New Event</IonCardTitle>
      </IonCardHeader>
      
    </IonCard> */}

    <IonContent className="create_event">
    {/* <Header /> */}
      {/* Stepper display */}
      <div className="stepper-container">{renderSteps()}</div>

      <div className="stepper-content">
  
        {/* Step content with prev, current, and next classes */}
        <div className={`step-content ${getStepClass(1)}`}>
          <div className="form-container">
            <IonCardContent>
              
              <div className="form-group">
                <IonInput
                  value={eventName}
                  label="Event Name*"
                  labelPlacement="stacked"
                  placeholder="Event Name"
                  onIonChange={(e) => setEventName(e.detail.value!)} 
                /> 
              </div>
              <div className="form-group">
                <label className="form-label">Event Type*</label>
                <IonSelect aria-label="Event" interface="action-sheet" placeholder="Select Type">
                  <IonSelectOption value="Birthday">Birthday</IonSelectOption>
                  <IonSelectOption value="Vacations">Vacations</IonSelectOption>
                  <IonSelectOption value="GetTogether">Get together</IonSelectOption>
                  <IonSelectOption value="Other">Other</IonSelectOption>
                </IonSelect>
              </div>
              <div className="form-group">
                <IonTextarea rows={3} label="Description*" labelPlacement="stacked" placeholder="Enter text"></IonTextarea>
              </div>
              <div className="form-group">
                <IonInput
                  value={locationQuery}
                  label="Event Name*"
                  labelPlacement="stacked"
                  placeholder="Search for a location"
                  onIonChange={(e) => setLocationQuery(e.detail.value!)}
                /> 
              </div>
            
              {/* <IonButton
                onClick={handleSearchLocation}
                expand="block"
              >
                Search Location
              </IonButton> */}

              {locationResults.length > 0 && (
                <IonList>
                  {locationResults.map((location) => (
                    <IonItem
                      key={""}
                      button
                      onClick={() => setSelectedLocation(location)}
                    >
                      <IonLabel>{location.name}</IonLabel>
                    </IonItem>
                  ))}
                </IonList>
              )}

              {selectedLocation && (
                <div>
                  <p>Selected Location: {selectedLocation.name}</p>
                </div>
              )} 
            </IonCardContent>
          </div>
        </div>
        <div className={`step-content ${getStepClass(2)}`}>
        <div className="form-container">
        <IonCardContent>
          <div className="form-group">
            <label className="form-label">Start Date*</label>
            {/* <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} /> */}
            <IonDatetimeButton className="date" datetime="startDate"></IonDatetimeButton>
            <IonModal keepContentsMounted={true}>
              <IonDatetime
                id="startDate"
                presentation="date"
                value="2023-11-02T01:22:00"
                formatOptions={{
                  date: {
                    weekday: 'short',
                    month: 'long',
                    day: '2-digit',
                  }, 
                }}
              ></IonDatetime>
            </IonModal>
          </div>
          <div className="form-group">
            <label className="form-label">End Date*</label>
            {/* <DatePicker showIcon selected={startDate} onChange={(date) => setStartDate(date)} /> */}
            <IonDatetimeButton className="date" datetime="endDate"></IonDatetimeButton>
            <IonModal keepContentsMounted={true}>
              <IonDatetime
                id="endDate"
                presentation="date"
                value="2023-11-02T01:22:00"
                formatOptions={{
                  date: {
                    weekday: 'short',
                    month: 'long',
                    day: '2-digit',
                  }, 
                }}
              ></IonDatetime>
            </IonModal>
          </div>
          <div className="form-group">
          <label className="form-label">Start Time*</label>
            <IonDatetimeButton className="time" datetime="StartTime"></IonDatetimeButton> 
            <IonModal keepContentsMounted={true}>
              <IonDatetime
                presentation="time"  
                id="StartTime" 
                value="01:22:00"
                formatOptions={{ 
                  time: {
                    hour: '2-digit',
                    minute: '2-digit',
                  },
                }}
              ></IonDatetime>
            </IonModal>
          </div>
          <div className="form-group">
            <label className="form-label">End Time*</label>
            <IonDatetimeButton className="time" datetime="endTime"></IonDatetimeButton> 
            <IonModal keepContentsMounted={true}>
              <IonDatetime
                presentation="time"  
                id="endTime" 
                value="01:22:00"
                formatOptions={{ 
                  time: {
                    hour: '2-digit',
                    minute: '2-digit',
                  },
                }}
              ></IonDatetime>
            </IonModal>
          </div>
               

          {/* <IonButton
            onClick={handleCreateEvent}
            expand="block"
            disabled={isCreating || !selectedLocation || !eventName}
          >
            {isCreating ? "Creating Event..." : "Create Event"}
          </IonButton> */}
        </IonCardContent>
        </div>
        </div>
          <div className={`step-content ${getStepClass(3)}`}>
            <div className="form-container">
              <IonCardContent>
              <div className="form-group">
                <IonRadioGroup allowEmptySelection={true} value="turtles" >
                    <IonRadio value="Private Event" justify="space-between">
                      <span>
                        <svg width="48" height="48" viewBox="0 0 56 55" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <g filter="url(#filter0_d_5175_11702)">
                            <rect x="4" y="2" width="48" height="48" rx="24" fill="#F7F7F7" shape-rendering="crispEdges" />
                            <rect x="4.5" y="2.5" width="47" height="47" rx="23.5" stroke="#E4E4E7" shape-rendering="crispEdges" />
                            <g clip-path="url(#clip0_5175_11702)">
                              <path d="M36.2886 24.7597C36.2842 23.5652 35.2933 22.6 34.0963 22.5711H33.2939V22.33C33.2939 21.4393 33.2939 20.5485 33.2939 19.6578C33.2876 16.6073 31.1798 14.1368 28.1669 13.6445C25.0268 13.134 21.8836 15.3984 21.3844 18.5366C21.325 18.9306 21.2938 19.3283 21.291 19.7267C21.2779 20.6663 21.2867 21.6009 21.2867 22.5674H20.644C19.2509 22.5674 18.2831 23.5326 18.2831 24.922C18.2831 28.337 18.2831 31.7519 18.2831 35.1665C18.2831 36.4193 18.9314 37.243 20.1498 37.5374C20.1704 37.5463 20.1895 37.5586 20.2061 37.5737H34.3712C34.5178 37.5274 34.6663 37.4867 34.8097 37.434C35.681 37.1208 36.2861 36.3065 36.2886 35.3776C36.2978 31.839 36.2978 28.2997 36.2886 24.7597ZM23.2936 19.6403C23.3043 17.5782 24.681 15.9665 26.7168 15.6314C28.797 15.2863 30.9098 16.8034 31.2268 18.8924C31.2951 19.3446 31.2844 19.8107 31.2894 20.2704C31.2988 21.0327 31.2894 21.795 31.2894 22.573H23.2924V22.0093C23.293 21.2188 23.2898 20.4295 23.2936 19.6403ZM28.4926 30.146C28.3235 30.2713 28.2778 30.3966 28.2796 30.5908C28.2878 31.2798 28.2934 31.9688 28.2746 32.6528C28.2596 33.1734 27.7986 33.5818 27.2774 33.5755C27.0287 33.5735 26.7898 33.478 26.6081 33.308C26.4265 33.138 26.3155 32.9059 26.2971 32.6578C26.2827 32.4167 26.2915 32.1743 26.2902 31.9319C26.2902 31.7991 26.2902 31.6663 26.2902 31.5335C26.2902 31.2053 26.2815 30.877 26.2934 30.5494C26.3018 30.4741 26.2886 30.3979 26.2553 30.3298C26.2221 30.2617 26.1701 30.2045 26.1055 30.1648C25.7786 29.932 25.5317 29.6039 25.3984 29.2254C25.2651 28.8469 25.2519 28.4364 25.3607 28.0501C25.4706 27.6465 25.7043 27.2874 26.029 27.0236C26.3536 26.7597 26.7528 26.6043 27.1705 26.5792C27.5881 26.5541 28.003 26.6605 28.357 26.8836C28.7109 27.1067 28.9859 27.4352 29.1434 27.8228C29.3112 28.2267 29.3385 28.6752 29.2209 29.0965C29.1034 29.5178 28.8478 29.8874 28.4951 30.146H28.4926Z" fill="#18181B" />
                            </g>
                          </g> 
                        </svg>

                      </span>
                      <p>
                        <strong>Private Event</strong>
                        Only users with phone numbers invited can access. This is highly secure. You can change this option later.
                      </p>

                    </IonRadio>

                    <IonRadio value="Public Event" justify="space-between">
                      <span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="48" height="48" viewBox="0 0 56 55" fill="none">
                          <g filter="url(#filter0_d_5175_11714)">
                            <rect x="4" y="2" width="48" height="48" rx="24" fill="#F7F7F7" shape-rendering="crispEdges" />
                            <rect x="4.5" y="2.5" width="47" height="47" rx="23.5" stroke="#E4E4E7" shape-rendering="crispEdges" />
                            <path d="M15.6238 25.2784C15.7 24.7259 15.7572 24.1544 15.862 23.602C16.1049 22.3247 16.5622 21.0977 17.2145 19.973C17.2326 19.9414 17.2573 19.914 17.2868 19.8927C17.3164 19.8713 17.3502 19.8565 17.3859 19.8492C17.605 19.7825 17.8241 19.7444 18.1098 19.6777L17.2812 20.3445C17.6111 20.6361 18.0318 20.8043 18.4718 20.8207C19.3089 20.7859 20.141 20.6743 20.9578 20.4873C21.0501 20.4526 21.1523 20.455 21.2429 20.4941C21.3335 20.5332 21.4055 20.6059 21.4435 20.6969C21.7483 21.2494 22.1007 21.7828 22.396 22.3257C22.4519 22.4353 22.4843 22.5553 22.4912 22.6781C22.4912 23.1829 22.4912 23.6973 22.4912 24.2116C22.4926 24.3247 22.5292 24.4346 22.596 24.5259L24.0629 26.5452C24.1014 26.6155 24.1645 26.6689 24.2402 26.6953C24.3158 26.7217 24.3986 26.7191 24.4724 26.688V26.0023H24.5296C24.6534 26.269 24.8058 26.5261 24.9106 26.8023C24.954 26.973 25.0519 27.1249 25.1894 27.2349C25.3269 27.3449 25.4966 27.407 25.6726 27.412C26.0999 27.4835 26.5228 27.5788 26.9394 27.6977C27.0604 27.7257 27.172 27.7848 27.2632 27.8691C27.7014 28.3073 28.0823 28.8216 28.8443 28.8216C28.6748 29.2189 28.4841 29.6069 28.2729 29.9837C28.1547 30.1382 28.0907 30.3273 28.0907 30.5218C28.0907 30.7164 28.1547 30.9055 28.2729 31.06C28.8006 31.9429 29.1742 32.9092 29.3777 33.9175C29.3919 34.0026 29.3919 34.0895 29.3777 34.1746C29.273 34.5842 29.2063 35.0128 29.0635 35.4129C28.8827 36.0312 28.8436 36.6824 28.9492 37.3179C28.9492 37.4226 28.9492 37.5369 28.9492 37.6893C28.4443 37.6893 27.9967 37.7751 27.4633 37.7751C24.7132 37.7759 22.0468 36.8291 19.913 35.0943C17.7792 33.3595 16.3081 30.9425 15.7476 28.2501C15.6523 27.7453 15.6143 27.231 15.5476 26.7262C15.5476 26.65 15.5476 26.5737 15.5 26.5071L15.6238 25.2784Z" fill="#18181B" />
                            <path d="M28.3205 13.9628L29.6254 14.1438C30.6437 14.3318 31.6331 14.652 32.5686 15.0963V15.1725C32.3294 15.1857 32.0896 15.1697 31.8543 15.1248C31.61 15.0371 31.3457 15.0209 31.0926 15.0783C30.8395 15.1357 30.6081 15.2642 30.4255 15.4487C30.1969 15.6582 29.9874 15.8868 29.7588 16.0964C29.6867 16.1615 29.5974 16.2045 29.5016 16.2202C28.911 16.2869 28.311 16.3631 27.7204 16.3916C27.4014 16.383 27.0833 16.3544 26.7679 16.3059C26.6783 16.3101 26.5935 16.3475 26.5298 16.4107C26.3774 16.6202 26.2536 16.8584 26.0917 17.0775C26.03 17.1562 25.9421 17.2102 25.844 17.2298C25.3409 17.2805 24.8352 17.3028 24.3296 17.2965C24.0039 17.2595 23.684 17.1828 23.3771 17.0679C23.3094 17.0328 23.2343 17.0146 23.158 17.0146C23.0818 17.0146 23.0067 17.0328 22.939 17.0679C22.4137 17.4209 21.7998 17.6189 21.1673 17.6394C20.3013 17.7313 19.4483 17.9198 18.6241 18.2014L18.4051 18.2585L18.3575 18.2014C18.8052 17.7632 19.2242 17.306 19.6909 16.8869C21.3576 15.4213 23.4049 14.4571 25.5964 14.1057C25.9964 14.039 26.3965 13.9914 26.7965 13.9437L28.3205 13.9628ZM27.368 15.5534C27.4713 15.6837 27.6092 15.7822 27.7658 15.8378C27.9225 15.8934 28.0915 15.9038 28.2538 15.8678C28.4937 15.8631 28.7316 15.8214 28.9587 15.7439C29.3395 15.4959 29.7052 15.2256 30.054 14.9344L29.3492 14.5248C29.3239 14.5129 29.2962 14.5067 29.2682 14.5067C29.2402 14.5067 29.2126 14.5129 29.1873 14.5248L27.368 15.5534ZM23.6914 15.8678L24.3772 16.2678C24.4204 16.2823 24.4673 16.2823 24.5105 16.2678L26.0726 15.8582C25.9679 15.6677 25.8631 15.5154 25.7869 15.3535C25.7796 15.3254 25.7657 15.2995 25.7464 15.278C25.7271 15.2564 25.7029 15.2399 25.6759 15.2296C25.6488 15.2194 25.6197 15.2157 25.5909 15.219C25.5622 15.2224 25.5346 15.2325 25.5106 15.2486C25.3658 15.3322 25.2016 15.3762 25.0344 15.3762C24.8672 15.3762 24.7029 15.3322 24.5581 15.2486C24.5388 15.2393 24.5177 15.2346 24.4962 15.2346C24.4748 15.2346 24.4537 15.2393 24.4344 15.2486L23.6914 15.8678Z" fill="#18181B" />
                            <path d="M34.6639 20.4303C34.8354 20.154 34.9877 19.935 35.1116 19.7159C35.1422 19.6507 35.1906 19.5956 35.2513 19.5568C35.312 19.518 35.3824 19.4972 35.4545 19.4968L37.0356 19.3635H37.1499C37.5119 19.2968 37.5118 19.2968 37.7119 19.6111C38.6986 21.2054 39.2963 23.0095 39.4564 24.8776C39.6165 26.7456 39.3345 28.6251 38.6334 30.364C37.9323 32.1029 36.8317 33.6523 35.4206 34.8868C34.0095 36.1214 32.3276 37.0064 30.511 37.4703H30.3587C30.4539 37.0608 30.5015 36.6797 30.9301 36.4416C31.4514 36.1338 31.9568 35.8 32.4446 35.4415C32.5455 35.3714 32.6222 35.2715 32.6637 35.1558C32.8161 34.7938 32.9399 34.4129 33.0828 34.0509C33.1465 33.952 33.2271 33.8649 33.3209 33.7937C33.3209 33.7937 33.3209 33.7937 33.3876 33.7937C33.8221 33.7193 34.2241 33.516 34.5417 33.2103C34.8593 32.9046 35.0778 32.5106 35.1688 32.0793C35.4164 31.6221 35.6544 31.1267 35.9021 30.6791C35.5945 30.4813 35.2765 30.3001 34.9496 30.1361C34.1506 29.7493 33.4576 29.1739 32.9303 28.4597C32.8752 28.3818 32.8025 28.318 32.7181 28.2733C32.6338 28.2286 32.54 28.2044 32.4446 28.2026C32.1398 28.2026 31.835 28.0788 31.4921 28.0121C30.9302 27.8978 30.3777 27.755 29.8062 27.6788C29.5508 27.6792 29.2982 27.731 29.0633 27.8311C29.0173 27.8575 28.9665 27.8744 28.9138 27.8805C28.8612 27.8866 28.8078 27.882 28.757 27.8668C28.7062 27.8517 28.6591 27.8263 28.6184 27.7924C28.5777 27.7584 28.5443 27.7165 28.5204 27.6692C28.4177 27.5066 28.2777 27.3708 28.1121 27.273C27.9464 27.1753 27.7599 27.1184 27.5679 27.1072L27.6155 26.2405C27.404 26.1668 27.1725 26.1759 26.9675 26.2661C26.7625 26.3562 26.5993 26.5206 26.5106 26.7263L26.2725 25.7166L27.1107 25.3261C27.1786 25.3029 27.2523 25.3029 27.3202 25.3261L28.006 25.6309C28.0657 25.6629 28.1299 25.6854 28.1965 25.6976C28.6156 25.7642 28.6632 25.6975 28.7585 25.3165C28.798 25.0632 28.9182 24.8293 29.1014 24.6498L29.1871 24.5355C29.8963 23.4769 30.9389 22.6857 32.1493 22.2876C32.2308 22.2689 32.3155 22.2689 32.397 22.2876C32.7208 22.2876 33.0447 22.3638 33.3495 22.4019C33.54 22.0114 33.5305 21.8781 33.2543 21.6019C33.1084 21.4369 32.9525 21.281 32.7876 21.1352C32.2789 20.6996 31.8835 20.1473 31.635 19.5254C31.6212 19.4604 31.5827 19.4032 31.5276 19.3659C31.4726 19.3286 31.4053 19.3141 31.3397 19.3254C30.986 19.3517 30.6322 19.2757 30.3206 19.1063C29.9682 18.9782 29.5994 18.9012 29.2252 18.8777L28.9966 20.135C28.5996 20.0915 28.2075 20.0118 27.8251 19.8969C27.5774 19.7921 27.7012 19.4588 27.6631 19.2206C27.6631 19.2206 27.7774 19.0968 27.8536 19.0682C28.0199 19.008 28.1924 18.9664 28.3679 18.9444C28.4062 18.9457 28.4445 18.9392 28.4802 18.9254C28.516 18.9116 28.5486 18.8908 28.5762 18.8642C28.6037 18.8375 28.6256 18.8056 28.6406 18.7703C28.6555 18.735 28.6632 18.697 28.6632 18.6586C28.7394 18.2776 28.8347 17.9062 28.9299 17.4966C29.2347 17.6205 29.53 17.7252 29.8062 17.8681C29.8633 17.8681 29.8824 18.011 29.8824 18.0967C29.8824 18.4872 29.8824 18.4872 30.2444 18.6396C30.3387 18.6719 30.431 18.7101 30.5206 18.7539C30.7055 18.8629 30.9219 18.9062 31.1345 18.8768C31.3472 18.8474 31.5437 18.747 31.6922 18.592L31.0826 17.9062C30.8483 17.6482 30.5969 17.4064 30.3301 17.1823C30.2144 17.093 30.1312 16.9683 30.0934 16.8271C30.0555 16.686 30.0651 16.5364 30.1205 16.4012C30.6169 16.4609 31.0963 16.6196 31.5302 16.868C32.0727 17.3276 32.4478 17.9539 32.597 18.6491C32.6432 18.8448 32.754 19.0193 32.9114 19.1444C33.2638 19.4492 33.5971 19.7731 33.9496 20.0969C34.2353 20.1731 34.4449 20.2874 34.6639 20.4303Z" fill="#18181B" />
                          </g> 
                        </svg>
                      </span>
                      <p><strong>Public Event</strong>Only users with phone numbers invited can access. This is highly secure. You can change this option later.</p>
                    </IonRadio>
                  </IonRadioGroup>
              </div>
              </IonCardContent>
            </div>
          </div>
      </div>
       {/* Navigation buttons */}
       <div className="actions-container">
        <IonButton className="primary-btn actions" onClick={prevStep} disabled={currentStep === 1}>
          Previous
        </IonButton>
        <IonButton className="primary-btn actions" onClick={nextStep} disabled={currentStep === totalSteps}>
          Next
        </IonButton>
        {currentStep === totalSteps && (
        <IonButton className="primary-btn"
          onClick={handleCreateEvent}
          expand="block"
          //disabled={isCreating || !selectedLocation || !eventName}
        >
          {isCreating ? "Creating Event..." : "Create Event"}
        </IonButton>
        )}
      </div>
    </IonContent>
    <div className="action_screen" style={{'display':'none'}} >
      <div className="action_screen_cnt"> 
        <img alt="Successfully Created Event" src={Success} />
        <h2>Successfully Created Event</h2>
        <p>
          Event Created! 🎉 Now, let's make it unforgettable. Invite friends and let the good times roll!
        </p> 
      </div>
      <div className="action_screen_buttons">
        <IonButton className="primary-btn">
          Go To Event Details
        </IonButton>
        <IonButton className="secondary-btn">
          Invite Friends To The Event
        </IonButton>
      </div>
    </div>


    </>
  );
};

export default CreateNewEvent;
