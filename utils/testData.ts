export type EmployeeTemplate = {
  firstNamePrefix: string;
  middleName: string;
  lastName: string;
};

/** Creates a value that is unlikely to collide during parallel test execution. */
export const generateUniqueId = (prefix = ""): string =>
  `${prefix}${Date.now()}${Math.floor(Math.random() * 1000)}`;

/** Builds an employee while keeping the reusable employee shape in one place. */
export const createUniqueEmployee = (
  template: EmployeeTemplate,
  uniqueValue = generateUniqueId(),
) => ({
  firstName: `${template.firstNamePrefix}${uniqueValue}`,
  middleName: template.middleName,
  lastName: template.lastName,
});

/** Creates the numeric ID format accepted by OrangeHRM's Employee ID field. */
export const generateEmployeeId = (): string =>
  `${Date.now().toString().slice(-8)}${Math.floor(Math.random() * 10)}`;
