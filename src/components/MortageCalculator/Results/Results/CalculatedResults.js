import PropTypes from 'prop-types';
import { useTranslation } from '../../../../i18n';

import styles from './CalculatedResults.module.scss'

function CalculatedResults ({monthlyRepayments, total}) {
    const { t } = useTranslation();

    return (
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
    )
}

CalculatedResults.propTypes = {
    monthlyRepayments: PropTypes.string.isRequired,
    total: PropTypes.string.isRequired,
}

export default CalculatedResults;