import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { saveSalary} from "../services/salaryService";

const SalaryForm = () => {
  const [employees, setEmployees] = useState([]);
  const [formData, setFormData] = useState({
    employee: "",
    basicSalary: "",
    hra: "",
    paymentDate: "",
    monthOfSalary: ""
  });

  useEffect(() => {
    const fetchEmployees = () => {
      const dummyEmployees = [
        { id: 1, name: "Yash Patel" },
        { id: 2, name: "Amit Sharma" },
        { id: 3, name: "Neha Gupta" }
      ];
      setEmployees(dummyEmployees);
    };
    fetchEmployees();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const res = saveSalary(formData); 
    alert(res.message);

    setFormData({
      employee: "",
      basicSalary: "",
      hra: "",
      paymentDate: "",
      monthOfSalary: ""
    });
  };

  return (
    <div className="container mt-5">
      <div className="card shadow-lg p-4 rounded-4" style={{ maxWidth: "600px", margin: "auto" }}>
        <h2 className="text-center text-primary mb-4">💰 Employee Salary Form</h2>
        <form onSubmit={handleSubmit}>

          <div className="mb-3">
            <label className="form-label fw-bold">Employee</label>
            <select
              className="form-select"
              name="employee"
              value={formData.employee}
              onChange={handleChange}
              required
            >
              <option value="">Select Employee</option>
              {employees.map((emp) => (
                <option key={emp.id} value={emp.name}>
                  {emp.name}
                </option>
              ))}
            </select>
          </div>


          <div className="mb-3">
            <label className="form-label fw-bold">Basic Salary</label>
            <input
              type="textbox"
              className="form-control"
              name="basicSalary"
              value={formData.basicSalary}
              onChange={handleChange}
              placeholder="Enter Basic Salary"
              required
            />
          </div>


          <div className="mb-3">
            <label className="form-label fw-bold">HRA</label>
            <input
              type="textbox"
              className="form-control"
              name="hra"
              value={formData.hra}
              onChange={handleChange}
              placeholder="Enter HRA"
              required
            />
          </div>


          <div className="mb-3">
            <label className="form-label fw-bold">Payment Date</label>
            <input
              type="date"
              className="form-control"
              name="paymentDate"
              value={formData.paymentDate}
              onChange={handleChange}
              required
            />
          </div>


          <div className="mb-3">
            <label className="form-label fw-bold">Month of Salary</label>
            <input
              type="month"
              className="form-control"
              name="monthOfSalary"
              value={formData.monthOfSalary}
              onChange={handleChange}
              required
            />
          </div>

          <button type="submit" className="btn btn-success w-100 fw-bold">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default SalaryForm;
