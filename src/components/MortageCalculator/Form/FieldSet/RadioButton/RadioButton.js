import { useState, useId } from 'react';

import { Icon } from '@iconify/react';

import styles from './RadioButton.module.scss'

function RadioButton({ collectionName, label, value, selected, onChange }) {
    const [mouseHover, setMouseHover] = useState(false);
    const id = useId();

    const renderCheckbox = () => selected ? <Icon icon="ph:radio-button-fill" /> : <Icon icon="ph:circle" />

    return (
        <label
            className={`${styles.radioButton} ${mouseHover ? styles.hover : ''} ${selected ? styles.selected : ''}`}
            onMouseEnter={() => setMouseHover(true)}
            onMouseLeave={() => setMouseHover(false)}
        >{label}
            <div className={styles.checkbox}>
                {renderCheckbox()}
            </div>
            <input
                type='radio'
                id={id}
                name={collectionName}
                value={value}
                onChange={onChange}
            ></input>
        </label>
    )
}

export default RadioButton;