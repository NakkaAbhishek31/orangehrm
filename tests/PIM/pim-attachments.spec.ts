import { expect } from "@playwright/test";
import { test } from "../../fixtures/baseTest";
import { routes } from "../../utils/routes";

test("TC_PIM_011 - Admin should upload an employee attachment @positive @upload @regression", async ({
  page,
  navigationPage,
  pimPage,
  employeeAttachmentsPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const middleName = "Test";
  const lastName = "User";
  const profilePicturePath = "test-data/OIP.jpg";
  const pdfAttachement = "test-data/employee-handbook-template.pdf";
  const attachmentComment = "Attachment PDF";
  await page.goto(routes.dashboard);

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    profilePicturePath: profilePicturePath,
  });

  await page.waitForURL(/.*pim\/viewPersonalDetails\/empNumber\/\d+$/, {
    timeout: 60000, // 60 seconds
  });

  await employeeAttachmentsPage.clickonuploadtheAttachement();
  await employeeAttachmentsPage.attachmentFileInput.setInputFiles(
    pdfAttachement,
  );
  await employeeAttachmentsPage.attachmentCommentInput.fill(attachmentComment);
  await expect(employeeAttachmentsPage.attachmentFileInput).toHaveValue(
    /employee-handbook-template\.pdf$/,
  );
  await expect(employeeAttachmentsPage.attachmentCommentInput).toHaveValue(
    attachmentComment,
  );
  await employeeAttachmentsPage.saveUploadtheAttachement();
  await employeeAttachmentsPage.verifyUploadedAttachment(
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
  navigationPage,
  pimPage,
  employeeAttachmentsPage,
}) => {
  const firstName = `Auto${Date.now()}`;
  const middleName = "Test";
  const lastName = "User";
  const profilePicturePath = "test-data/OIP.jpg";
  const pdfAttachement = "test-data/employee-handbook-template.pdf";
  const attachmentComment = "Attachment PDF";
  await page.goto(routes.dashboard);

  await navigationPage.gotoPIM();
  await pimPage.gotoAddEmployee();

  const employeeId = await pimPage.addEmployee({
    firstName: firstName,
    middleName: middleName,
    lastName: lastName,
    profilePicturePath: profilePicturePath,
  });

  await page.waitForURL(/.*pim\/viewPersonalDetails\/empNumber\/\d+$/, {
    timeout: 60000, // 60 seconds
  });

  await employeeAttachmentsPage.clickonuploadtheAttachement();
  await employeeAttachmentsPage.attachmentFileInput.setInputFiles(
    pdfAttachement,
  );
  await employeeAttachmentsPage.attachmentCommentInput.fill(attachmentComment);
  await expect(employeeAttachmentsPage.attachmentFileInput).toHaveValue(
    /employee-handbook-template\.pdf$/,
  );
  await expect(employeeAttachmentsPage.attachmentCommentInput).toHaveValue(
    attachmentComment,
  );
  await employeeAttachmentsPage.saveUploadtheAttachement();
  await employeeAttachmentsPage.verifyUploadedAttachment(
    "employee-handbook-template.pdf",
    "Attachment PDF",
  );
  await pimPage.gotoEmployeeList();
  await pimPage.filterEmployeeList({ employeeId });
  await pimPage.clickOnFilterSearch();
  await pimPage.verifyEmployeeSearchResult(employeeId, firstName, lastName);
  await pimPage.openEmployeeById(employeeId);
  const download = await employeeAttachmentsPage.downloadAttachemnt(
    "employee-handbook-template.pdf",
  );
  expect(download.suggestedFilename()).toBe("employee-handbook-template.pdf");
});
