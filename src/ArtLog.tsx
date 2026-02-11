import React from 'react';
import './ArtLog.css';

const ArtLog: React.FC = () => {
  return (
    <div className="art-log-container">
      {/* Header */}
      <header className="header">
        <h1 className="logo">ART-LOG</h1>
        <div className="header-icons">
          <div className="icon-bell">🔔</div>
          <div className="icon-user">👤</div>
        </div>
      </header>
      <p className="subtitle">감각적인 예술 탐험을 위한 데이터 기반 큐레이션</p>

      {/* Hero Banner (AI Assistant) */}
      <section className="ai-banner">
        <div className="ai-badge">✨ PERSONAL AI ASSISTANT</div>
        <h2 className="ai-title">"오늘은 종로의 감성에 빠져볼까요?"</h2>
        <p className="ai-desc">평소 좋아하시는 미니멀리즘 조각 전시를 바탕으로, 오늘은 북촌의 조용한 갤러리 산책을 추천드려요.</p>
        <button className="cta-button">추천 전시 보기 <span>&gt;</span></button>
        <div className="update-time">🕒 JUST UPDATED</div>
      </section>

      {/* Trending Section */}
      <section className="section">
        <div className="section-header">
          <h3>지금 화제인 전시 <span className="eng-sub">TOP TRENDING NOW</span></h3>
          <button className="view-all">VIEW ALL</button>
        </div>
        <div className="horizontal-scroll">
          <div className="exhibit-card">
            <div className="exhibit-image">
              <div className="tags">
                <span className="tag">추상화</span>
                <span className="tag">국립현대미술관</span>
                <span className="tag">서울</span>
              </div>
            </div>
            <div className="exhibit-info">
              <h4>현대 추상의 영혼: 내면의 울림</h4>
              <p className="author">김민서 작가</p>
              <p className="location">📍 국립현대미술관 서울관</p>
            </div>
          </div>
          {/* 추가 카드들... */}
        </div>
      </section>

      {/* Premium Docent Section */}
      <section className="section">
        <div className="section-header">
          <h3>프리미엄 도슨트 <span className="eng-sub">EXPERT CURATION GUIDES</span></h3>
          <button className="view-all">전체보기</button>
        </div>
        <div className="docent-list">
          <DocentItem name="아티 (AI 가이드)" info="추상화, 디지털 아트, 빠른 요약" price="무료 (AI)" rating={4.8} reviews={1250} isAI={true} />
          <DocentItem name="김사랑 도슨트" info="현대미술, 미술사학" price="45,000원" rating={4.9} reviews={320} />
          <DocentItem name="정대석 큐레이터" info="르네상스, 유화 테크닉" price="60,000원" rating={5.0} reviews={156} />
        </div>
      </section>

      {/* Daily Course Section */}
      <section className="section last-section">
        <div className="section-header">
          <h3>추천 나들이 코스 <span className="eng-sub">CURATED DAILY ROUTES</span></h3>
          <button className="view-all">전체보기</button>
        </div>
        <CourseCard tag="힙 & 트렌디" title="성수동 힙한 갤러리 투어" desc="영감과 인생샷을 동시에 잡는 MZ세대 맞춤형 코스입니다." />
        <CourseCard tag="차분함 & 클래식" title="종로의 과거와 현재" desc="전통의 정취와 현대적 감각이 공존하는 깊이 있는 산책 코스입니다." />
      </section>

      {/* Bottom Navigation */}
      <nav className="bottom-nav">
        <div className="nav-item active">🏠<span>홈</span></div>
        <div className="nav-item">🗺️<span>지도</span></div>
        <div className="nav-item">🎙️<span>가이드</span></div>
        <div className="nav-item">🧭<span>코스</span></div>
        <div className="nav-item">🎁<span>기프트</span></div>
      </nav>
    </div>
  );
};

// Sub-components for cleaner code
const DocentItem = ({ name, info, price, rating, reviews, isAI }: any) => (
  <div className="docent-card">
    <div className="docent-avatar">{isAI ? '🤖' : '👤'}</div>
    <div className="docent-info">
      <div className="docent-header">
        <span className="docent-name">{name}</span>
        <span className="docent-rating">⭐ {rating} ({reviews})</span>
      </div>
      <p className="docent-sub">{info}</p>
      <p className="docent-price">{price}</p>
    </div>
    <button className={`docent-btn ${isAI ? 'ai-btn' : ''}`}>{isAI ? '해설 시작' : '예약하기'}</button>
  </div>
);

const CourseCard = ({ tag, title, desc }: any) => (
  <div className="course-card">
    <div className="course-content">
      <span className="course-tag">{tag}</span>
      <h4>{title}</h4>
      <p>{desc}</p>
    </div>
    <div className="course-icon">🧭</div>
  </div>
);

export default ArtLog;