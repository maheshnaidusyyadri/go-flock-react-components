import React, { useEffect, useState } from "react";
import {
  IonLabel,
  IonDatetime,
  IonDatetimeButton,
  IonModal,
  IonText,
  IonImg,
  IonCol,
  IonRow,
} from "@ionic/react";
import { Controller } from "react-hook-form";
import { useForm } from "react-hook-form";
import calanderIcon from "../../images/calendar.svg";
import clockIcon from "../../images/Clock.svg";

interface CustomStartDateProps {
  control: any;
  fieldName: string;
  disabled?: boolean;
  minDate?: string;
  isRequired?: boolean;
  errorText?: string;
  errors: any;
  label: any;
  defaultValue?: any;
  onDateChange?: (e: CustomEvent) => void; // Optional input change handler;
  className: any;
  formatOptions?: any;
  presentation: any;
  placeHolder: string;
  startTime?: string;
  onIonFocus?: (e: CustomEvent) => void;
}

const CustomDateTime: React.FC<CustomStartDateProps> = ({
  control,
  fieldName,
  minDate,
  isRequired = false, // By default, not required
  errorText,
  errors,
  label,
  defaultValue = "",
  onDateChange,
  onIonFocus,
  className,
  formatOptions,
  presentation,
  placeHolder = "Select",
  disabled,
}) => {
  const { reset, setValue } = useForm();
  const [isModalOpen, setModalOpen] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");

  useEffect(() => {
    if (defaultValue) {
      //console.log('defaultValue',defaultValue)
      setSelectedDate(defaultValue);
      setValue(fieldName, defaultValue);
      reset();
    }
  }, []);

  return (
    <IonRow>
      <IonCol className="form-group ion-padding-bottom">
        {label && (
          <IonLabel className="form-label">
            {isRequired ? label + "*" : label}
          </IonLabel>
        )}
        <IonImg
          className="picker_icon"
          src={
            presentation == "date"
              ? calanderIcon.src || (calanderIcon.value as unknown as string)
              : clockIcon.src || (clockIcon.value as unknown as string)
          }
        />
        <Controller
          defaultValue={defaultValue}
          name={fieldName}
          control={control}
          rules={{ required: isRequired }}
          render={({ field: { onChange, value } }) => (
            <>
              <IonDatetimeButton
                className={className ? className : "ion-datetime-button date"}
                datetime={fieldName}
                onClick={() =>
                  disabled ? setModalOpen(false) : setModalOpen(true)
                }
              />
              {!value && (
                <IonLabel className="form-placeholder">{placeHolder}</IonLabel>
              )}
              {/* Modal with datetime picker */}
              <IonModal
                keepContentsMounted={true}
                isOpen={isModalOpen}
                onDidDismiss={() => setModalOpen(false)}
              >
                <IonDatetime
                  value={value || selectedDate}
                  //max={minDate}
                  min={minDate}
                  id={fieldName}
                  presentation={presentation}
                  showDefaultButtons={true}
                  onIonChange={(e: any) => {
                    const newSelectedDate = e.detail.value;
                    onChange(newSelectedDate);
                    setModalOpen(false);
                    setSelectedDate(newSelectedDate);

                    if (onDateChange && newSelectedDate) {
                      onDateChange(newSelectedDate);
                    } else {
                      if (onIonFocus && !newSelectedDate) {
                        onIonFocus(newSelectedDate);
                      }
                    }
                  }}
                  formatOptions={formatOptions}
                  disabled={disabled}
                />
              </IonModal>
              {errors?.[fieldName] &&
                errors?.[fieldName].type &&
                errors?.[fieldName].type === "required" && (
                  <IonText
                    color="danger"
                    className="error"
                    style={{ fontSize: 12 }}
                  >
                    {"* " + errorText + " is required"}
                  </IonText>
                )}
            </>
          )}
        />
      </IonCol>
    </IonRow>
  );
};

export default CustomDateTime;
