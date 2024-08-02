import PropTypes from 'prop-types';
import { useTranslation } from '../../../i18n';

import styles from './Results.module.scss'

function Results({ monthlyRepayments, total, showResults }) {
    const { t } = useTranslation();

    return (
        <section className={styles.results}>
            {showResults ? (
                <div>
                    <h2>{t("yourResults")}</h2>
                    <p>{t("resultsInfo")}</p>
                    <div>
                        <div>
                            <span>{t("yourMonthlyRepayments")}</span>
                            <span>{monthlyRepayments}</span>
                        </div>
                        <div>
                            <span>{t("totalRepayments")}</span>
                            <span>{total}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div>
                    <h2>{t("resultsHere")}</h2>
                    <p>{t("resultsPlaceholder")}</p>
                </div>
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