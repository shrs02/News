import {configureStore} from '@reduxjs/toolkit';
import ASlice from './ASlice';

const store = configureStore({
    reducer: {
        log : ASlice,
    }
});


export default store;