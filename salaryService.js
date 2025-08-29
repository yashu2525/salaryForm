const salaryData = []; 

export const saveSalary = (formData) => {
  salaryData.push(formData);
  return { status: "success", message: " ✅Salary saved " };
};

export const getSalaries = () => {
  return salaryData;
};

