import inheritanceLogin from "./inheritanceLogin";
const LOGIN_BTN = '~button-LOGIN'

class LoginObject extends inheritanceLogin {

    get login_btn(){
        $(LOGIN_BTN).waitForDisplayed({timeout: 2000})
        return $(LOGIN_BTN)
    }

}

export default new LoginObject();
