import { Provider } from 'react-redux';
import store from '../store';
import PriceTable from '../components/PriceTable';
import SymbolSelector from '../components/SymbolSelector';
import styles from '../styles/Home.module.css';

const Home = () => {
    return (
        <Provider store={store}>
            <div className={styles.container}>
                <h1 className={styles.title}>Real-Time Price Data</h1>
                <SymbolSelector />
                <PriceTable />
            </div>
        </Provider>
    );
};

export default Home;
