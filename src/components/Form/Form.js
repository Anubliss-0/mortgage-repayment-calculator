// import React from 'react';
import NumberFieldPrefix from '../NumberFieldPrefix/NumberFieldPrefix';
import './Form.module.scss'

function Form({ value, onSquareClick }) {
    return (
        <>
            <div>
                <NumberFieldPrefix />
            </div>
        </>
    );
}

export default Form;