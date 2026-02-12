import React from 'react';
import { Compass, Send } from 'lucide-react';
import './Root.css';

const RootPage = () => {
  // 코스 데이터를 배열로 관리합니다.
  const courses = [
    {
      id: 1,
      badge: "힙 & 트렌디",
      title: "성수동 힙한 갤러리 투어",
      desc: "영감과 인생샷을 동시에 잡는 MZ세대 맞춤형 코스입니다.",
      steps: [
        { type: 'EXHIBITION', name: '성수 크리에이티브 스페이스', sub: '네온 드림 전시' },
        { type: 'CAFE', name: '어니언 성수', sub: '인더스트리얼 감성 베이커리' },
        { type: 'RESTAURANT', name: '제스트 성수', sub: '모던 퓨전 다이닝' }
      ]
    },
    {
      id: 2,
      badge: "차분함 & 클래식",
      title: "종로의 과거와 현재",
      desc: "전통의 정취와 현대적 감각이 공존하는 깊이 있는 산책 코스입니다.",
      steps: [
        { type: 'EXHIBITION', name: '종로 갤러리', sub: '전통의 메아리 전시' },
        { type: 'CAFE', name: '수사동 커피하우스', sub: '조용한 한옥 감성 카페' },
        { type: 'EXHIBITION', name: '국립현대미술관', sub: '현대 추상 전시' }
      ]
    }
  ];

  return (
    <div className="course-container">
      <header className="course-header">
        <h2>예술 코스</h2>
        <p>당신의 감성을 채워줄 최적의 경로를 제안합니다.</p>
      </header>

      {courses.map((course) => (
        <div key={course.id} className="course-card-main" style={{ marginBottom: '30px' }}>
          <div className="course-badge">{course.badge}</div>
          <div className="floating-compass">
            <Compass size={20} color="#adb5bd" />
          </div>
          
          <h3 className="course-main-title">{course.title}</h3>
          <p className="course-main-desc">{course.desc}</p>

          <div className="course-timeline">
            {course.steps.map((step, idx) => (
              <div key={idx} className="timeline-item">
                <div className="step-circle">{idx + 1}</div>
                <div className="step-info">
                  <div className="step-tag-group">
                    <span className="step-type-label">{step.type}</span>
                    <span className="step-name-text">{step.name}</span>
                  </div>
                  <p className="step-sub-desc">{step.sub}</p>
                </div>
              </div>
            ))}
          </div>

          <button className="course-start-btn">
            <Send size={16} /> 코스 시작하기
          </button>
        </div>
      ))}
    </div>
  );
};

export default RootPage;