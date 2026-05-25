import salaryService = require("../src/services/salaryService")



describe("Salary Calculator", () => {
  it("should return same salary if no deductions", () => {
    expect(salaryService.calculateSalary(50000)).toBe(50000)
  })
})
it("should throw error for negative salary", () => {
  expect(() => salaryService.calculateSalary(-1000)).toThrow("Invalid salary")
})