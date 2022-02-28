const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("gets intern's school", () => {
  const intern = new Intern("UofA");

  expect(intern.getSchool()).toEqual(expect.any(String));
});

test("gets intern's role", () => {
  const intern = new Intern("UofA");

  expect(intern.getRole()).toBe("Intern");
});
