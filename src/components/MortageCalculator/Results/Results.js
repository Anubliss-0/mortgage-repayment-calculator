import PropTypes from 'prop-types';
import { useTranslation } from '../../../i18n';

import { ReactComponent as Svg } from '../../../assets/illustration-empty.svg';

import styles from './Results.module.scss'

function Results({ monthlyRepayments, total, showResults }) {
    const { t } = useTranslation();

    return (
        <section className={styles.resultsContainer}>
            {showResults ? (
                <div className={styles.results}>
                    <h2>{t("yourResults")}</h2>
                    <p>{t("resultsInfo")}</p>
                    <div className={styles.resultsBox}>
                        <div>
                            <span>{t("yourMonthlyRepayments")}</span>
                            <span>€{monthlyRepayments}</span>
                        </div>
                        <hr></hr>
                        <div>
                            <span>{t("totalRepayments")}</span>
                            <span>€{total}</span>
                        </div>
                    </div>
                </div>
            ) : (
                <div className={styles.resultsPlaceholder}>
                    <Svg width={192} height={192} />
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