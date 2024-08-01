import { useTranslation } from'../../../../i18n';
import PropTypes from 'prop-types';

import RadioButton from './RadioButton/RadioButton';

function Fieldset({onChange, formData, showError}) {
    const { t } = useTranslation();

    const renderFieldRequired = () => <span>This field is required</span>

    return (
        <div>
                <legend>{t("mortgageType")}</legend>
                <RadioButton
                    label={t('repayment')}
                    collectionName={"mortgageType"}
                    value='repayment'
                    onChange={(event) => { onChange('mortgageType', event.target.value) }}
                    selected={formData.mortgageType === 'repayment'}
                />
                <RadioButton
                    label={t('interestOnly')}
                    collectionName={"mortgageType"}
                    value='interest only'
                    onChange={(event) => { onChange('mortgageType', event.target.value) }}
                    selected={formData.mortgageType === 'interest only'}
                />
            {showError && renderFieldRequired()}
        </div>
    )
}

Fieldset.propTypes = {
    onChange: PropTypes.func.isRequired,
    formData: PropTypes.object.isRequired,
    showError: PropTypes.bool.isRequired
}

export default Fieldset;