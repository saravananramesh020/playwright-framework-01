import { test } from '../fixtures/customFixture';
import user from '../testdata/user.json';

for (const data of user.users){
test(`login user -${data.username}`, async ({ page, loginpage }) => {
        await page.goto(
`${process.env.BASE_URL}/practice-test-login/`
);
   

    await loginpage.login(
          data.username,
         data.password
    );
    await page.context().storageState({
        path: 'auth.json'
    });
});
 
}