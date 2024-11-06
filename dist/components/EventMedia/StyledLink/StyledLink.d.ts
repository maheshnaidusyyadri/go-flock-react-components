import { default as React } from 'react';
export default function StyledLink({ href, className, isEditView, ...rest }: React.ComponentProps<"a"> & {
    isEditView?: boolean;
}): import("react/jsx-runtime").JSX.Element;
