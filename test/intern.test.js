const Intern = require("../lib/intern");

test("Can set school via constructor", () => {
  const testValue = "Dartmouth College";
  const e = new Intern("Sansa", 1, "test@checkmate.com", testValue);
  expect(e.school).toBe(testValue);
});

test("getRole() should return \"Intern\"", () => {
  const testValue = "Intern";
  const e = new Intern("Sansa", 1, "test@checkmate.com", "Dartmouth College");
  expect(e.getRole()).toBe(testValue);
});

test("Can get school via getSchool()", () => {
  const testValue = "Dartmouth College";
  const e = new Intern("Sansa", 1, "test@checkmate.com", testValue);
  expect(e.getSchool()).toBe(testValue);
});