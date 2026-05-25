import salaryService = require("../src/services/salaryService")



describe("Salary Calculator", () => {
  it("should return same salary if no deductions", () => {
    expect(salaryService.calculateSalary(50000)).toBe(50000)
  })
  it("should throw error for negative salary", () => {
  expect(() => salaryService.calculateSalary(-1000)).toThrow("Invalid salary")
})
  it("should return zero when salary is zero", () => {
  expect(salaryService.calculateSalary(0)).toBe(0)
})
it("should deduct 10 percent tax for salary above 50000", () => {
  expect(salaryService.calculateSalary(60000)).toBe(54000)
})
})
