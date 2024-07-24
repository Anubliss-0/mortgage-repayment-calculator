// import React from 'react';
import NumberFieldPrefix from './NumberFieldPrefix';
import '../styles/utilities.scss';

function Form({ value, onSquareClick }) {
    return (
        <>
            <div className='flex-column'>
                <NumberFieldPrefix />
                <NumberFieldPrefix />
            </div>
        </>
    );
}

export default Form;