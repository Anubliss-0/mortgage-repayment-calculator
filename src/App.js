import LanguageSelect from './components/LanguageSelect/LanguageSelect.js';
import MortgageCalculator from './components/MortageCalculator/MortageCalculator.js';

import styles from './App.module.scss'

function App() {
  return (
    <div className={styles.container}>
        <LanguageSelect />
        <MortgageCalculator />
    </div>
  )
}

export default App;