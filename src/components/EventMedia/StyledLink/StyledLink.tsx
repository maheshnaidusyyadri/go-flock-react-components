import type React from "react";
import clsx from "clsx";

// @ts-ignore
import classes from "./StyledLink.module.css";

export default function StyledLink({
  href,
  className,
  isEditView,
  ...rest
}: React.ComponentProps<"a"> & { isEditView?: boolean }) {
  return (
    <a
      href={isEditView ? undefined : href} // Set href to undefined if isEditView is true
      className={clsx(classes.link, className)}
      {...rest}
    />
  );
}
