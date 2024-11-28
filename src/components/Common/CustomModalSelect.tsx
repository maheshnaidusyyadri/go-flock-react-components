import React, { useState } from "react";
import ArrowIcon from "../../images/icons/DownArrow.svg";

import {
  IonLabel,
  IonGrid,
  IonRow,
  IonCol,
  IonThumbnail,
  IonImg,
  IonText,
  IonInput,
  IonModal,
  IonContent,
  IonIcon,
} from "@ionic/react";
import {
  Controller,
  FieldErrors,
  Control,
  UseFormRegister,
  UseFormSetValue,
  UseFormClearErrors,
} from "react-hook-form";
import SettingsCircle from "./Icons/SettingsCircle";

interface CustomSelectProps {
  label?: string;
  placeholder?: string;
  fieldName: string;
  options: Array<any>;
  isRequired?: boolean;
  errors: FieldErrors;
  errorText?: string;
  control: Control<any>;
  defaultValue?: string;
  register?: UseFormRegister<any>;
  setValue: UseFormSetValue<any>;
  clearErrors: UseFormClearErrors<any>;
  onChangeSelect?: (e: CustomEvent | string) => void;
  filterApply?: boolean;
}

const CustomModalSelect: React.FC<CustomSelectProps> = ({
  label,
  placeholder,
  fieldName,
  isRequired = false,
  errors,
  errorText,
  control,
  defaultValue = "",
  setValue,
  options,
  clearErrors,
  onChangeSelect,
  filterApply = false,
}) => {
  const [showModal, setShowModal] = useState(false);
  const [selectedValue, setSelectedValue] = useState<string>(defaultValue);
  const handleSelectEvent = (event: {
    label: string;
    value: string;
    type: string;
  }) => {
    setSelectedValue(event.label);
    setValue(fieldName, event.value);
    clearErrors(fieldName);
    setShowModal(false);
    if (onChangeSelect) {
      onChangeSelect(filterApply ? event.type : event.value);
    }
  };

  return (
    <>
      {label && (
        <IonLabel className="form-label" onClick={() => setShowModal(true)}>
          {isRequired ? `${label}*` : label}
        </IonLabel>
      )}
      <IonGrid
        onClick={() => setShowModal(true)}
        className="ion-no-margin ion-no-padding relative"
      >
        <Controller
          name={fieldName}
          control={control}
          rules={{ required: isRequired }}
          defaultValue={defaultValue}
          render={({ field }) => (
            <IonInput
              value={selectedValue || field.value}
              placeholder={placeholder || "Select an option"}
              readonly
              onIonChange={(e) => {
                setSelectedValue(e.detail.value || "");
                field.onChange(e.detail.value);
              }}
            />
          )}
        />
        <IonIcon className="placeholder-icon" src={ArrowIcon} />
      </IonGrid>
      <IonModal
        isOpen={showModal}
        initialBreakpoint={0.6}
        breakpoints={[0, 0.6, 0.75]}
        onDidDismiss={() => setShowModal(false)}
        className="action-moadal ion-padding-top"
      >
        <IonContent className="ion-padding ">
          <IonGrid className="ion-no-margin ion-no-padding">
            <IonRow>
              <IonCol className="actions-head ion-padding-bottom">
                <SettingsCircle />
                <h3 className="ion-text-center action-title">Event type</h3>
                <p className="ion-text-center action-subtitle">
                  Select event type
                </p>
              </IonCol>
            </IonRow>
            <IonRow className="action-grid">
              {options.map((event, index) => (
                <IonCol
                  key={index}
                  size="4"
                  className={`ion-col ion-text-center ${
                    selectedValue === event.label ? "selected" : ""
                  }`}
                  onClick={() => handleSelectEvent(event)}
                >
                  <IonThumbnail className="icon-thumb">
                    <IonImg src={event.icon} alt={event.label} />
                  </IonThumbnail>
                  <IonText className="card-label">{event.label}</IonText>
                </IonCol>
              ))}
            </IonRow>
          </IonGrid>
        </IonContent>
      </IonModal>
      {/* Display error message */}
      {errors?.[fieldName]?.type === "required" && (
        <IonText class="error" color="danger" style={{ fontSize: 12 }}>
          {"* " + errorText + " is required"}
        </IonText>
      )}
    </>
  );
};

export default CustomModalSelect;
