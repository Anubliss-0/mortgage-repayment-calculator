import React from 'react';
import styles from './NumberField.module.scss'
import { useState } from 'react';
import { useId } from 'react';

function NumberField({ unit, label, value, onChange, showError, unitPosition }) {
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

    const renderUnit = () => {
        return (
            <div className={styles.unit}>
                    <span className={`${isActive ? styles.active : ''} ${showError ? styles.error : ''}`}>{unit}</span>
            </div>
        );
    }

    const fieldRequired = () => showError ? <span>This field is required</span> : ''
    
    return (
        <div className={styles.container}>
            <label htmlFor={inputId}>{label}</label>
            <div className={`${styles.fieldOuter} ${isActive ? styles.active : ''} ${mouseHover ? styles.hover : ''} ${showError ? styles.error : ''}`}>
                {unitPosition === "start" ? renderUnit() : ''}
                <input
                    id={inputId}
                    className={styles.input}
                    type='text'
                    value={value}
                    aria-required='true'
                    onMouseEnter={handleMouseEnter}
                    onMouseLeave={handleMouseLeave}
                    onFocus={handleFocus}
                    onBlur={handleBlur}
                    onChange={handleChange}
                ></input>
                {unitPosition === 'end' ? renderUnit() : ''}
            </div>
            {fieldRequired()}
        </div>
    );
}

export default NumberField;