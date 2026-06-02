import {test as base} from '@playwright/test'
import { LoginPage } from '../pages/loginpages'
type MyFixtures = {
      loginpage : LoginPage;
}
export const test = base.extend<MyFixtures>({
      
    loginpage: async({page},use)=>{
    const loginpage = new LoginPage(page)
     await use(loginpage)
    }
});
export {expect} from '@playwright/test'