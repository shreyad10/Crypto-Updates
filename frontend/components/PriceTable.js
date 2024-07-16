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
                        <th>Serial No.</th>
                        <th>Symbol</th>
                        <th>Price</th>
                        <th>Timestamp</th>
                    </tr>
                </thead>
                <tbody>
                    {prices.map((price) => (
                        <tr key={price.timestamp}>
                            <td></td>
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
