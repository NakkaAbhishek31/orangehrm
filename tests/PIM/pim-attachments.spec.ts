import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";

test("TC_PIM_011 - Admin should upload an employee attachment @positive @upload @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
  employeeAttachmentspage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const middleName = "Test";
  const lastName = "User";
  const profilePicturePath = "test-data/OIP.jpg";
  const pdfAttachement = "test-data/employee-handbook-template.pdf";
  const attachmentComment = "Attachment PDF";
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    profilePicturePath: profilePicturePath,
  });

  await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
    timeout: 15_000,
  });

  await employeeAttachmentspage.clickonuploadtheAttachement();
  await employeeAttachmentspage.attachmentFileInput.setInputFiles(
    pdfAttachement,
  );
  await employeeAttachmentspage.attachmentCommentInput.fill(attachmentComment);
  await expect(employeeAttachmentspage.attachmentFileInput).toHaveValue(
    /employee-handbook-template\.pdf$/,
  );
  await expect(employeeAttachmentspage.attachmentCommentInput).toHaveValue(
    attachmentComment,
  );
  await employeeAttachmentspage.saveUploadtheAttachement();
  await employeeAttachmentspage.verifyUploadedAttachment(
    "employee-handbook-template.pdf",
    "Attachment PDF",
  );
  await pimPage.gotoEmployeeList();
  await pimPage.filterEmployeeList({ employeeId });
  await pimPage.clickOnFilterSearch();
  await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  await pimPage.deleteEmployeeById(employeeId);
  await pimPage.filterEmployeeList({ employeeId });
  await pimPage.clickOnFilterSearch();
  await pimPage.verifyNoEmployeeRecordsFound(employeeId);
});


test("TC_PIM_012 - Admin should download an employee attachment @positive @download @regression", async ({
  page,
  loginPage,
  navigationPage,
  pimPage,
  employeeAttachmentspage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const middleName = "Test";
  const lastName = "User";
  const profilePicturePath = "test-data/OIP.jpg";
  const pdfAttachement = "test-data/employee-handbook-template.pdf";
  const attachmentComment = "Attachment PDF";
  await loginPage.visitPage();
  await loginPage.login("Admin", "admin123");
  await loginPage.verifyLoginSuccessful();

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    profilePicturePath: profilePicturePath,
  });

  await page.waitForURL(/pim\/viewPersonalDetails\/empNumber\/\d+/, {
    timeout: 15_000,
  });

  await employeeAttachmentspage.clickonuploadtheAttachement();
  await employeeAttachmentspage.attachmentFileInput.setInputFiles(
    pdfAttachement,
  );
  await employeeAttachmentspage.attachmentCommentInput.fill(attachmentComment);
  await expect(employeeAttachmentspage.attachmentFileInput).toHaveValue(
    /employee-handbook-template\.pdf$/,
  );
  await expect(employeeAttachmentspage.attachmentCommentInput).toHaveValue(
    attachmentComment,
  );
  await employeeAttachmentspage.saveUploadtheAttachement();
  await employeeAttachmentspage.verifyUploadedAttachment(
    "employee-handbook-template.pdf",
    "Attachment PDF",
  );
  await pimPage.gotoEmployeeList();
  await pimPage.filterEmployeeList({ employeeId });
  await pimPage.clickOnFilterSearch();
  await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  await pimPage.openEmployeeById(employeeId);
  const download =
  await employeeAttachmentspage.downloadAttachemnt(
    'employee-handbook-template.pdf'
  );
expect(download.suggestedFilename()).toBe(
  'employee-handbook-template.pdf'
);
});