import React, { createContext, useState } from "react";

// Context create
export const SalaryContext = createContext();

// Provider
export const SalaryProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    employee: "",
    basicSalary: "",
    hra: "",
    paymentDate: "",
    monthOfSalary: ""
  });

  return (
    <SalaryContext.Provider value={{ formData, setFormData }}>
      {children}
    </SalaryContext.Provider>
  );
};
