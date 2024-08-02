import { useTranslation } from '../../../../i18n';

function SubmitButton() {
    const { t } = useTranslation();
    
    return (
        <button type="submit">
            {t('calculateRepayments')}
        </button>
    );
}

export default SubmitButton;