import { i18n, useTranslation } from '../../i18n';

import styles from './LanguageSelect.module.scss'

function LanguageSelect() {
    const { t } = useTranslation();

    const changeLanguage = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <header className={styles.header}>
            <label>{t('language')}
                <select onChange={changeLanguage}>
                    <option value="en">English</option>
                    <option value="nl">Nederlands</option>
                    <option value="es">Español</option>
                    <option value="de">Deutsch</option>
                    <option value="fr">Français</option>
                </select>
            </label>
        </header>
    );
}

export default LanguageSelect;