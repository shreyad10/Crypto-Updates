import { useDispatch, useSelector } from "react-redux";
import { setCurrentSymbol, selectCurrentSymbol } from "../slices/priceSlice";
import styles from "./SymbolSelector.module.css";

const SymbolSelector = () => {
  const dispatch = useDispatch();
  const currentSymbol = useSelector(selectCurrentSymbol);

  const handleSymbolChange = (e) => {
    dispatch(setCurrentSymbol(e.target.value));
  };

  return (
    <div className={styles.selectorContainer}>
      <label htmlFor="symbol" className={styles.label}>
        Select Symbol:{" "}
        <span role="img" aria-label="chart">
          📈
        </span>
        <select
          id="symbol"
          value={currentSymbol}
          onChange={handleSymbolChange}
          className={styles.select}
        >
          <option value="bitcoin">Bitcoin</option>
          <option value="ethereum">Ethereum</option>
          <option value="cardano">Cardano</option>
          <option value="solana">Solana</option>
          <option value="tether">Tether</option>
        </select>
      </label>
    </div>
  );
};

export default SymbolSelector;
