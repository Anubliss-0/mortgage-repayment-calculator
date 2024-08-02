import { useId } from 'react';
import { useTranslation } from'../../../../i18n';
import PropTypes from 'prop-types';

import RadioButton from './RadioButton/RadioButton';

function RadioButtons({onChange, formData, showError, ref1, ref2}) {
    const radioId = useId();
    const { t } = useTranslation();

    const renderFieldRequired = () => <span>This field is required</span>

    return (
        <div role='radiogroup' aria-labelledby={`${radioId}-label`}>
                <h2 id={`${radioId}-label`}>{t("mortgageType")}</h2>
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
            {showError && renderFieldRequired()}
        </div>
    )
}

RadioButtons.propTypes = {
    onChange: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    showError: PropTypes.bool.isRequired
}

export default RadioButtons;