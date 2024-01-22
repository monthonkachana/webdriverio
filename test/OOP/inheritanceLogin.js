const EMAIL_TXT_FIELD = "~input-email";
const PASSWORD_TXT_FIELD = "~input-password";

class InheritanceLogin {
  get email_txt_field() {
    return $(EMAIL_TXT_FIELD);
  }

  get password_txt_field() {
    return $(PASSWORD_TXT_FIELD);
  }
}

export default InheritanceLogin;
// get Text() {
//   return $("~android.widget.TextView");
//   // expect(classText).toBe("Login / Sign up Form");
// }
