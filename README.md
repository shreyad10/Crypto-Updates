# Crypto-Updates

## Prerequisites

- Node.js (>=14.x)
- MongoDB

## Backend Setup

1. **Navigate to the backend directory:**

    ```bash
    cd backend
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Set up environment variables:**

    Create a `.env` file in the `backend` directory and add the following:

    ```env
    MONGODB_URI=your_mongodb_connection_string
    PORT=3001
    ```

4. **Start the backend server:**

    ```bash
    npm start
    ```

    The backend server should now be running on `http://localhost:3001`.

## Frontend Setup

1. **Navigate to the frontend directory:**

    ```bash
    cd ../frontend
    ```

2. **Install the dependencies:**

    ```bash
    npm install
    ```

3. **Start the frontend development server:**

    ```bash
    npm run dev
    ```

    The frontend server should now be running on `http://localhost:3000`.

## Running the Application

1. **Start the backend server (if not already running):**

    ```bash
    cd backend
    npm start
    ```

2. **Start the frontend server (if not already running):**

    ```bash
    cd frontend
    npm run dev
    ```

3. **Open your browser and navigate to `http://localhost:3000` to view the application.**

## Project Features

- **Backend**:
  - Polls real-time data every few seconds for selected stocks or cryptocurrencies from an API (e.g., LiveCoinWatch, CoinGecko).
  - Stores the data in a MongoDB database.

- **Frontend**:
  - Fetches the most recent 20 real-time data entries from the MongoDB database for a particular stock or cryptocurrency and displays them in a dynamic table.
  - Includes a symbol selector to change the displayed stock or cryptocurrency.

## Customization

- To add more cryptocurrencies or stocks to the selector, modify the options in `components/SymbolSelector.js`.
- To change the polling interval, update the interval in the `useEffect` hook in `components/PriceTable.js`.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for more details.
