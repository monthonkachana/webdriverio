import LoginObject from "../OOP/loginOject";
//Global with on the Page Ojects
describe("login platform with inheritance", () => {
  it("verify login  ", async () => {
    const LOGIN_ICON_HOME_SCREEN = "~Login";
    await $(LOGIN_ICON_HOME_SCREEN).click();

    // LoginObject.wait_till_screen_displayed();
    await LoginObject.email_txt_field.setValue("teo");
    await LoginObject.password_txt_field.setValue("...");
    await LoginObject.login_btn.click();
    await browser.pause(3000);
  });
});
//npx wdio run wdio.android.conf.js --spec .\test\Authencation.module\TC_003_InheritanceLogin.js
