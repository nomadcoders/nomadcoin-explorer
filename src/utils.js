export const makeDateSexy = seconds => {
  const date = new Date(null);
  date.setSeconds(seconds);
  return date.toUTCString();
};
