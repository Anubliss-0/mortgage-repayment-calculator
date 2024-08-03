import { forwardRef } from 'react';
import PropTypes from 'prop-types';

import { Icon } from '@iconify/react';

import styles from './RadioButton.module.scss'

const RadioButton = forwardRef(function RadioButton({ collectionName, label, value, selected, onChange }, ref) {
    const renderCheckbox = () => selected ? <Icon icon="ph:radio-button-fill" className={styles.checkbox} /> : <Icon icon="ph:circle" className={styles.checkbox} />

    return (
        <label className={`${styles.radioButton} ${selected ? styles.checked : null}`}>
            {renderCheckbox()}
            <input
                type="radio"
                name={collectionName}
                value={value}
                onChange={onChange}
                className={styles.input}
                ref={ref}
            />
            {label}
        </label>
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