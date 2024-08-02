import { useState, useId, forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '@iconify/react';

import styles from './RadioButton.module.scss'

const RadioButton = forwardRef(function RadioButton({collectionName, label, value, selected, onChange}, ref) {
    const [mouseHover, setMouseHover] = useState(false);
    const id = useId();

    const renderCheckbox = () => selected ? <Icon icon="ph:radio-button-fill" /> : <Icon icon="ph:circle" />

    return (
        <div className={styles.radioButtonContainer}>
            <input
                type="radio"
                id={id}
                name={collectionName}
                value={value}
                onChange={onChange}
                checked={selected}
                className={styles.radioInput}
                ref={ref}
            />
            <label
                htmlFor={id}
                className={`${styles.radioButton} ${mouseHover ? styles.hover : ''} ${selected ? styles.selected : ''}`}
                onMouseEnter={() => setMouseHover(true)}
                onMouseLeave={() => setMouseHover(false)}
            >
                {label}
                <div className={styles.checkbox} role="checkbox" aria-checked={selected} aria-live="polite">
                    {renderCheckbox()}
                </div>
            </label>
        </div>
    )
})

RadioButton.propTypes = {
    collectionName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

export default RadioButton;