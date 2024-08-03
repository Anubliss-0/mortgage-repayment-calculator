import { useId } from 'react';
import { useTranslation } from '../../../../i18n';
import PropTypes from 'prop-types';

import RadioButton from './RadioButton/RadioButton';

import styles from './RadioButtons.module.scss'

function RadioButtons({ onChange, formData, showInvalid, ref1, ref2 }) {
    const id = useId();
    const { t } = useTranslation();

    const renderFieldRequired = () => (
        <span
            id={`${id}-error`}
            aria-live="assertive"
            role="alert"
            className={styles.errorMessage}
        >
            {t('fieldRequired')}
        </span>
    )

    return (
        <div
            role='radiogroup'
            aria-labelledby={`${id}-label`}
            aria-errormessage={showInvalid ? `${id}-error` : null}
            className={styles.radioGroup}
        >
            <span id={`${id}-label`}>{t("mortgageType")}</span>
            <RadioButton
                label={t('repayment')}
                collectionName={"mortgageType"}
                value='repayment'
                onChange={(event) => { onChange('mortgageType', event.target.value) }}
                selected={formData.mortgageType === 'repayment'}
                ref={ref1}
            />
            <RadioButton
                label={t('interestOnly')}
                collectionName={"mortgageType"}
                value='interest only'
                onChange={(event) => { onChange('mortgageType', event.target.value) }}
                selected={formData.mortgageType === 'interest only'}
                ref={ref2}
            />
            {showInvalid && renderFieldRequired()}
        </div>
    )
}

RadioButtons.propTypes = {
    onChange: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    showInvalid: PropTypes.bool.isRequired,
    ref1: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired,
    ref2: PropTypes.shape({ current: PropTypes.instanceOf(Element) }).isRequired
}

export default RadioButtons;