import { test as base, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { ForgotPage } from '../pages/ForgotPassword';
import { DashboardPage } from '../pages/DashboardPage';
import { NavigationPage } from '../pages/Navigation.spec';
import { PIMPage } from '../pages/PimPage';
import {  EmployeeAttachmentsPage } from '../pages/EmployeeAttachmentsPage';

type AppFixtures={
    loginPage:LoginPage;
    forgotPage:ForgotPage
    dashboardPage:DashboardPage
    navigationPage:NavigationPage
    pimPage:PIMPage
    employeeAttachmentspage:EmployeeAttachmentsPage
}


export const test =base.extend<AppFixtures>({
    loginPage:async({page},use)=>{
        await  use(new LoginPage(page));
    },

        forgotPage:async({page},use)=>{
        await  use(new ForgotPage(page));
    },

     dashboardPage:async({page},use)=>{
        await  use(new DashboardPage(page));
    },

       navigationPage:async({page},use)=>{
        await  use(new NavigationPage(page));
    },
     pimPage:async({page},use)=>{
        await  use(new PIMPage(page));
    },
     employeeAttachmentspage:async({page},use)=>{
        await  use(new EmployeeAttachmentsPage(page));
    }
})