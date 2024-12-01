# Reown Blockchain Explorer

A lightweight, feature-rich Ethereum NFT and balance explorer. This application allows users to input any Ethereum address and retrieve associated blockchain data, showcasing NFTs, balances, and more. The app is optimized for a smooth user experience and responsive design, all while leveraging modern frontend technologies.

---

## Features

- **Wallet Integration**: Users can connect and disconnect Ethereum wallets using `wagmi`.
- **NFT Explorer**: Fetches and displays NFTs owned by a specific Ethereum address.
- **Balance Viewer**: Retrieves and displays the Ethereum balance for the provided address.
- **State Management**: Powered by `Zustand` for a clean, efficient state management experience.
- **Loading & Error Handling**: Includes interactive loading spinners and contextual error messages.
- **Responsive Design**: Fully responsive layout optimized for both desktop and mobile users.
- **Validation**: Built-in validation for Ethereum addresses using `Tippy.js`.

---

## Technologies Used

### Core Libraries

1. **[Next.js](https://nextjs.org/)**  
   - A React framework used for its powerful features like server-side rendering, static site generation, and API routes.

2. **[React](https://reactjs.org/)**  
   - Component-based architecture used for building reusable UI components.

3. **[TypeScript](https://www.typescriptlang.org/)**  
   - Strongly typed JavaScript for better developer productivity and fewer runtime errors.

4. **[Tailwind CSS](https://tailwindcss.com/)**  
   - Utility-first CSS framework used to create custom designs directly in the markup.

### Blockchain Integration

1. **[Wagmi](https://wagmi.sh/)**  
   - A collection of React hooks for Ethereum development, simplifying wallet connection, balance fetching, and more.

2. **[Alchemy SDK](https://docs.alchemy.com/)**  
   - Enables efficient interaction with blockchain data for fetching NFT and token information.

3. **[Ethers.js](https://docs.ethers.org/)**  
   - Lightweight library for Ethereum-related operations, used for fetching balances and interacting with smart contracts.

### State Management

- **[Zustand](https://zustand-demo.pmnd.rs/)**  
  A minimalistic and flexible state management library for React, enabling effortless store creation and state sharing.

### User Interface

- **[Heroicons](https://heroicons.com/)**  
  A free collection of SVG icons for modern UI components.

- **[Tippy.js](https://atomiks.github.io/tippyjs/)**  
  Tooltip library for providing user feedback and inline error messages.

### API and Utilities

- **Debouncing with Lodash**: To optimize input handling and reduce redundant network calls.
- **Validation Utilities**: Custom utility functions for Ethereum address validation.
- **Alchemy Enhanced APIs**: Used for retrieving NFT data with enhanced metadata.

---

## Installation Steps

1. **Clone the Repository**  
   `git clone https://github.com/yourusername/reown-blockchain-explorer.git`

2. **Install Dependencies**  
   Navigate to the project folder and run:  
   `npm install`

3. **Set Up Alchemy API Key**  
   Create a `.env` file in the root directory and add:  
   `NEXT_PUBLIC_ALCHEMY_API_KEY=your-api-key`

4. **Run the Application**  
   - For development: `npm run dev`  
   - For production:  
     1. Build the app: `npm run build`  
     2. Start the app: `npm start`

5. **Open the Application**  
   Navigate to `http://localhost:3000` in your browser.

---

## How It Works

1. **Connect Wallet**  
   - Users connect their Ethereum wallet using `wagmi` hooks. Connection status is displayed in real-time.

2. **Input Address**  
   - Users can input an Ethereum address in the search bar. The address is validated and stored in the `Zustand` store.

3. **Fetch NFTs**  
   - The app fetches NFTs using Alchemy's enhanced API and displays them in a responsive grid.

4. **View Balances**  
   - The Ethereum balance for the provided address is fetched and displayed.

5. **Interactive Error Handling**  
   - Invalid Ethereum addresses and network errors are handled gracefully with user feedback.

---

## Hosted on Vercel

The application is hosted on Vercel and can be accessed at:  
[https://reown-blockchain-explorer.vercel.app](https://reown-blockchain-explorer.vercel.app)

---

## Folder Structure

- **`components/`**  
  Reusable UI components like `Card`, `ConnectButton`, and `Header`.

- **`hooks/`**  
  Contains custom hooks like `useAlchemyNFT`.

- **`store/`**  
  Includes the `Zustand` store for managing application state.

- **`utils/`**  
  Utility functions such as `truncateEthAddress` and Alchemy configuration.

- **`pages/`**  
  Next.js pages and routing logic.

---

## Future Improvements

- Add support for fetching ERC-20 token balances.
- Implement paginated fetching for large NFT collections.
- Enhance the UI with animations and transitions.
- Support additional blockchain networks (e.g., Polygon, Binance Smart Chain).

---

## License

This project is open-source and available under the MIT License.
