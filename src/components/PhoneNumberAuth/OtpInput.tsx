// OtpInput.tsx
import React, { useRef } from 'react';
import { IonInput } from '@ionic/react';
//import './OtpInput.scss';

interface OtpInputProps {
  length?: number;
  onChange?: (value: string) => void;
}

const OtpInput: React.FC<OtpInputProps> = ({ length = 4, onChange }) => {
  const inputsRef = useRef<(HTMLIonInputElement | null)[]>([]);

  // Focus the next input on key entry
  const handleInputChange = (
    e: CustomEvent,
    index: number
  ) => {
    const input = e.target as HTMLInputElement;
    const value = input.value;
    if (value.length === 1 && index < length - 1) {
      inputsRef.current[index + 1]?.setFocus();
    }
    if (value.length === 0 && index > 0) {
      inputsRef.current[index - 1]?.setFocus();
    }
    handleOtpChange();
  };

  // Collect all input values and pass to the parent component
  const handleOtpChange = () => {
    const otpValue = inputsRef.current.map(input => input?.value || '').join('');
    if (onChange) {
      onChange(otpValue);
    }
  };

  // Focus on the previous input on backspace
  const handleKeyDown = (
    e: React.KeyboardEvent<HTMLIonInputElement>,
    index: number
  ) => {
    if (e.key === 'Backspace' && !inputsRef.current[index]?.value && index > 0) {
      inputsRef.current[index - 1]?.setFocus();
    }
  };

  return (
    <div className='otp_section'>
        <div className="otp-input-container">
        {Array.from({ length }).map((_, index) => (
            <IonInput
            key={index}
            type="tel"
            maxlength={1}
            ref={(el) => (inputsRef.current[index] = el)}
            className="otp-input"
            onIonInput={(e) => handleInputChange(e, index)}
            onKeyDown={(e) => handleKeyDown(e, index)}
            inputmode="numeric"
            />
        ))}      
        </div>
        {/* <p>Didn't receive the code? <a>Resend</a></p> */}
    </div>
  );
};

export default OtpInput;
