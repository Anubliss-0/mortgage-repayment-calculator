import { useState, useId, forwardRef } from 'react';
import PropTypes from 'prop-types';

import styles from './NumberField.module.scss'


const NumberField = forwardRef(function NumberField({ unit, label, value, onChange, showError, unitPosition }, ref) {
    const [isActive, setIsActive] = useState(false);
    const [mouseHover, setMouseHover] = useState(false);
    const inputId = useId();

    const handleFocus = () => {
        setIsActive(true);
        setMouseHover(false);
    }

    const handleBlur = () => {
        setIsActive(false);
    }

    const handleChange = (e) => {
        const newValue = e.target.value;
        const regex = /^-?\d*\.?\d*$/;

        if (regex.test(newValue)) {
            onChange(newValue)
        }
    }

    const handleMouseEnter = () => {
        if (!isActive) {
            setMouseHover(true)
        }
    }

    const handleMouseLeave = () => {
        setMouseHover(false)
    }

    const renderUnit = () => (
        <div className={styles.unit}>
            <span className={`${isActive ? styles.active : ''} ${showError ? styles.error : ''}`}>{unit}</span>
        </div>
    )


    const renderFieldRequired = () => (
        <span id={`${inputId}-error`}>This field is required</span>
    )

    return (
        <div className={styles.container}>
            <label htmlFor={inputId}>{label}</label>
            <div className={`${styles.fieldOuter} ${isActive ? styles.active : ''} ${mouseHover ? styles.hover : ''} ${showError ? styles.error : ''}`}>
                {unitPosition === "start" && renderUnit()}
                <input
                    id={inputId}
                    className={styles.input}
                    type='text'
                    value={value}
                    aria-required='true'
                    aria-invalid={showError}
                    aria-describedby={showError ? `${inputId}-error` : null}
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
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