const Employee = require("../lib/Employee");
const Intern = require("../lib/Intern");

test("gets intern's school", () => {
  const intern = new Intern("Dave", "123", "dave@gmail.com", "UofA");

  expect(intern.getSchool()).toEqual(expect.any(String));
});

test("gets intern's role", () => {
  const intern = new Intern("Dave", "123", "dave@gmail.com", "UofA");

  expect(intern.getRole()).toBe("Intern");
});
