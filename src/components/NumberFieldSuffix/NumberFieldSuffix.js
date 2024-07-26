import React from 'react';
import styles from './NumberFieldSuffix.module.scss'
import { useState } from 'react';
import { useId } from 'react';

function NumberFieldSuffix({ suffixText, label }) {
    const [isActive, setIsActive] = useState(false);
    const [mouseHover, setMouseHover] = useState(false);
    const [value, setValue] = useState('');
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
            setValue(newValue)
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

    return (
        <div className={styles.container}>
            <label htmlFor={inputId}>{label}</label>
            <div className={`${styles.fieldOuter} ${isActive ? styles.active : ''} ${mouseHover ? styles.hover : ''}`}>
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
                <div className={styles.suffix}>
                    <span className={isActive ? styles.active : ''}>{suffixText}</span>
                </div>
            </div>
        </div>
    );
}

export default NumberFieldSuffix;