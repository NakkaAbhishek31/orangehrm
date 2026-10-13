/** Selector details for EmployeeAttachmentsPage. */
export const employeeAttachmentsLocators = {
  heading: { role: "heading", name: "Attachments", exact: true },
  section: ".orangehrm-attachment",
  addButton: 'button:has-text("Add")',
  fileInput: 'input[type="file"]',
  commentPlaceholder: "Type comment here",
  buttonRole: "button",
  saveButtonName: "Save",
  tableRows: ".oxd-table-body .oxd-table-card",
  successToast: ".oxd-toast",
  downloadButton: "button",
  downloadIcon: "i.bi-download",
} as const;
