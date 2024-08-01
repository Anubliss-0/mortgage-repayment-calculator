import { useId, forwardRef } from 'react';
import PropTypes from 'prop-types';

import styles from './NumberField.module.scss'


const NumberField = forwardRef(function NumberField({ unit, label, value, onChange, showError, unitPosition }, ref) {
    const inputId = useId();

    const handleChange = (event) => {
        const newValue = event.target.value;
        const regex = /^-?\d*\.?\d*$/;

        if (regex.test(newValue)) {
            onChange(newValue)
        }
    }

    const renderUnit = () => (
        <div className={styles.unit}>
            <span>{unit}</span>
        </div>
    )


    const renderFieldRequired = () => (
        <span id={`${inputId}-error`}>This field is required</span>
    )

    return (
        <div className={styles.container}>
            <label htmlFor={inputId}>{label}</label>
            <div className={`${styles.fieldOuter} ${showError && value.length < 1 ? styles.invalid : ''}`}>
                {unitPosition === "start" && renderUnit()}
                <input
                    id={inputId}
                    type='text'
                    value={value}
                    aria-required='true'
                    aria-invalid={showError}
                    aria-errormessage={showError ? `${inputId}-error` : null}
                    onChange={handleChange}
                    ref={ref}
                ></input>
                {unitPosition === 'end' && renderUnit()}
            </div>
            {showError && renderFieldRequired()}
        </div>
    );
});

NumberField.propTypes = {
    unit: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    showError: PropTypes.bool.isRequired,
    unitPosition: PropTypes.string.isRequired,
    ref: PropTypes.string.isRequired
}

export default NumberField;