export const isWinter = (): boolean => {
  const month = new Date().getMonth();

  return month > 9 || month < 3;
};
