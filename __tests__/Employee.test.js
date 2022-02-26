const Employee = require("../lib/Employee");

test("creates new employee object", () => {
  const employee = new Employee("Hadas", "8", "hadas@mail.com");

  expect(employee.name).toEqual(expect.any(String));
  expect(employee.id).toEqual(expect.any(String));
  expect(employee.email).toEqual(expect.any(String));
});

// TODO add test to getName()
test("gets employee's name", () => {
  const employee = new Employee("Hadas", "8", "hadas@mail.com");
});

// TODO add test to getId()

// TODO add test to getEmail()

// TODO add test to getRole()
