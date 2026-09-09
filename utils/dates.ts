/**
 * Returns a date relative to today in the yyyy-dd-mm format used by OrangeHRM.
 * Supplying `today` makes this helper easy to unit test.
 */
export const orangeHrmDateFromOffset = (
  daysOffset: number,
  today = new Date(),
): string => {
  const date = new Date(today);
  date.setDate(date.getDate() + daysOffset);

  const year = date.getFullYear();
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");

  return `${year}-${day}-${month}`;
};
