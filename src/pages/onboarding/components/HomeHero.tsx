import React from "react";

type Props = { onStart: () => void; onLearnMore: () => void };

export default function HomeHero({ onStart, onLearnMore }: Props) {
    return (
        <section className="flex flex-col justify-center items-center text-center h-full w-full px-6">
            {/* 배지 */}
            <div className="inline-flex items-center gap-2 bg-[#efeefe] text-[#5b61d6] rounded-full px-3 py-2 font-bold text-sm mb-4">
                <span aria-hidden>✨</span>
                <span>AI 기반 개인 성장 플랫폼</span>
            </div>

            {/* 제목 */}
            <h1 className="font-extrabold leading-tight tracking-tight text-[clamp(26px,5vw,42px)] mb-3">
                <span>나만의 캐릭터와 함께</span>
                <br />
                <span className="bg-gradient-to-r from-[#7d5cff] via-[#b48cf7] to-[#77d0d5] bg-clip-text text-transparent">
          성장하는 여정
        </span>
            </h1>

            {/* 부제 */}
            <p className="text-gray-500 text-[15px] leading-relaxed mb-6 max-w-[90%]">
                AI 멘토와의 대화를 통해 당신의 강점과 특성을
                <br />
                발견하고, 개인 브랜딩 자료를 자동으로 생성해보세요.
            </p>

            {/* 버튼 그룹 */}
            <div className="flex flex-wrap justify-center gap-3">
                <button
                    onClick={onStart}
                    className="bg-[#7c6cf3] text-white font-bold text-[15px] px-5 py-2.5 rounded-xl transition-transform active:scale-95 shadow-sm hover:opacity-90"
                >
                    시작하기
                </button>

                <button
                    onClick={onLearnMore}
                    className="border border-gray-300 text-gray-900 font-semibold text-[15px] px-5 py-2.5 rounded-xl bg-white transition-transform active:scale-95 hover:bg-gray-50"
                >
                    더 알아보기
                </button>
            </div>
        </section>
    );
}
