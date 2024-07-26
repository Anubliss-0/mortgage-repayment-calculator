import React from 'react';
import styles from './NumberFieldPrefix.module.scss'
import { useState } from 'react';

function NumberFieldPrefix() {
    const [isActive, setIsActive] = useState(false);
    const [mouseHover, setMouseHover] = useState(false);
    const [value, setValue] = useState('');

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
        <div className={`${styles.fieldOuter} ${isActive ? styles.active : ''} ${mouseHover ? styles.hover : ''}`}>
            <div className={styles.prefix}>
                <p className={isActive ? styles.active : ''}>Prefix</p>
            </div>
            <input
                className={styles.input}
                type='text'
                value={value}
                onMouseEnter={handleMouseEnter}
                onMouseLeave={handleMouseLeave}
                onFocus={handleFocus}
                onBlur={handleBlur}
                onChange={handleChange}
            ></input>
        </div>
    );
}

export default NumberFieldPrefix;