// import React from 'react';
import NumberFieldPrefix from '../NumberFieldPrefix/NumberFieldPrefix';
import NumberFieldSuffix from '../NumberFieldSuffix/NumberFieldSuffix';
import styles from './Form.module.scss'

function Form({ value, onSquareClick }) {
    return (
        <>
            <form className={styles.form}>
                <NumberFieldPrefix
                    prefixText={"Prefix"}
                    label={'Amount'}
                />
                <NumberFieldSuffix
                    suffixText={"Suffix"}
                    label={'Amount'}
                />
            </form>
        </>
    );
}

export default Form;