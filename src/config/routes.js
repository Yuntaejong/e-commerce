export const ROUTES = {
	HOME: '/',
	LOGIN: '/login',
	MEN: '/men',
	WOMEN: '/women',
	BEST: '/best',
	PRODUCT_DETAIL: '/product/:id',
	CART: '/cart',
	
	// 동적 라우트 생성 함수
	getProductDetail: (id) => `/product/${id}`,
	getSearch: (query) => `/search?q=${encodeURIComponent(query)}`
};
