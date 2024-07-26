import React from 'react';
import styles from './NumberFieldPrefix.module.scss'

function NumberFieldPrefix() {
    return (
        <div className={styles.fieldOuter}>
            <div className={styles.prefix}>
                <p>Prefix</p>
            </div>
            <input className={styles.input}></input>
        </div>
    );
}

export default NumberFieldPrefix;