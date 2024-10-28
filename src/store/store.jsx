import { configureStore } from "@reduxjs/toolkit";
import cartSlice from "./cartSlice";
import {persistStore,persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import { FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER } from "redux-persist";

const persistConfig = {
  key:'cart',
  storage,
}

const persistedCartReducer = persistReducer(persistConfig,cartSlice)

const store = configureStore({
  reducer: {
    cart: persistedCartReducer
  },
  middleware:(getDefaultMiddleware)=>
    getDefaultMiddleware({
      serializableCheck:{
        ignoredActions:[FLUSH,REHYDRATE,PAUSE,PERSIST,PURGE,REGISTER]
      },
    }),
});

export const persistor = persistStore(store);
export default store;
