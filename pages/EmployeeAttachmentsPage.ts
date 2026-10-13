import { Download, Locator, Page, expect } from "@playwright/test";
import { employeeAttachmentsLocators } from "../locators/employeeAttachmentsLocators";

export class EmployeeAttachmentsPage {
  readonly page: Page;
  readonly attachmentsSection!: Locator;
  readonly attachmentsHeading!: Locator;
  readonly addAttachmentButton!: Locator;
  readonly attachmentFileInput!: Locator;
  readonly attachmentCommentInput!: Locator;
  readonly attachmentSaveButton!: Locator;
  readonly attachmentRows!: Locator;
  readonly successToast!: Locator;

  constructor(page: Page) {
    this.page = page;
    const selectors = employeeAttachmentsLocators;
    this.attachmentsHeading = page.getByRole(selectors.heading.role, {
      name: selectors.heading.name,
      exact: selectors.heading.exact,
    });
    this.attachmentsSection = page.locator(selectors.section);
    this.addAttachmentButton = this.attachmentsSection.locator(
      selectors.addButton,
    );
    this.attachmentFileInput = this.attachmentsSection.locator(
      selectors.fileInput,
    );
    this.attachmentCommentInput = this.attachmentsSection.getByPlaceholder(
      selectors.commentPlaceholder,
    );
    this.attachmentSaveButton = this.attachmentsSection.getByRole(
      selectors.buttonRole,
      { name: selectors.saveButtonName, exact: true },
    );
    this.attachmentRows = this.attachmentsSection.locator(selectors.tableRows);
    this.successToast = page
      .locator(selectors.successToast)
      .filter({ hasText: /Successfully/i });
  }

  async clickonuploadtheAttachement(): Promise<void> {
    await this.attachmentsHeading.scrollIntoViewIfNeeded();
    await expect(this.attachmentsHeading).toBeVisible();
    await this.addAttachmentButton.click();
    await expect(this.attachmentFileInput).toBeAttached();
    await expect(this.attachmentCommentInput).toBeVisible();
    await expect(this.attachmentSaveButton).toBeVisible();
  }

  async saveUploadtheAttachement(): Promise<void> {
    const uploadResponse = this.page.waitForResponse(
      (response) =>
        response.url().includes("/attachments") &&
        response.request().method() === "POST" &&
        response.ok(),
      { timeout: 30_000 },
    );

    await this.attachmentSaveButton.click();
    await uploadResponse;
    await expect(this.successToast).toContainText("Successfully Saved");
  }

  async verifyUploadedAttachment(
    attachmentFileName: string,
    comment: string,
  ): Promise<void> {
    const attachmentRow = this.attachmentRows.filter({
      hasText: attachmentFileName,
    });

    await expect(attachmentRow).toHaveCount(1);
    await expect(attachmentRow).toContainText(attachmentFileName);
    await expect(attachmentRow).toContainText(comment);
  }

  async downloadAttachemnt(fileName: string): Promise<Download> {
    const attachmentRow = this.attachmentRows.filter({ hasText: fileName });
    await expect(attachmentRow).toHaveCount(1);
    const downloadPromise = this.page.waitForEvent("download");
    await attachmentRow
      .locator(employeeAttachmentsLocators.downloadButton)
      .filter({ has: this.page.locator(employeeAttachmentsLocators.downloadIcon) })
      .click();
    return await downloadPromise;
  }
}
