import React from 'react';
import './App.css';

// 1. 실제 데이터처럼 보이게 배열 만들기 (임시 이미지 사용)
const EXHIBITION_DATA = [
    {
        id: 1,
        title: '현대의 속삭임',
        location: '김세아 • 서울시립미술관',
        price: '15,000원',
        // 픽섬 플레이스홀더 이미지를 사용해 빈칸을 채웁니다
        image: 'https://picsum.photos/seed/art1/400/300',
        tags: ['#현대미술', '#사진전'],
    },
    {
        id: 2,
        title: '빛의 메아리',
        location: '이정후 • 국립현대미술관',
        price: '무료',
        image: 'https://picsum.photos/seed/art2/400/300',
        tags: ['#미디어아트', '#추상화'],
    },
];

function App() {
    return (
        <div className="app-container">
            <header className="header">
                <h1>ArtMate</h1>
                <p>당신의 일상에 영감을 더하는 큐레이션</p>
            </header>

            <main className="section">
                <div className="section-title">
                    <h2>지금 뜨는 전시</h2>
                    <span className="view-all">전체보기</span>
                </div>

                {/* 2. 가로 스크롤을 위한 카드 컨테이너 */}
                <div className="card-container">
                    {EXHIBITION_DATA.map((item) => (
                        <div className="art-card" key={item.id}>
                            {/* 가격표 배지 추가 */}
                            <div className="price-badge">{item.price}</div>
                            <img className="card-image" src={item.image} alt={item.title} />
                            <div className="card-content">
                                <h3>{item.title}</h3>
                                <p>{item.location}</p>
                                <div className="tag-container">
                                    {item.tags.map((tag, index) => (
                                        <span className="tag" key={index}>
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </main>

            {/* 3. 하단 네비게이션 아이콘과 텍스트 병합 */}
            <nav className="bottom-nav">
                <div className="nav-item active">
                    <span>🏠</span>홈
                </div>
                <div className="nav-item">
                    <span>🗺️</span>지도
                </div>
                <div className="nav-item">
                    <span>🎙️</span>도슨트
                </div>
                <div className="nav-item">
                    <span>👤</span>마이
                </div>
            </nav>
        </div>
    );
}

export default App;
