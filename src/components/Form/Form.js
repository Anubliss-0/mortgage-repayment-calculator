// import React from 'react';
import NumberFieldPrefix from '../NumberFieldPrefix/NumberFieldPrefix';
import NumberFieldSuffix from '../NumberFieldSuffix/NumberFieldSuffix';
import RadioButton from '../RadioButton/RadioButton';
import SubmitButton from '../SubmitButton/SubmitButton';
import styles from './Form.module.scss'
import { useState } from 'react';

function Form() {
    const [isSubmitted, setIsSubmitted] = useState(false);
    const [showErrors, setShowErrors] = useState(false);
    const [emptyElements, setEmptyElements] = useState([
        'mortgageAmount',
        'mortgageTerm',
        'mortgageType'
    ]);

    const [formData, setFormData] = useState({
        mortgageAmount: '',
        mortgageTerm: '',
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

        if(emptyElements.length === 0) {
            setIsSubmitted(true);
            setShowErrors(false);
            console.log("submitted!")
        } else {
            setShowErrors(true);
            console.log("Showing errors")
        }
    };

    return (
        <>
            <form 
                className={styles.form}
                onSubmit={handleSubmit}
            >
                <NumberFieldPrefix
                    prefixText={"$"}
                    label={'Mortgage Amount'}
                    value={formData.mortgageAmount}
                    onChange={(value) => handleInputChange('mortgageAmount', value)}
                    showError={emptyElements.includes('mortgageAmount') && showErrors}
                />
                <NumberFieldSuffix
                    suffixText={"years"}
                    label={'Mortgage Term'}
                    value={formData.mortgageTerm}
                    onChange={(value) => handleInputChange('mortgageTerm', value)}
                />
                <fieldset>
                    <legend>Mortage Type</legend>
                    <RadioButton 
                        label={'Repayment'}
                        collectionName={"mortgageType"}
                        value='repayment'
                        onChange={(event) => {handleInputChange('mortgageType', event.target.value)}}
                        selected={formData.mortgageType === 'repayment'}
                    />
                    <RadioButton 
                        label={'Interest only'}
                        collectionName={"mortgageType"}
                        value='interest only'
                        onChange={(event) => {handleInputChange('mortgageType', event.target.value)}}
                        selected={formData.mortgageType === 'interest only'}
                    />
                </fieldset>
                <SubmitButton />
            </form>
        </>
    );
}

export default Form;