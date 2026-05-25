
export function calculateSalary(salary: number) {
  if (Number.isNaN(salary)) {
    throw new Error("Invalid salary")
  }

  if (salary < 0) {
    throw new Error("Invalid salary")
  }

  if (salary > 50000) {
    return salary - salary * 0.1
  }

  return salary

}