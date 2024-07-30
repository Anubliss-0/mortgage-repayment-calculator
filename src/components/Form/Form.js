// import React from 'react';
import NumberFieldPrefix from '../NumberFieldPrefix/NumberFieldPrefix';
import NumberFieldSuffix from '../NumberFieldSuffix/NumberFieldSuffix';
import SubmitButton from '../SubmitButton/SubmitButton';
import styles from './Form.module.scss'
import { useState } from 'react';
import { useTranslation } from 'react-i18next';
import '../../i18n'; // Import the i18n configuration
import Fieldset from '../FieldSet/FieldSet';

function Form({ onSubmit }) {
    const { t } = useTranslation();
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showErrors, setShowErrors] = useState(false);
    const [emptyElements, setEmptyElements] = useState([
        'mortgageAmount',
        'mortgageTerm',
        'interestRate',
        'mortgageType'
    ]);

    const [formData, setFormData] = useState({
        mortgageAmount: '',
        mortgageTerm:   '',
        interestRate:   '',
        mortgageType:   ''
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
            setIsSubmitted(true);
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
                <NumberFieldPrefix
                    prefixText={"€"}
                    label={t('mortgageAmount')}
                    value={formData.mortgageAmount}
                    onChange={(value) => handleInputChange('mortgageAmount', value)}
                    showError={emptyElements.includes('mortgageAmount') && showErrors}
                />
                <div>
                    <NumberFieldSuffix
                        suffixText={"%"}
                        label={t('interestRate')}
                        value={formData.interestRate}
                        onChange={(value) => handleInputChange('interestRate', value)}
                        showError={emptyElements.includes('interestRate') && showErrors}
                    />
                    <NumberFieldSuffix
                        suffixText={t('years')}
                        label={t('mortgageTerm')}
                        value={formData.mortgageTerm}
                        onChange={(value) => handleInputChange('mortgageTerm', value)}
                        showError={emptyElements.includes('mortgageTerm') && showErrors}
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