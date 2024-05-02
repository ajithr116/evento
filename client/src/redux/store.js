import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './features/client/clientSlice'; // Corrected import

const store = configureStore({
    reducer: {
        client: rootReducer,
    }
});

export default store;
