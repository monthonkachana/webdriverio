class LoginObject {
  get openFormLogin() {
    return $("~Login");
  }

  get inputField() {
    return {
      email: $("~input-email"),
      password: $("~input-password"),
    };
  }
  get buttonClick() {
    return $("~button-LOGIN");
  }
}

module.exports = new LoginObject();
