const TAX_PERCENTAGE = 0.1
import { Employee } from "../models/employee"

export function calculateSalary(salary: number) {
  if (Number.isNaN(salary)) {
    throw new Error("Invalid salary")
  }

  if (salary < 0) {
    throw new Error("Invalid salary")
  }

  if (salary > 50000) {
    return salary - salary * TAX_PERCENTAGE
  }

  return salary

}

class SalaryService {

  calculateSalary(salary: number) {

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

  generateSalarySlip(employee: Employee) {

    const netSalary = this.calculateSalary(employee.salary)

    return {
      employeeName: employee.name,
      grossSalary: employee.salary,
      tax: employee.salary - netSalary,
      netSalary
    }
  }
}

const salaryService = new SalaryService()

export default salaryService