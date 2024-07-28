import styles from './RadioButton.module.scss'
import { Icon } from '@iconify/react';
import { useState } from 'react';
import { useId } from 'react'

function RadioButton({ collectionName, label, value, selected, onChange }) {
    const [mouseHover, setMouseHover] = useState(false);
    const id = useId();

    const handleMouseEnter = () => {
        setMouseHover(true)
    }

    const handleMouseLeave = () => {
        setMouseHover(false)
    }

    const toggleCheckbox = () =>
         selected ? <Icon icon="ph:radio-button-fill" /> : <Icon icon="ph:circle" />

    return (
        <label
            className={`${styles.radioButton} ${mouseHover ? styles.hover : ''} ${selected ? styles.selected : ''}`}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >{label}
            <div className={styles.checkbox}>
                {toggleCheckbox()}
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