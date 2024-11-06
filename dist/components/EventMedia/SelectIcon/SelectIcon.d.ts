import { default as React } from 'react';
type SelectIconProps = {
    selected: boolean | undefined;
    onClick: React.MouseEventHandler;
    color?: string;
    size?: string | number;
};
export default function SelectIcon({ selected, onClick, color, size, }: SelectIconProps): import("react/jsx-runtime").JSX.Element;
export {};
