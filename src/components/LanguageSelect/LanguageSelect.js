import { i18n, useTranslation } from '../../i18n';

function LangugeSelect() {
    const { t } = useTranslation();

    const changeLanguage = (event) => {
        const selectedLanguage = event.target.value;
        i18n.changeLanguage(selectedLanguage);
    };

    return (
        <div>
            <label htmlFor="language-select">{t('language')}</label>
            <select 
                id="language-select" 
                onChange={changeLanguage} 
                aria-label="Select language"
                role="combobox"
                aria-live="polite"
            >
                <option value="en">English</option>
                <option value="nl">Nederlands</option>
                <option value="es">Español</option>
                <option value="de">Deutsch</option>
                <option value="fr">Français</option>
            </select>
        </div>
    );
}

export default LangugeSelect;