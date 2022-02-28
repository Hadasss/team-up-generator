const Employee = require("../lib/Employee");

test("creates new employee object", () => {
  const employee = new Employee("Hadas", "8", "hadas@mail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
});

// add test to getName()
test("gets employee's name", () => {
  const employee = new Employee("Hadas", "8", "hadas@mail.com");

  expect(employee.name).toEqual(expect.any(String));
});

// add test to getId()
test("gets employee's id", () => {
  const employee = new Employee("Hadas", "8", "hadas@mail.com");

  expect(employee.id).toEqual(expect.any(String));
});

// add test to getEmail()
test("gets employee's email", () => {
  const employee = new Employee("Hadas", "8", "hadas@mail.com");

  expect(employee.email).toEqual(expect.any(String));
});

// add test to getRole()
test("gets employee's type of position", () => {
  const employee = new Employee("Hadas", "8", "hadas@mail.com");

  expect(employee.getRole()).toBe("Employee");
});
