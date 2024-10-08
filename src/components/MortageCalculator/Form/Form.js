import { useState, useRef } from 'react';
import { useTranslation } from '../../../i18n';
import PropTypes from 'prop-types';

import { setFocusOnFirstEmpty } from './FormUtils';

import RadioButtons from './RadioButtons/RadioButtons';
import NumberField from './NumberField/NumberField';
import SubmitButton from './SubmitButton/SubmitButton';

import styles from './Form.module.scss'

function Form({ onSubmit, onFormClear }) {
    const { t } = useTranslation();

    const mortgageAmountRef = useRef(null);
    const mortgageTermRef = useRef(null);
    const repaymentRef = useRef(null);
    const interestOnlyRef = useRef(null)
    const fieldRefs = [mortgageAmountRef, mortgageTermRef, repaymentRef, interestOnlyRef]

    const initialFormStates = {
        mortgageAmount: '',
        mortgageTerm: '',
        interestRate: '',
        mortgageType: ''
    };

    const initialEmptyElements = [
        'mortgageAmount',
        'mortgageTerm',
        'interestRate',
        'mortgageType'
    ]

    const [formData, setFormData] = useState(initialFormStates);
    const [showErrors, setShowErrors] = useState(false);
    const [emptyElements, setEmptyElements] = useState(initialEmptyElements);

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
            setFocusOnFirstEmpty(fieldRefs)
        }
    };

    const resetForm = () => {
        setFormData(initialFormStates)
        setShowErrors(false)
        onFormClear(false)
        setEmptyElements(initialEmptyElements)
    }

    return (
        <>
            <form
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <fieldset>
                    <legend className={styles.legend}>
                        {t("mortgageCalculator")}
                        <button
                            type='button'
                            onClick={resetForm}
                        >
                            {t("clearAll")}
                        </button>
                    </legend>
                    <div className={styles.inputsContainer}>
                        <NumberField
                            unit={"€"}
                            label={t('mortgageAmount')}
                            value={formData.mortgageAmount}
                            onChange={(value) => handleInputChange('mortgageAmount', value)}
                            showInvalid={emptyElements.includes('mortgageAmount') && showErrors}
                            unitPosition={'start'}
                            ref={mortgageAmountRef}
                        />
                        <div className={styles.smallInputs}>
                            <NumberField
                                unit={t('years')}
                                label={t('mortgageTerm')}
                                value={formData.mortgageTerm}
                                onChange={(value) => handleInputChange('mortgageTerm', value)}
                                showInvalid={emptyElements.includes('mortgageTerm') && showErrors}
                                unitPosition={'end'}
                                ref={mortgageTermRef}
                            />
                            <NumberField
                                unit={"%"}
                                label={t('interestRate')}
                                value={formData.interestRate}
                                onChange={(value) => handleInputChange('interestRate', value)}
                                showInvalid={emptyElements.includes('interestRate') && showErrors}
                                unitPosition={'end'}
                            />
                        </div>
                        <RadioButtons
                            onChange={handleInputChange}
                            formData={formData}
                            showInvalid={emptyElements.includes('mortgageType') && showErrors}
                            ref1={repaymentRef}
                            ref2={interestOnlyRef}
                        />
                    </div>
                </fieldset>
                <SubmitButton />
            </form>
        </>
    );
}

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    onFormClear: PropTypes.func.isRequired
}

export default Form;