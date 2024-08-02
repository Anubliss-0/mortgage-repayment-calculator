import { useState, useId } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '@iconify/react';

import styles from './RadioButton.module.scss'

function RadioButton({ collectionName, label, value, selected, onChange }) {
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
            />
            <label
                htmlFor={id}
                className={`${styles.radioButton} ${mouseHover ? styles.hover : ''} ${selected ? styles.selected : ''}`}
                onMouseEnter={() => setMouseHover(true)}
                onMouseLeave={() => setMouseHover(false)}
                aria-live="polite" // Informing about dynamic changes
            >
                {label}
                <div className={styles.checkbox} role="checkbox" aria-checked={selected} aria-live="polite">
                    {renderCheckbox()}
                </div>
            </label>
        </div>
    )
}

RadioButton.propTypes = {
    collectionName: PropTypes.string.isRequired,
    label: PropTypes.string.isRequired,
    value: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onChange: PropTypes.func.isRequired
}

export default RadioButton;