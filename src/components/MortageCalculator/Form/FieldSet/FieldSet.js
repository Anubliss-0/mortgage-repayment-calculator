import { useTranslation } from'../../../../i18n';

import RadioButton from './RadioButton/RadioButton';

function Fieldset({onChange, formData, showError}) {
    const { t } = useTranslation();

    const renderFieldRequired = () => <span>This field is required</span>

    return (
        <div>
            <fieldset>
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
            </fieldset>
            {showError && renderFieldRequired()}
        </div>
    )
}

export default Fieldset;