
export const calculateSalary = (salary: number) => {
  if (salary < 0) {
    throw new Error("Invalid salary")
  }

  return salary
}