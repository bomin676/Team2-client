import React from "react";

type Props = {
  name: string;
  onChangeName: (v: string) => void;
  onNext: () => void;
  onBack: () => void;
};

/** 부모 컨테이너가 카드 폭/정렬/여백을 결정하도록 size 제약 제거 */
export default function WelcomeForm({
  name,
  onChangeName,
  onNext,
  onBack,
}: Props) {
  const shell: React.CSSProperties = {
    width: "100%",
  };

  const container: React.CSSProperties = {
    width: "100%",
  };

  const progress: React.CSSProperties = {
    width: "100%",
    display: "grid",
    gridTemplateColumns: "1fr 1fr",
    gap: 10,
    margin: "0 0 16px 0",
  };

  const bar: React.CSSProperties = {
    height: 8,
    background: "#e9e7f5",
    borderRadius: 999,
  };

  const barActive: React.CSSProperties = {
    ...bar,
    background: "#7d6bf3",
  };

  const card: React.CSSProperties = {
    width: "100%",
    background: "#ffffff",
    border: "1px solid #e7e4f6",
    borderRadius: 24,
  };

  const inner: React.CSSProperties = {
    padding: "28px 20px",
    display: "grid",
    gap: 14,
    justifyItems: "center",
    textAlign: "center",
  };

  const avatar: React.CSSProperties = {
    width: 64,
    height: 64,
    borderRadius: "50%",
    background: "#efeefe",
    color: "#5b61d6",
    display: "grid",
    placeItems: "center",
    fontSize: 26,
  };

  const title: React.CSSProperties = {
    margin: "6px 0 2px",
    fontSize: "clamp(20px, 3.8vw, 32px)",
    lineHeight: 1.2,
    fontWeight: 800,
  };

  const sub: React.CSSProperties = {
    margin: "0 0 10px",
    color: "#6b7280",
    fontSize: 16,
  };

  const label: React.CSSProperties = {
    width: "100%",
    textAlign: "left",
    fontWeight: 700,
    margin: "6px 0 8px",
  };

  const input: React.CSSProperties = {
    width: "100%",
    height: 48,
    borderRadius: 12,
    border: "1px solid #e6e6f1",
    padding: "0 14px",
    fontSize: 16,
    outline: "none",
  };

  const actions: React.CSSProperties = {
    width: "100%",
    display: "grid",
    gap: 8,
    marginTop: 6,
  };

  const btnPrimary: React.CSSProperties = {
    appearance: "none",
    border: "none",
    cursor: "pointer",
    fontWeight: 800,
    borderRadius: 12,
    padding: "12px 18px",
    fontSize: 16,
    background: "#7c6cf3",
    color: "#fff",
  };

  const btnLink: React.CSSProperties = {
    appearance: "none",
    border: "none",
    background: "transparent",
    color: "#6b7280",
    padding: "8px 0",
    cursor: "pointer",
    fontWeight: 600,
  };

  return (
    <section style={shell} aria-label="환영 및 기본 정보 입력">
      <div style={container}>
        <div style={progress} aria-hidden>
          <div style={barActive} />
          <div style={bar} />
        </div>

        <div style={card}>
          <div style={inner}>
            <div style={avatar} aria-hidden>
              👤
            </div>
            <h2 style={title}>환영합니다!</h2>
            <p style={sub}>먼저 당신에 대해 알려주세요</p>

            <label htmlFor="username" style={label}>
              이름 또는 닉네임
            </label>
            <input
              id="username"
              style={input}
              placeholder="홍길동"
              value={name}
              onChange={(e) => onChangeName(e.target.value)}
              inputMode="text"
              autoComplete="name"
            />

            <div style={actions}>
              <button style={btnPrimary} onClick={onNext}>
                다음 단계 <span aria-hidden>→</span>
              </button>
              <button style={btnLink} onClick={onBack}>
                ← 돌아가기
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
