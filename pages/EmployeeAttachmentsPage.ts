import { Download, Locator, Page, expect } from "@playwright/test";

export class EmployeeAttachmentsPage{
  readonly page: Page;
  readonly attachmentsSection: Locator;
  readonly attachmentsHeading: Locator;
  readonly addAttachmentButton: Locator;
  readonly attachmentFileInput: Locator;
  readonly attachmentCommentInput: Locator;
  readonly attachmentSaveButton: Locator;
  readonly attachmentRows: Locator;
  readonly successToast:Locator;

  constructor(page: Page) {
    this.page = page;
    this.attachmentsHeading = page.getByRole("heading", {
      name: "Attachments",
      exact: true,
    });

    this.attachmentsSection = page.locator(".orangehrm-attachment");

    this.addAttachmentButton = this.attachmentsSection.locator('button:has-text("Add")');

    this.attachmentFileInput =
      this.attachmentsSection.locator('input[type="file"]');

    this.attachmentCommentInput =
      this.attachmentsSection.getByPlaceholder("Type comment here");

    this.attachmentSaveButton = this.attachmentsSection.getByRole("button", {
      name: "Save",
      exact: true,
    });

    this.attachmentRows = this.attachmentsSection.locator(
      ".oxd-table-body .oxd-table-card",
    );
    this.successToast = page
  .locator('.oxd-toast')
  .filter({
    hasText: /Successfully/i,
  });
  }

  async clickonuploadtheAttachement():Promise<void>
  {

   await this.attachmentsHeading.scrollIntoViewIfNeeded();
   await expect(this.attachmentsHeading).toBeVisible();
   await this.addAttachmentButton.click();
   await expect(this.attachmentFileInput).toBeAttached();
  await expect(this.attachmentCommentInput).toBeVisible();
  await expect(this.attachmentSaveButton).toBeVisible();
  
  }

    async saveUploadtheAttachement():Promise<void>
  {

      const uploadResponse = this.page.waitForResponse(
    response =>
      response.url().includes('/attachments') &&
      response.request().method() === 'POST' &&
      response.ok(),
    { timeout: 30_000 }
  );


     await this.attachmentSaveButton.click();
    await uploadResponse;
      await expect(this.successToast).toContainText(
    'Successfully Saved'
  );
  
  }

  async verifyUploadedAttachment(
  attachmentFileName: string,
  comment: string
): Promise<void> {
  const attachmentRow = this.attachmentRows.filter({
    hasText: attachmentFileName,
  });

  await expect(attachmentRow).toHaveCount(1);
  await expect(attachmentRow).toContainText(attachmentFileName);
  await expect(attachmentRow).toContainText(comment);
   

}

async downloadAttachemnt(fileName:string):Promise<Download>
{
  const attachmentRow=this.attachmentRows.filter({hasText:fileName});
  await expect(attachmentRow).toHaveCount(1);
  const downloadPromise=this.page.waitForEvent('download');
  await attachmentRow.locator('button').filter({ has: this.page.locator('i.bi-download') }).click();
  return await downloadPromise;

}



}