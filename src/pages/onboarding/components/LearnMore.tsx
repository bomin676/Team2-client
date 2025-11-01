import React from "react";

type Props = {
  onBack: () => void;
  onStart: () => void;
};

export default function LearnMore({ onBack, onStart }: Props) {
  const shell: React.CSSProperties = { width: "100%" };

  const wrap: React.CSSProperties = {
    width: "100%", display: "grid", gap: 28,
    justifyItems: "center", textAlign: "center",
  };

  const title: React.CSSProperties = {
    margin: 0, fontWeight: 900, letterSpacing: "-.02em",
    fontSize: "clamp(26px, 5.4vw, 56px)", lineHeight: 1.1,
  };

  const subtitle: React.CSSProperties = {
    margin: 0, color: "#6b7280", fontSize: "clamp(14px, 2vw, 18px)",
  };

  const grid: React.CSSProperties = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "repeat(4, minmax(0, 1fr))",
    gap: 24,
  };

  const card: React.CSSProperties = {
    background: "#fff",
    border: "1px solid #ecebf6",
    borderRadius: 24,
    boxShadow: "0 12px 36px rgba(31,41,55,.08)",
    padding: 24,
    textAlign: "left",
    display: "grid",
    gap: 14,
  };

  const iconWrap = (bg: string, color: string): React.CSSProperties => ({
    width: 44, height: 44, borderRadius: 12,
    background: bg, color, display: "grid", placeItems: "center", fontSize: 22,
  });

  const cardTitle: React.CSSProperties = {
    margin: 0, fontWeight: 800, fontSize: 20, color: "#0f172a",
  };

  const cardDesc: React.CSSProperties = {
    margin: 0, color: "#6b7280", fontSize: 16, lineHeight: 1.6,
  };

  const actions: React.CSSProperties = {
    display: "flex", gap: 12, justifyContent: "center",
  };
  const btnBase: React.CSSProperties = {
    appearance: "none", borderRadius: 12, fontWeight: 800, fontSize: 16,
    padding: "12px 18px", cursor: "pointer", border: "1px solid #e5e7eb",
    background: "#fff",
  };
  const btnPrimary: React.CSSProperties = {
    ...btnBase, background: "#7c6cf3", color: "#fff", border: "none",
  };

  // 반응형: 부모 레이아웃에서 컬럼 수를 바꾸고 싶다면 gridTemplateColumns만 조절하세요.
  // (예: 2열로) gridTemplateColumns: "repeat(2, minmax(0,1fr))"

  return (
    <section style={shell} aria-label="작동 방식">
      <div style={wrap}>
        <div>
          <h2 style={title}>어떻게 작동하나요?</h2>
          <p style={subtitle}>4단계로 완성되는 나만의 브랜딩</p>
        </div>

        <div style={grid}>
          {/* 1. 캐릭터 생성 */}
          <div style={card}>
            <div style={iconWrap("#efeafe", "#6e62d7")} aria-hidden>✨</div>
            <h3 style={cardTitle}>캐릭터 생성</h3>
            <p style={cardDesc}>
              나를 대표하는 캐릭터를 선택하고 개성을 부여하세요.
            </p>
          </div>

          {/* 2. AI 멘토 대화 */}
          <div style={card}>
            <div style={iconWrap("#f3ecff", "#9b71f8")} aria-hidden>🎯</div>
            <h3 style={cardTitle}>AI 멘토 대화</h3>
            <p style={cardDesc}>
              AI 멘토와 대화하며 당신의 강점과 성향을 발견하세요.
            </p>
          </div>

          {/* 3. 인사이트 분석 */}
          <div style={card}>
            <div style={iconWrap("#e9f7f5", "#3fb0a6")} aria-hidden>🎨</div>
            <h3 style={cardTitle}>인사이트 분석</h3>
            <p style={cardDesc}>
              대화 내용을 분석하여 개인 특성 리포트를 생성합니다.
            </p>
          </div>

          {/* 4. 브랜딩 자료 */}
          <div style={card}>
            <div style={iconWrap("#eef0ff", "#5f6ff0")} aria-hidden>🧾</div>
            <h3 style={cardTitle}>브랜딩 자료</h3>
            <p style={cardDesc}>
              포트폴리오, 자기소개서 등 맞춤형 브랜딩 자료를 받아보세요.
            </p>
          </div>
        </div>

        <div style={actions}>
          <button style={btnPrimary} onClick={onStart}>시작하기</button>
          <button style={btnBase} onClick={onBack}>돌아가기</button>
        </div>
      </div>
    </section>
  );
}
