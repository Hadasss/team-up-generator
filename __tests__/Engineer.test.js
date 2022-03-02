const Engineer = require("../lib/Engineer");

test("gets engeieer's github username", () => {
  const engineer = new Engineer("Hadas", "123", "hadas@gmail.com", "hadasss");

  expect(engineer.github).toBe("hadasss");
});

test("gets engineer's role", () => {
  const engineer = new Engineer("Hadas", "123", "hadas@gmail.com", "hadasss");

  expect(engineer.getRole()).toBe("Engineer");
});
