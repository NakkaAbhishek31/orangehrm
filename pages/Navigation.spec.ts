import{Locator, Page,expect} from "@playwright/test"

export class NavigationPage{

    readonly page:Page;
    readonly PIMLink:Locator;


    constructor(page:Page)
    {
        this.page=page;
        this.PIMLink=page.getByText('PIM', { exact: true })
    }

    async gotoPIM():Promise<void>
    {
        await this.PIMLink.click();
    }



}