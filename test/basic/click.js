describe("click", () => {
  it("click into platform demo", async () => {
    const wdiodemoapp = await $("~wdiodemoapp");

    await browser.pause(3000);
    await wdiodemoapp.click();
    await browser.pause(3000);
  });
});
