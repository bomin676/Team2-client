import React from "react";

type Props = { onStart: () => void; onLearnMore: () => void };

export default function HomeHero({ onStart, onLearnMore }: Props) {
  const shell: React.CSSProperties = { width: "100%" };
  const container: React.CSSProperties = { width: "100%", textAlign: "center" };

  const badge: React.CSSProperties = {
    display: "inline-flex", gap: 8, alignItems: "center",
    background: "#efeefe", color: "#5b61d6", borderRadius: 999,
    padding: "8px 12px", fontWeight: 700, fontSize: 13, marginBottom: 14,
  };
  const title: React.CSSProperties = {
    margin: "0 0 12px 0", fontWeight: 800, letterSpacing: "-0.02em",
    lineHeight: 1.05, fontSize: "clamp(28px, 6vw, 72px)",
  };
  const gradientText: React.CSSProperties = {
    background: "linear-gradient(90deg, #7d5cff 0%, #b48cf7 40%, #77d0d5 100%)",
    WebkitBackgroundClip: "text", backgroundClip: "text", color: "transparent",
    display: "inline-block",
  };
  const sub: React.CSSProperties = {
    margin: "0 auto 20px", color: "#6b7280", fontSize: "clamp(14px, 2vw, 18px)",
    lineHeight: 1.7, width: "100%",
  };
  const row: React.CSSProperties = {
    display: "inline-flex", gap: 12, flexWrap: "wrap", justifyContent: "center",
  };
  const btnBase: React.CSSProperties = {
    appearance: "none", border: "1px solid #e5e7eb", cursor: "pointer",
    fontWeight: 800, borderRadius: 14, padding: "12px 18px", fontSize: 16,
    background: "#fff", color: "#111827",
  };
  const btnPrimary: React.CSSProperties = {
    ...btnBase, border: "none", background: "#7c6cf3", color: "#fff",
  };

  return (
    <section style={shell} aria-label="AI 기반 개인 성장 플랫폼 소개">
      <div style={container}>
        <div style={badge}><span aria-hidden>✨</span><span>AI 기반 개인 성장 플랫폼</span></div>
        <h1 style={title}>
          <span>나만의 캐릭터와 함께</span><br />
          <span style={gradientText}>성장하는 여정</span>
        </h1>
        <p style={sub}>
          AI 멘토와의 대화를 통해 당신의 강점과 특성을 발견하고,<br />
          개인 브랜딩 자료를 자동으로 생성해보세요.
        </p>
        <div style={row}>
          <button style={btnPrimary} onClick={onStart}>시작하기</button>
          <button style={btnBase} onClick={onLearnMore}>더 알아보기</button>
        </div>
      </div>
    </section>
  );
}
