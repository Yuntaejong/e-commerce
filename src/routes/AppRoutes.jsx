import { ROUTES } from '../config/routes';

const AppRoutes = () => {
	return (
		<Routes>
			<Route path={ROUTES.HOME} element={<MainPage />} />
			<Route path={ROUTES.MEN} element={<MenPage />} />
			<Route path={ROUTES.WOMEN} element={<WomenPage />} />
			<Route path={ROUTES.BEST} element={<BestPage />} />
			<Route path={ROUTES.PRODUCT_DETAIL} element={<ProductDetailPage />} />
			<Route path={ROUTES.CART} element={<CartPage />} />
		</Routes>
	);
};

export default AppRoutes;