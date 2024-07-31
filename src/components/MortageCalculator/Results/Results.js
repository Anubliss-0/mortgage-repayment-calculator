import { useTranslation } from 'react-i18next';
import '../../../i18n'; // Import the i18n configuration

function Results({ monthlyRepayments, total, showResults }) {
    const { t } = useTranslation();

    return (
        <section>
            {showResults ? (
                <div>
                    <header>
                        <h2>{t("yourResults")}</h2>
                        <p>
                            {t("resultsInfo")}
                        </p>
                    </header>
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
                    <header>
                        <h2>{t("resultsHere")}</h2>
                        <p>
                            {t("resultsPlaceholder")}
                        </p>
                    </header>
                </div>
            )}
        </section>
    );
}

export default Results;