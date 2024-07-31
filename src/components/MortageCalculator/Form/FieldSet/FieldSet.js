import RadioButton from './RadioButton/RadioButton';
import { useTranslation } from 'react-i18next';
import '../../../../i18n'; // Import the i18n configuration

function Fieldset({onChange, formData, showError}) {
    const { t } = useTranslation();

    const fieldRequired = () => showError ? <span>This field is required</span> : ''

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
            {fieldRequired()}
        </div>
    )
}

export default Fieldset;