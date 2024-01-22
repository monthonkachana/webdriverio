class registerOject {
  get openformsingup() {
    return {
      login: $("~Login"),
      singup: $("~button-sign-up-container"),
    };
  }
  get inputFieldRegis() {
    return {
      singEmail: $("~input-email"),
      singPassword: $("~input-password"),
      singPasswordRepare: $("~input-repeat-password"),
    };
  }
  get buttonClick() {
    return $("~button-SIGN UP");
  }
}
module.exports = new registerOject();
