export function calculateTotalRepayment(mortgageAmount, mortgageTerm, interestRate, mortgageType) {
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