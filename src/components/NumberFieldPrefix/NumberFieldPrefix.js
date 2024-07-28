import React from 'react';
import styles from './NumberFieldPrefix.module.scss'
import { useState } from 'react';
import { useId } from 'react';

function NumberFieldPrefix({ prefixText, label, value, onChange }) {
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

    return (
        <div className={styles.container}>
            <label htmlFor={inputId}>{label}</label>
            <div className={`${styles.fieldOuter} ${isActive ? styles.active : ''} ${mouseHover ? styles.hover : ''}`}>
                <div className={styles.prefix}>
                    <span className={isActive ? styles.active : ''}>{prefixText}</span>
                </div>
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
            </div>
        </div>
    );
}

export default NumberFieldPrefix;