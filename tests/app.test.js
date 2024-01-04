import TEST_VERSION from "../version.js";

describe("Auto Test", () => {
  test("Version Mock Test", () => {
    expect(TEST_VERSION >= 0).toEqual(true);
  });
});
