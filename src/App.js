import './App.css';
import Form from './components/Form/Form.js';
import Results from './components/Results/Results.js';
import { useState } from 'react';

function App() {
  const [monthlyRepayments, setMonthlyRepayments] = useState();
  const [total, setTotal] = useState();
  const [showResults, setShowResults] = useState(false);

  const calculateResults = (formData) => {
    const newTotal = calculateTotalRepayment(formData.mortgageAmount, formData.mortgageTerm, formData.interestRate, formData.mortgageType)
    const newMonthlyRepayments = ((newTotal / formData.mortgageTerm) / 12).toFixed(2);
    setTotal(newTotal)
    setMonthlyRepayments(newMonthlyRepayments)
    setShowResults(true)
  }

  function calculateTotalRepayment(mortgageAmount, mortgageTerm, interestRate, mortgageType) {
    const monthlyInterestRate = (interestRate / 100) / 12;
    const numberOfPayments = mortgageTerm * 12;

    if (mortgageType === "repayment") {
      const monthlyPayment = mortgageAmount *
        (monthlyInterestRate * Math.pow(1 + monthlyInterestRate, numberOfPayments)) /
        (Math.pow(1 + monthlyInterestRate, numberOfPayments) - 1);

      const totalRepayment = monthlyPayment * numberOfPayments;
      return totalRepayment.toFixed(2);
    } else if (mortgageType === "interest only") {
      const totalInterest = mortgageAmount * monthlyInterestRate * numberOfPayments;
      return parseFloat(totalInterest).toFixed(2);
    }
  }

  return (
    <div className="App">
      <Form
        onSubmit={calculateResults}
      />
      <Results
        monthlyRepayments={monthlyRepayments}
        total={total}
        showResults={showResults}
      />
    </div>
  );
}

export default App;
