/** Role and accessible names used by the shared confirmation dialog. */
export const confirmationDialogLocators = {
  dialogRole: "dialog",
  buttonRole: "button",
  confirmDeleteName: /Yes,\s*Delete/i,
  cancelName: "No, Cancel",
  exact: true,
} as const;
