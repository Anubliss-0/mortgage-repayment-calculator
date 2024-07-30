function Results({ monthlyRepayments, total, showResults }) {

    return (
        <section>
            {showResults ? (
                <div>
                    <header>
                        <h2>Your Results</h2>
                        <p>
                            Your results are shown below based on the information you provided. To adjust the results, edit the form and click “calculate repayments” again.
                        </p>
                    </header>
                    <div>
                        <div>
                            <span>Your monthly repayments</span>
                            <span>{monthlyRepayments}</span>
                        </div>
                        <div>
                            <span>Total you'll repay over the term</span>
                            <span>{total}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <header>
                        <h2>Results shown here</h2>
                        <p>
                            Complete the form and click “calculate repayments” to see what your monthly repayments would be.
                        </p>
                    </header>
                </div>
            )}
        </section>
    );
}

export default Results;