import React from "react";

type Props = {
  onStart: () => void;
  onLearnMore: () => void;
};

export default function HomeHero({ onStart, onLearnMore }: Props) {
  // 전체 섹션(정중앙)
  const shell: React.CSSProperties = {
    position: "relative",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    padding: "6vh 4vw",
    overflow: "hidden",
    background: "#f7f6fb",
  };

  // 은은한 배경 글로우 2개
  const glowCommon: React.CSSProperties = {
    position: "absolute",
    width: 900,
    height: 900,
    filter: "blur(120px)",
    opacity: 0.7,
    pointerEvents: "none",
  };
  const glowTop: React.CSSProperties = {
    ...glowCommon,
    top: -380,
    left: "50%",
    transform: "translateX(-50%)",
    background:
      "radial-gradient(closest-side, rgba(217,210,255,0.8), rgba(217,210,255,0) 70%)",
  };
  const glowRight: React.CSSProperties = {
    ...glowCommon,
    right: -420,
    bottom: -420,
    background:
      "radial-gradient(closest-side, rgba(180,240,238,0.65), rgba(180,240,238,0) 70%)",
  };

  // 가운데 컨텐츠
  const container: React.CSSProperties = {
    position: "relative",
    zIndex: 1,
    width: "min(1100px, 100%)",
    textAlign: "center",
  };

  // 상단 배지
  const badgeWrap: React.CSSProperties = {
    display: "inline-flex",
    alignItems: "center",
    gap: 8,
    padding: "12px 18px",
    borderRadius: 999,
    background: "#efeefe",
    color: "#5b61d6",
    fontWeight: 700,
    fontSize: 16,
    boxShadow: "0 6px 18px rgba(31,41,55,0.08)",
    marginBottom: 22,
  };

  // 타이틀
  const title: React.CSSProperties = {
    margin: 0,
    lineHeight: 1.05,
    letterSpacing: "-0.02em",
    fontWeight: 900,
    color: "#0b0b0b",
    fontSize: "clamp(36px, 7.8vw, 108px)", // 큼직하게
  };

  // 두 번째 줄 그라디언트 텍스트
  const gradText: React.CSSProperties = {
    background:
      "linear-gradient(90deg,#7b5cff 0%,#b48cf7 38%,#9fb6ee 68%,#7dd3d3 100%)",
    WebkitBackgroundClip: "text",
    backgroundClip: "text",
    color: "transparent",
    display: "inline-block",
  };

  // 서브카피
  const subtitle: React.CSSProperties = {
    margin: "24px auto 36px",
    color: "#6b7280",
    lineHeight: 1.7,
    fontSize: "clamp(16px, 2.1vw, 22px)",
    width: "min(920px, 92%)",
  };

  // 버튼 행
  const ctaRow: React.CSSProperties = {
    display: "inline-flex",
    gap: 16,
    flexWrap: "wrap",
    justifyContent: "center",
  };

  const btnBase: React.CSSProperties = {
    appearance: "none",
    border: "1px solid #e6e7ec",
    borderRadius: 18,
    padding: "16px 28px",
    fontSize: 18,
    fontWeight: 800,
    cursor: "pointer",
    transition: "transform .06s ease, box-shadow .2s ease, background .2s ease",
  };

  const btnPrimary: React.CSSProperties = {
    ...btnBase,
    background: "#6f64f5",
    border: "none",
    color: "#fff",
    boxShadow: "0 18px 48px rgba(111,100,245,0.35)",
  };

  const btnGhost: React.CSSProperties = {
    ...btnBase,
    background: "#ffffff",
    color: "#0f172a",
    boxShadow: "0 10px 24px rgba(31,41,55,0.10)",
  };

  return (
    <section style={shell} aria-label="AI 기반 개인 성장 플랫폼 소개">
      {/* 배경 글로우 */}
      <div style={glowTop} />
      <div style={glowRight} />

      <div style={container}>
        {/* 배지 */}
        <div style={badgeWrap}>
          <span aria-hidden>✨</span>
          <span>AI 기반 개인 성장 플랫폼</span>
        </div>

        {/* 타이틀 */}
        <h1 style={title}>
          나만의 캐릭터와 함께
          <br />
          <span style={gradText}>성장하는 여정</span>
        </h1>

        {/* 서브카피 */}
        <p style={subtitle}>
          AI 멘토와의 대화를 통해 당신의 강점과 특성을 발견하고,
          <br />
          개인 브랜딩 자료를 자동으로 생성해보세요.
        </p>

        {/* CTA */}
        <div style={ctaRow}>
          <button style={btnPrimary} onClick={onStart}>
            시작하기
          </button>
          <button style={btnGhost} onClick={onLearnMore}>
            더 알아보기
          </button>
        </div>
      </div>
    </section>
  );
}
