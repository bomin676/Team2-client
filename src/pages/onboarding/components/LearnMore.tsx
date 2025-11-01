import React from "react";

type Props = {
    onBack: () => void;
    onStart: () => void;
};

export default function LearnMore({ onBack, onStart }: Props) {
    return (
        <section className="flex flex-col justify-center items-center w-full h-full px-4 py-5 overflow-y-auto text-center">
            <div className="w-full max-w-[380px] grid gap-6 justify-items-center">
                {/* 타이틀 */}
                <div>
                    <h2 className="m-0 font-extrabold tracking-tight text-[clamp(24px,5vw,34px)] leading-tight">
                        어떻게 작동하나요?
                    </h2>
                    <p className="mt-1 text-gray-500 text-[15px]">
                        4단계로 완성되는 나만의 브랜딩
                    </p>
                </div>

                {/* 카드 그리드 */}
                <div className="w-full grid grid-cols-2 gap-4">
                    {/* 카드 1 */}
                    <div className="bg-white border border-[#ecebf6] rounded-2xl shadow-md p-4 text-left grid gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-[#efeafe] text-[#6e62d7] grid place-items-center text-lg">
                            ✨
                        </div>
                        <h3 className="font-bold text-[16px] text-slate-900">캐릭터 생성</h3>
                        <p className="text-gray-500 text-[14px] leading-relaxed">
                            나를 대표하는 캐릭터를 선택하고 개성을 부여하세요.
                        </p>
                    </div>

                    {/* 카드 2 */}
                    <div className="bg-white border border-[#ecebf6] rounded-2xl shadow-md p-4 text-left grid gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-[#f3ecff] text-[#9b71f8] grid place-items-center text-lg">
                            🎯
                        </div>
                        <h3 className="font-bold text-[16px] text-slate-900">AI 멘토 대화</h3>
                        <p className="text-gray-500 text-[14px] leading-relaxed">
                            AI 멘토와 대화하며 당신의 강점과 성향을 발견하세요.
                        </p>
                    </div>

                    {/* 카드 3 */}
                    <div className="bg-white border border-[#ecebf6] rounded-2xl shadow-md p-4 text-left grid gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-[#e9f7f5] text-[#3fb0a6] grid place-items-center text-lg">
                            🎨
                        </div>
                        <h3 className="font-bold text-[16px] text-slate-900">인사이트 분석</h3>
                        <p className="text-gray-500 text-[14px] leading-relaxed">
                            대화 내용을 분석하여 개인 특성 리포트를 생성합니다.
                        </p>
                    </div>

                    {/* 카드 4 */}
                    <div className="bg-white border border-[#ecebf6] rounded-2xl shadow-md p-4 text-left grid gap-2.5">
                        <div className="w-9 h-9 rounded-lg bg-[#eef0ff] text-[#5f6ff0] grid place-items-center text-lg">
                            🧾
                        </div>
                        <h3 className="font-bold text-[16px] text-slate-900">브랜딩 자료</h3>
                        <p className="text-gray-500 text-[14px] leading-relaxed">
                            포트폴리오, 자기소개서 등 맞춤형 브랜딩 자료를 받아보세요.
                        </p>
                    </div>
                </div>

                {/* 버튼 영역 */}
                <div className="flex justify-center gap-2 flex-wrap mt-2">
                    <button
                        onClick={onStart}
                        className="bg-[#7c6cf3] text-white font-bold text-[15px] px-4 py-2.5 rounded-lg transition active:scale-95 hover:opacity-90"
                    >
                        시작하기
                    </button>

                    <button
                        onClick={onBack}
                        className="border border-gray-300 bg-white text-gray-800 font-semibold text-[15px] px-4 py-2.5 rounded-lg transition active:scale-95 hover:bg-gray-50"
                    >
                        돌아가기
                    </button>
                </div>
            </div>
        </section>
    );
}
