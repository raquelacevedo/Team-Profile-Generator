const Manager = require("../lib/manager");
const Employee = require("../lib/employee");

test("Can set office number via constructor argument", () => {
  const testValue = 123;
  const e = new Manager("Zelda", 1, "test@checkmate.com", testValue);
  expect(e.officeNumber).toBe(testValue);
});

test("getRole() should return \"Manager\"", () => {
  const testValue = "Manager";
  const e = new Manager("Zelda", 1, "test@checkmate.com", 123);
  expect(e.getRole()).toBe(testValue);
});

test("Can get office number via getOffice()", () => {
  const testValue = 123;
  const e = new Manager("Zelda", 1, "test@checkmate.com", testValue);
  expect(e.getOfficeNumber()).toBe(testValue);
});