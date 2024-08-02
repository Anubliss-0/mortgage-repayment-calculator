import { useState } from 'react';

import { calculateTotalRepayment } from './mortgageCalculatorUtils.js';

import LangugeSelect from '../LanguageSelect/LanguageSelect.js';
import Form from './Form/Form.js';
import Results from './Results/Results.js';

function MortgageCalculator() {
  const [monthlyRepayments, setMonthlyRepayments] = useState();
  const [total, setTotal] = useState();
  const [showResults, setShowResults] = useState(false);

  

  const calculateResults = (formData) => {
    const newTotal = calculateTotalRepayment(formData.mortgageAmount, formData.mortgageTerm, formData.interestRate, formData.mortgageType);
    const newMonthlyRepayments = ((newTotal / formData.mortgageTerm) / 12).toFixed(2);
    setTotal(newTotal);
    setMonthlyRepayments(newMonthlyRepayments);
    setShowResults(true);
  };

  return (
    <main>
      <LangugeSelect />
      <Form
        onSubmit={calculateResults}
        onFormClear={setShowResults}
      />
      <Results
        monthlyRepayments={monthlyRepayments}
        total={total}
        showResults={showResults}
      />
    </main>
  );
}

export default MortgageCalculator;