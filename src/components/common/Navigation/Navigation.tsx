import React, { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router-dom";
import { Container, Navbar, Nav } from 'react-bootstrap';

import styles from "./Navigation.module.css"

const Navigation = () => {
	// 상태 관리
	const [isMenuOpen, setIsMenuOpen] = useState(false);
	const [isDarkMode, setIsDarkMode] = useState(false);
	const [cartCount, setCartCount] = useState(3);
	const [wishlistCount, setWishlistCount] = useState(5);
	const [searchQuery, setSearchQuery] = useState('');
	const [isScrolled, setIsScrolled] = useState(false);
	const [activeSubmenu, setActiveSubmenu] = useState<string | null>(null);
	const navigate = useNavigate();

	// 스크롤 감지
	useEffect(() => {
		const handleScroll = () => {
			setIsScrolled(window.scrollY > 20);
		};
		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	// 이벤트 핸들러
	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen);
	};

	const toggleDarkMode = () => {
		setIsDarkMode(!isDarkMode);
	};

	const handleSearch = (e: React.FormEvent<HTMLFormElement> | React.MouseEvent<HTMLButtonElement>) => {
		e.preventDefault();
		console.log('검색:', searchQuery);
	};

	const handleNavigation = (path: string) => {
		navigate(path);
		setIsMenuOpen(false);
	};

	// 서브메뉴 관련 이벤트
	const handleGnbMouseEnter = () => {
		setActiveSubmenu('show');
	};

	const handleGnbMouseLeave = () => {
		setActiveSubmenu(null);
	};

	// 네비게이션 아이템
	const navItems = [
		{ name: '남성', path: '/men' },
		{ name: '여성', path: '/women' },
		{ name: '베스트', path: '/best' }
	];
	// 서브메뉴 데이터
	const subMenuData = {
		men: [
			{ name: '상의', path: '/men/top' },
			{ name: '하의', path: '/men/bottom' },
			{ name: '신발', path: '/men/shoes' }
		],
		women: [
			{ name: '상의', path: '/women/top' },
			{ name: '하의', path: '/women/bottom' },
			{ name: '신발', path: '/women/shoes' }
		],
		best: []
	};

	return (
		<Navbar className={`${styles.container} ${styles.navi}`}>
			<Container fluid>
				<div className={styles.gnb}>
					<h1><Link to="/" className={styles.logo}>옷장마켓</Link></h1>
					<div className={styles.nav}>
						{navItems.map((item) => (
							<Link
								key={item.name}
								to={item.path}
								className={styles.navLink}
							>
								{item.name}
							</Link>
						))}					
					</div>
				</div>
				{/* 우측 아이콘들 */}
				<div className={styles.lnb}>
					{/* 사용자 */}
					<button onClick={() => handleNavigation('/login')}>
						<span>Login</span>
					</button>
					<div>
					<input
							type="text"
							value={searchQuery}
							onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchQuery(e.target.value)}
							placeholder="상품을 검색해보세요..."
							onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => e.key === 'Enter' && handleSearch(e as any)}
						/>
						{/* 검색 아이콘 */}
						<button onClick={handleSearch}>검색</button>
					</div>
					{/* 장바구니 */}
					<button onClick={() => handleNavigation('/cart')}>
						<span>장바구니</span>
						{cartCount > 0 && (
						<span>{cartCount}</span>
						)}
					</button>
					{/* 다크모드 토글 */}
					<button onClick={toggleDarkMode}>
						{isDarkMode ? (
							<img src="/icons/light.png" alt="라이트모드" />
						) : (
							<img src="/icons/dark.png" alt="다크모드" />
						)}
					</button>
				</div>
			</Container>
		</Navbar>
	);
};

export default Navigation;