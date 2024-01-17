// step hook
// [0-0] before suite
// [0-0] before each method
// [0-0] test cases1
// [0-0] after each methbod
// [0-0] before each method
// [0-0] test cases2
// [0-0] after each methbod
// [0-0] after suite
describe("Hook", () => {
  before(async () => {
    console.log("before suite");
  });
  after(async () => {
    console.log("after suite");
  });
  beforeEach(async () => {
    console.log("before each method");
  });
  afterEach(async () => {
    console.log("after each methbod");
  });
  it("TC1", async () => {
    console.log("test cases1");
  });
  it("TC2", async () => {
    console.log("test cases2");
  });
});
