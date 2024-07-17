import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPrices, selectPrices, selectCurrentSymbol } from '../slices/priceSlice';
import styles from './PriceTable.module.css';

const PriceTable = () => {
    const dispatch = useDispatch();
    const prices = useSelector(selectPrices);
    const currentSymbol = useSelector(selectCurrentSymbol);

    useEffect(() => {
        dispatch(fetchPrices(currentSymbol));
        const interval = setInterval(() => {
            dispatch(fetchPrices(currentSymbol));
        }, 5000);
        return () => clearInterval(interval);
    }, [dispatch, currentSymbol]);

    return (
        <div className={styles.container}>
            <table className={styles.table}>
                <thead>
                    <tr>
                        <th>Serial No. <span role="img" aria-label="number">🔢</span></th>
                        <th>Symbol <span role="img" aria-label="symbol">🔣</span></th>
                        <th>Price <span role="img" aria-label="money">💰</span></th>
                        <th>Timestamp <span role="img" aria-label="clock">🕒</span></th>
                    </tr>
                </thead>
                <tbody>
                    {prices.map((price, index) => (
                        <tr key={price.timestamp}>
                            <td>{index + 1}</td>
                            <td>{price.symbol}</td>
                            <td>{price.price}</td>
                            <td>{new Date(price.timestamp).toLocaleString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default PriceTable;
