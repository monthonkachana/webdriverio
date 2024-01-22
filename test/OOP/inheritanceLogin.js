class inheritanceLogin {
  get Text() {
    return $("~android.widget.TextView");
    // expect(classText).toBe("Login / Sign up Form");
  }
}

module.exports = new inheritanceLogin();
