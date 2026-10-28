/** Selector details for DirectoryPage. */
export const directoryLocators = {
  form: "form",
  inputGroup: ".oxd-input-group",
  labels: {
    employeeName: "Employee Name",
    jobTitle: "Job Title",
    location: "Location",
  },
  heading: { role: "heading", name: "Directory", exact: true, level: 5 },
  input: "input",
  select: ".oxd-select-text",
  searchButton: { role: "button", name: "Search", exact: true },
  resetButton: { role: "button", name: "Reset", exact: true },
  employeeCards: ".orangehrm-directory-card",
  noRecords: { text: "No Records Found", exact: true },
  loadingSpinner: ".oxd-loading-spinner",
  autocompleteDropdown: ".oxd-autocomplete-dropdown:visible",
  validation: ".oxd-input-field-error-message",
} as const;
