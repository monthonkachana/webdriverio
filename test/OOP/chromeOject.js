//Page Ojects Model

class chromeOject {
  get openChrome() {
    return $("~Chrome");
  }
  get classText() {
    return $("android.widget.EditText");
  }
}

module.exports = chromeOject();
