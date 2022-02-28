const { TestWatcher } = require("jest");
const Manager = require("../lib/Manager");

// get office number
test("gets manager's office number", () => {
  const manager = new Manager("123456");

  expect(manager.officeNumber).toEqual(expect.any(String));
});

// get role
test("gets manager role", () => {
  const manager = new Manager("123456");

  expect(manager.getRole()).toBe("Manager");
});
