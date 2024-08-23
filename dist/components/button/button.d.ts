import { default as React } from 'react';
export interface ButtonProps {
    label: string;
    onClick: () => void;
    primary?: boolean;
}
declare const Button: React.FC<ButtonProps>;
export default Button;
