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
