# Exchange-Nodejs

Exchange-Nodejs is an application developed to teach stock trading terminology. This backend API provides RESTful endpoints for stock trading operations.

## Installation

1. Clone the project repository:

    ```bash
    git clone https://github.com/username/exchange-nodejs.git
    cd evaexchange
    ```

2. Install dependencies:

    ```bash
    npm install
    ```

3. Set up environmental variables and create a `.env` file. Add the necessary configurations to your `.env` file.

4. Initialize the database:

    ```bash
    npx sequelize-cli db:migrate
    ```

5. Start the server:
    ```bash
    npm run dev
    ```

## Routes

### `/api/ping` (GET)

-   **Description:** Used to check if the server is running.
-   **Response:**
    ```json
    {
        "success": true,
        "message": "server is running",
        "date": "current_time"
    }
    ```

### `/api/trades/buy` (POST)

-   **Description:** Performs a buy transaction for a specified stock.
-   **Required Data:**
    ```json
    {
        "userId": "user_id",
        "symbol": "stock_symbol",
        "quantity": "number_of_shares"
    }
    ```
-   **Response:** Details of the created buy transaction.

### `/api/trades/sell` (POST)

-   **Description:** Performs a sell transaction for a specified stock.
-   **Required Data:**
    ```json
    {
        "userId": "user_id",
        "symbol": "stock_symbol",
        "quantity": "number_of_shares"
    }
    ```
-   **Response:** Details of the created sell transaction.

### `/api/users/portfolio` (POST)

-   **Description:** Creates or updates a user's portfolio.
-   **Required Data:**
    ```json
    {
        "userId": "user_id",
        "balance": "user_balance"
    }
    ```
-   **Response:** Details of the created or updated portfolio.

### `/api/admin/bulk-insert` (POST)

-   **Description:** Performs a bulk insert operation for users and shares into the database.
-   **Required Data:**
    ```json
    {
        "users": [
            {
                "name": "user_name"
            }
        ],
        "shares": [
            {
                "symbol": "stock_symbol",
                "price": "stock_price"
            }
        ]
    }
    ```
-   **Response:** Details of the bulk insert operation.

### `/api/admin/bulk-update` (PUT)

-   **Description:** Performs a bulk update operation for users and shares in the database.
-   **Required Data:**
    ```json
    {
        "users": [
            {
                "id": "user_id",
                "name": "user_name"
            }
        ],
        "shares": [
            {
                "symbol": "stock_symbol",
                "price": "stock_price"
            }
        ]
    }
    ```
-   **Response:** Details of the bulk update operation.
