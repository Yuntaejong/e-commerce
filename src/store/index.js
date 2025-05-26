import { configureStore } from '@reduxjs/toolkit';
import { combineReducers } from '@reduxjs/toolkit';

import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';

import authSlice from './slices/authSlice';        // 로그인 상태
import cartSlice from './slices/cartSlice';        // 장바구니 상태
import productSlice from './slices/productSlice';  // 상품 데이터
import uiSlice from './slices/uiSlice';           // UI 상태

const rootReducer = combineReducers({
	auth: authSlice,      // state.auth로 접근
	cart: cartSlice,      // state.cart로 접근  
	products: productSlice, // state.products로 접근
	ui: uiSlice,         // state.ui로 접근
});

const persistConfig = {
	key: 'root',
	storage,                        // localStorage 사용
	whitelist: ['cart', 'auth'],    // 장바구니, 로그인 상태만 유지
	blacklist: ['ui', 'products']   // UI, 상품 데이터는 매번 새로 로드
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

export const store = configureStore({
	reducer: persistedReducer,
	middleware: (getDefaultMiddleware) =>
		getDefaultMiddleware({
		serializableCheck: {
			ignoredActions: ['persist/PERSIST', 'persist/REHYDRATE'],
		},
		}),
	devTools: process.env.NODE_ENV !== 'production',
});
	
export const persistor = persistStore(store);