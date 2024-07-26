// import React from 'react';
import NumberFieldPrefix from '../NumberFieldPrefix/NumberFieldPrefix';
import './Form.module.scss'

function Form({ value, onSquareClick }) {
    return (
        <>
            <div>
                <NumberFieldPrefix 
                    prefixText={"Prefix"} 
                    label={'Title'}
                />
            </div>
        </>
    );
}

export default Form;