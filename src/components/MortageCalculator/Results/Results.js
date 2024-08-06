import PropTypes from 'prop-types';

import CalculatedResults from './CalculatedResults/CalculatedResults';
import ResultsPlaceholder from './ResultsPlaceholder/ResultsPlaceholder';

import styles from './Results.module.scss'

function Results({ monthlyRepayments, total, showResults }) {

    return (
        <section className={styles.resultsContainer}>
            {showResults ? (
             <CalculatedResults 
                monthlyRepayments={monthlyRepayments}
                total={total}
             />   
            ) : (
               <ResultsPlaceholder /> 
            )}
        </section>
    );
}

Results.propTypes = {
    monthlyRepayments: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
    showResults: PropTypes.bool.isRequired
}

export default Results;