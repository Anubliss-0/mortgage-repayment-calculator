import { useTranslation } from '../../../../i18n';

import { ReactComponent as Svg } from '../../../../assets/illustration-empty.svg';

import styles from './ResultsPlaceholder.module.scss'

function ResultsPlaceholder() {
    const { t } = useTranslation();

    return (
        <div className={styles.resultsPlaceholder}>
            <Svg width={192} height={192} />
            <h2>{t("resultsHere")}</h2>
            <p>{t("resultsPlaceholder")}</p>
        </div>
    )
}

export default ResultsPlaceholder;