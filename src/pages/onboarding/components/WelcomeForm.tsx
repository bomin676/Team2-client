import React from "react";

type Props = {
    name: string;
    onChangeName: (v: string) => void;
    onNext: () => void;
    onBack: () => void;
};

export default function WelcomeForm({
                                        name,
                                        onChangeName,
                                        onNext,
                                        onBack,
                                    }: Props) {
    return (
        <section className="flex flex-col justify-center items-center h-full w-full overflow-y-auto p-4 box-border">
            <div className="w-full max-w-[360px]">
                {/* 진행바 */}
                <div className="grid grid-cols-2 gap-2.5 mb-4" aria-hidden>
                    <div className="h-2 bg-[#7d6bf3] rounded-full" />
                    <div className="h-2 bg-[#e9e7f5] rounded-full" />
                </div>

                {/* 카드 */}
                <div className="w-full bg-white border border-[#e7e4f6] rounded-3xl shadow-lg">
                    <div className="p-7 grid gap-3.5 justify-items-center text-center">
                        {/* 아바타 */}
                        <div className="w-16 h-16 rounded-full bg-[#efeefe] text-[#5b61d6] grid place-items-center text-[26px]">
                            👤
                        </div>

                        <h2 className="m-0 font-extrabold text-[clamp(20px,3.8vw,28px)] leading-tight">
                            환영합니다!
                        </h2>
                        <p className="m-0 mb-2.5 text-gray-500 text-[15px]">
                            먼저 당신에 대해 알려주세요
                        </p>

                        {/* 입력 영역 */}
                        <label
                            htmlFor="username"
                            className="w-full text-left font-bold mt-1.5 mb-2 block"
                        >
                            이름 또는 닉네임
                        </label>
                        <input
                            id="username"
                            placeholder="홍길동"
                            value={name}
                            onChange={(e) => onChangeName(e.target.value)}
                            inputMode="text"
                            autoComplete="name"
                            className="w-full h-11 rounded-xl border border-[#e6e6f1] px-4 text-[15px] outline-none focus:ring-2 focus:ring-[#7c6cf3]"
                        />

                        {/* 버튼 영역 */}
                        <div className="w-full grid gap-2 mt-1.5">
                            <button
                                onClick={onNext}
                                className="appearance-none border-none cursor-pointer font-bold rounded-xl py-3 px-5 text-[15px] bg-[#7c6cf3] text-white transition active:scale-95 hover:opacity-90"
                            >
                                다음 단계 →
                            </button>

                            <button
                                onClick={onBack}
                                className="appearance-none border-none bg-transparent text-gray-500 py-2 font-semibold cursor-pointer active:scale-95"
                            >
                                ← 돌아가기
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
