import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { store } from './store';

// 페이지들
import MainPage from './pages/MainPage';
import LoginPage from './pages/LoginPage';
import CartPage from './pages/CartPage';
import MenPage from './pages/MenPage';
import WomenPage from './pages/WomenPage';
import BestPage from './pages/BestPage';
import ProductDetailPage from './pages/ProductDetailPage';

// 컴포넌트

//Bootstrap
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

// 전역 스타일
import './styles/globals.css'
import './App.css';

function App() {
	return (
		<Provider store={store}>
			<Router>
				<div className="App">
					<Routes>
						<Route path="/" element={<MainPage />} />
						<Route path="/login" element={<LoginPage />} />
						<Route path="/cart" element={<CartPage />} />
						<Route path="/men" element={<MenPage />} />
						<Route path="/women" element={<WomenPage />} />
						<Route path="/best" element={<BestPage />} />
						<Route path="/product/:id" element={<ProductDetailPage />} />
					</Routes>
				</div>
			</Router>
		</Provider>
	);
}

export default App;
