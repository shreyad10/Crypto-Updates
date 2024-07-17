import { useDispatch, useSelector } from 'react-redux';
import { setCurrentSymbol, selectCurrentSymbol } from '../slices/priceSlice';
import styles from './SymbolSelector.module.css';

const SymbolSelector = () => {
    const dispatch = useDispatch();
    const currentSymbol = useSelector(selectCurrentSymbol);

    const handleSymbolChange = (e) => {
        dispatch(setCurrentSymbol(e.target.value));
    };

    return (
        <div className={styles.selectorContainer}>
            <label htmlFor="symbol" className={styles.label}>
                Select Symbol: <span role="img" aria-label="chart">📈</span>
            </label>
            <select
                id="symbol"
                value={currentSymbol}
                onChange={handleSymbolChange}
                className={styles.select}
            >
                <option value="bitcoin">Bitcoin</option>
                <option value="ethereum">Ethereum</option>
                {/* Add more options as needed */}
            </select>
        </div>
    );
};

export default SymbolSelector;
