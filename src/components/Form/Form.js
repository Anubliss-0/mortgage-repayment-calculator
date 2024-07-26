// import React from 'react';
import NumberFieldPrefix from '../NumberFieldPrefix/NumberFieldPrefix';
import NumberFieldSuffix from '../NumberFieldSuffix/NumberFieldSuffix';
import './Form.module.scss'

function Form({ value, onSquareClick }) {
    return (
        <>
            <NumberFieldPrefix
                prefixText={"Prefix"}
                label={'Amount'}
            />
            <NumberFieldSuffix
                suffixText={"Suffix"}
                label={'Amount'}
            />
        </>
    );
}

export default Form;