// import React from 'react';
import NumberFieldPrefix from '../NumberFieldPrefix/NumberFieldPrefix';
import NumberFieldSuffix from '../NumberFieldSuffix/NumberFieldSuffix';
import RadioButton from '../RadioButton/RadioButton';
import styles from './Form.module.scss'
import { useState } from 'react';

function Form({ value, onSquareClick }) {
    const [selectedRadio, setSelectedRadio] = useState()

    return (
        <>
            <form className={styles.form}>
                <NumberFieldPrefix
                    prefixText={"RENEE!"}
                    label={'Amount'}
                />
                <NumberFieldSuffix
                    suffixText={"BUTT!!"}
                    label={'Amount'}
                />
                <fieldset>
                    <legend>Mortage Type</legend>
                    <RadioButton 
                        label={'Repayment'}
                        collectionName={"mortgageType"}
                        value='repayment'
                        onChange={(event) => {setSelectedRadio(event.target.value)}}
                        selected={selectedRadio === 'repayment'}
                    />
                    <RadioButton 
                        label={'Interest only'}
                        collectionName={"mortgageType"}
                        value='interest only'
                        onChange={(event) => {setSelectedRadio(event.target.value)}}
                        selected={selectedRadio === 'interest only'}
                    />
                </fieldset>
            </form>
        </>
    );
}

export default Form;