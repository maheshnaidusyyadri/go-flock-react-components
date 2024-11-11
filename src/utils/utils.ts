export const getDisplayName = (name: string): string => {
  const nameParts = name.trim().split(" ");
  if (nameParts.length > 1) {
    return (nameParts[0][0] + nameParts[1][0]).toUpperCase();
  } else {
    return name.slice(0, 2).toUpperCase();
  }
};
export const getDisplayNamewithchr = (name: string): string => {
  const nameParts = name.trim().split(/[\s&]+/);
  if (nameParts.length > 1) {
    return (nameParts[0][0] + nameParts[1][0]).toUpperCase();
  } else {
    return name.slice(0, 2).toUpperCase();
  }
};
// export const formatTime = (dateString: any) => {
//   const date = new Date(dateString);
//   return new Intl.DateTimeFormat("en-US", {
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: true,
//     timeZone: "UTC", // Specifies that we want UTC time
//   }).format(date);
// };
export const formatTime = (dateString: string) => {
  const date = new Date(dateString);
  let hours = date.getUTCHours();
  const minutes = date.getUTCMinutes().toString().padStart(2, "0");
  const seconds = date.getUTCSeconds().toString().padStart(2, "0");
  const period = hours >= 12 ? "PM" : "AM";
  hours = hours % 12 || 12;
  return `${hours.toString().padStart(2, "0")}:${minutes}:${seconds} ${period}`;
};
