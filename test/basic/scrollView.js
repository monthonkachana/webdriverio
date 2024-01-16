describe("Scrolling View", () => {
  it("Scrolling into a real mobile", async () => {
    const scrollView = $("~android.widget.ScrollView");
    const location = await scrollView.getLocation();
    const size = await scrollView.getSize();

    const startX = location.x + size.width / 2;
    const startY = location.y + size.height * 0.8;
    const endY = location.y + size.height * 0.2;

    await browser.touchAction([
      { action: "press", x: startX, y: startY },
      { action: "moveTo", x: startX, y: endY },
      "release",
    ]);
    await browser.pause(1500);
  });
});
