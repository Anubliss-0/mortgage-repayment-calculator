import { useState } from 'react';
import { useTranslation } from '../../../i18n';

import Fieldset from './FieldSet/FieldSet';
import NumberField from './NumberField/NumberField';
import SubmitButton from './SubmitButton/SubmitButton';

import styles from './Form.module.scss'

function Form({ onSubmit }) {
    const { t } = useTranslation();
    const [showErrors, setShowErrors] = useState(false);

    const [emptyElements, setEmptyElements] = useState([
        'mortgageAmount',
        'mortgageTerm',
        'interestRate',
        'mortgageType'
    ]);

    const [formData, setFormData] = useState({
        mortgageAmount: '',
        mortgageTerm: '',
        interestRate: '',
        mortgageType: ''
    });

    const handleInputChange = (key, value) => {
        const newFormData = {
            ...formData,
            [key]: value
        };
        setFormData(newFormData);
        handleEmptyElements(newFormData);
    };

    const handleEmptyElements = (formData) => {
        const emptyFields = Object.keys(formData).filter(key => formData[key] === '');
        setEmptyElements(emptyFields);
    };

    const handleSubmit = (event) => {
        event.preventDefault();

        if (emptyElements.length === 0) {
            setShowErrors(false);
            onSubmit(formData);
        } else {
            setShowErrors(true);
        }
    };

    return (
        <>
            <form
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <NumberField
                    unit={"€"}
                    label={t('mortgageAmount')}
                    value={formData.mortgageAmount}
                    onChange={(value) => handleInputChange('mortgageAmount', value)}
                    showError={emptyElements.includes('mortgageAmount') && showErrors}
                    unitPosition={'start'}
                />
                <div>
                    <NumberField
                        unit={t('years')}
                        label={t('mortgageTerm')}
                        value={formData.mortgageTerm}
                        onChange={(value) => handleInputChange('mortgageTerm', value)}
                        showError={emptyElements.includes('mortgageTerm') && showErrors}
                        unitPosition={'end'}
                    />
                    <NumberField
                        unit={"%"}
                        label={t('interestRate')}
                        value={formData.interestRate}
                        onChange={(value) => handleInputChange('interestRate', value)}
                        showError={emptyElements.includes('interestRate') && showErrors}
                        unitPosition={'end'}
                    />
                </div>
                <Fieldset
                    onChange={handleInputChange}
                    formData={formData}
                    showError={emptyElements.includes('mortgageTerm') && showErrors}
                />
                <SubmitButton />
            </form>
        </>
    );
}

export default Form;