import { useId, forwardRef } from 'react';
import PropTypes from 'prop-types';

import styles from './NumberField.module.scss'


const NumberField = forwardRef(function NumberField({ unit, label, value, onChange, showInvalid, unitPosition }, ref) {
    const id = useId();

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
        <span id={`${id}-error`} aria-live="assertive" role="alert">This field is required</span>
    )

    return (
        <div className={styles.numberField}>
            <label htmlFor={id}>{label}</label>
            <div className={`${styles.fieldInput} ${showInvalid && value.length < 1 ? styles.invalid : ''}`}>
                {unitPosition === "start" && renderUnit()}
                <input
                    id={id}
                    type='text'
                    value={value}
                    aria-required='true'
                    aria-invalid={showInvalid}
                    aria-errormessage={showInvalid ? `${id}-error` : null}
                    onChange={handleChange}
                    ref={ref}
                ></input>
                {unitPosition === 'end' && renderUnit()}
            </div>
            {showInvalid && renderFieldRequired()}
        </div>
    );
});

NumberField.propTypes = {
    unit: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.number,
    onChange: PropTypes.func.isRequired,
    showInvalid: PropTypes.bool.isRequired,
    unitPosition: PropTypes.string.isRequired,
    ref: PropTypes.string.isRequired
}

export default NumberField;