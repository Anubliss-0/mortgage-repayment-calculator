import { useTranslation } from '../../../../i18n';

import { Icon } from '@iconify/react';

import styles from './SubmitButton.module.scss'

function SubmitButton() {
    const { t } = useTranslation();
    
    return (
        <button type="submit" className={styles.button}>
            <Icon icon="ph:calculator-fill" className={styles.icon} />
            {t('calculateRepayments')}
        </button>
    );
}

export default SubmitButton;