import { expect } from '@playwright/test';
import{test} from '../../fixtures/baseTest';

test('TC_PIM_010 - Admin should navigate through Employee List pages @pagination @regression',
  async ({ page, loginPage, navigationPage, pimPage }) => {

    await loginPage.visitPage();
    await loginPage.login('Admin', 'admin123');
    await loginPage.verifyLoginSuccessful();

    await navigationPage.gotoPIM();
    await pimPage.gotoEmployeeList();
    await expect(pimPage.loadingSpinner).toBeHidden();

    const pageOneEmployeeIds =
      await pimPage.getVisibleEmployeeIds();

    expect(pageOneEmployeeIds.length).toBeGreaterThan(0);
   const nextButtonAvaliable=await pimPage.nextPageButton.count();

   test.skip(nextButtonAvaliable===0,'Employee List currently contains only one page')
   
   await pimPage.goToPage(2);
   const pageTwoEmployeeIds= await pimPage.getVisibleEmployeeIds();
   expect(pageTwoEmployeeIds.length).toBeGreaterThan(0);
  expect(pageOneEmployeeIds).not.toEqual(pageTwoEmployeeIds);
    
});