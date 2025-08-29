import React from "react";
import SalaryForm from "./components/SalaryForm";
import { SalaryProvider } from "./context/SalaryContext";

function App() {
  return (
    <SalaryProvider>
      <SalaryForm />
    </SalaryProvider>
  );
}

export default App;
