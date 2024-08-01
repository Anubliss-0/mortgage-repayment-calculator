import { useState } from 'react';
import { i18n } from '../../i18n.js';

import { calculateTotalRepayment } from './mortgageCalculatorUtils.js';

import Form from './Form/Form.js';
import Results from './Results/Results.js';

function MortgageCalculator() {
  const [monthlyRepayments, setMonthlyRepayments] = useState();
  const [total, setTotal] = useState();
  const [showResults, setShowResults] = useState(false);

  const changeLanguage = (lng) => {
    i18n.changeLanguage(lng);
  };

  const calculateResults = (formData) => {
    const newTotal = calculateTotalRepayment(formData.mortgageAmount, formData.mortgageTerm, formData.interestRate, formData.mortgageType);
    const newMonthlyRepayments = ((newTotal / formData.mortgageTerm) / 12).toFixed(2);
    setTotal(newTotal);
    setMonthlyRepayments(newMonthlyRepayments);
    setShowResults(true);
  };

  return (
    <main>
      <button onClick={() => changeLanguage('en')}>English</button>
      <button onClick={() => changeLanguage('nl')}>Nederlands</button>
      <button onClick={() => changeLanguage('es')}>Español</button>
      <button onClick={() => changeLanguage('de')}>Deutsch</button>
      <button onClick={() => changeLanguage('fr')}>Fracais</button>
      <Form onSubmit={calculateResults} />
      <Results
        monthlyRepayments={monthlyRepayments}
        total={total}
        showResults={showResults}
      />
    </main>
  );
}

export default MortgageCalculator;