import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { ArrowLeft, ArrowRight } from "lucide-react";

const questions = [
    { id: 1, category: "사고방식", question: "새로운 문제를 만났을 때, 논리적으로 분석하고 체계적으로 접근하는 편이다" },
    { id: 2, category: "대인관계", question: "사람들과 함께 있을 때 에너지를 얻고 활력이 생긴다" },
    { id: 3, category: "업무스타일", question: "계획을 세우고 그대로 실행하는 것을 선호한다" },
    { id: 4, category: "창의성", question: "새로운 아이디어를 떠올리고 창의적인 해결책을 찾는 것을 즐긴다" },
    { id: 5, category: "의사결정", question: "결정을 내릴 때 감정보다는 객관적인 사실을 우선시한다" },
    { id: 6, category: "스트레스 대응", question: "압박이 있을 때 오히려 집중력이 높아지고 성과가 좋아진다" },
    { id: 7, category: "학습방식", question: "이론과 개념을 먼저 이해한 후 실습하는 것을 선호한다" },
    { id: 8, category: "리더십", question: "그룹에서 자연스럽게 리더 역할을 맡게 되는 편이다" },
    { id: 9, category: "변화수용", question: "예상치 못한 변화나 새로운 환경에 빠르게 적응한다" },
    { id: 10, category: "목표설정", question: "장기적인 목표를 세우고 단계적으로 달성해 나가는 것을 좋아한다" },
    { id: 11, category: "소통방식", question: "말보다는 글로 생각을 정리하고 표현하는 것이 편하다" },
    { id: 12, category: "완벽주의", question: "일을 할 때 디테일까지 신경 쓰고 완벽하게 마무리하려고 한다" },
    { id: 13, category: "협업", question: "혼자 일하는 것보다 팀으로 협력하는 것이 더 효율적이라고 생각한다" },
    { id: 14, category: "위험감수", question: "안정적인 선택보다 도전적이고 새로운 기회를 선택하는 편이다" },
    { id: 15, category: "감정표현", question: "내 감정과 생각을 다른 사람들에게 솔직하게 표현한다" },
];

export default function EbtiTestPage() {
    const navigate = useNavigate();
    const [userName, setUserName] = useState("");
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [answers, setAnswers] = useState<Record<number, number>>({});

    useEffect(() => {
        const name = localStorage.getItem("userName");
        if (!name) {
            navigate("/onboarding");
            return;
        }
        setUserName(name);
    }, [navigate]);

    const handleAnswer = (value: number) => {
        setAnswers((prev) => ({ ...prev, [questions[currentQuestion].id]: value }));
    };

    const handleNext = () => {
        if (currentQuestion < questions.length - 1) {
            setCurrentQuestion((p) => p + 1);
        } else {
            localStorage.setItem("assessmentAnswers", JSON.stringify(answers));
            navigate("/results");
        }
    };

    const handlePrevious = () => {
        if (currentQuestion > 0) setCurrentQuestion((p) => p - 1);
    };

    if (!userName) return null;

    const progress = ((currentQuestion + 1) / questions.length) * 100;
    const qa = questions[currentQuestion];
    const currentAnswer = answers[qa.id];

    return (
        <div className="h-full bg-[linear-gradient(180deg,rgba(124,108,243,0.08),transparent_40%),linear-gradient(0deg,rgba(125,107,243,0.06),transparent_60%)] py-6">
            <div className="container mx-auto px-4">
                <div className="mx-auto max-w-4xl">
                    {/* 상단 헤더 */}
                    <div className="mb-3 flex items-center justify-between text-sm">
                        <Link
                            to="/onboarding"
                            className="inline-flex items-center gap-1.5 text-gray-500 hover:text-[#7c6cf3]"
                        >
                            <ArrowLeft className="h-4 w-4" />
                            처음으로
                        </Link>
                        <span className="text-gray-500">
              {currentQuestion + 1} / {questions.length}
            </span>
                    </div>

                    {/* 진행바 */}
                    <div className="mb-8 h-2 rounded-full bg-[#e9e7f5]">
                        <div
                            className="h-full rounded-full bg-[#7d6bf3] transition-[width] duration-300"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* 질문 카드 */}
                    <div className="rounded-3xl border border-[#e7e4f6] bg-white shadow-lg p-6 md:p-10">
                        {/* 카테고리 + 질문 */}
                        <div className="mb-6 md:mb-8">
              <span className="mb-3 inline-block rounded-full bg-[#efeefe] px-3 py-1 text-[12px] font-semibold text-[#5b61d6]">
                {qa.category}
              </span>
                            <h2 className="text-2xl md:text-3xl font-extrabold leading-snug tracking-tight">
                                {qa.question}
                            </h2>
                        </div>

                        {/* 버튼 그룹 (1~5 / 6~10) */}
                        <div className="mb-8 space-y-3">
                            {/* 첫 번째 줄 (1~5 + 라벨) */}
                            <div>
                                <div className="flex justify-between text-[13px] text-gray-500 mb-2">
                                    <span>전혀 아니다</span>
                                    <span className="opacity-0">placeholder</span>
                                </div>
                                <div className="grid grid-cols-5 gap-3">
                                    {[1, 2, 3, 4, 5].map((value) => {
                                        const active = currentAnswer === value;
                                        return (
                                            <button
                                                key={value}
                                                onClick={() => handleAnswer(value)}
                                                className={[
                                                    "relative aspect-[1/1] select-none rounded-2xl border-2 transition-all",
                                                    "shadow-[inset_0_-2px_0_rgba(0,0,0,0.03)] hover:scale-[1.03]",
                                                    active
                                                        ? "border-[#7c6cf3] bg-[#7c6cf3] text-white"
                                                        : "border-[#e6e6f1] bg-white hover:border-[#7c6cf3]",
                                                ].join(" ")}
                                            >
                                                <span className="font-semibold">{value}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* 두 번째 줄 (6~10 + 라벨) */}
                            <div>
                                <div className="flex justify-between text-[13px] text-gray-500 mb-2">
                                    <span className="opacity-0">placeholder</span>
                                </div>
                                <div className="grid grid-cols-5 gap-3">
                                    {[6, 7, 8, 9, 10].map((value) => {
                                        const active = currentAnswer === value;
                                        return (
                                            <button
                                                key={value}
                                                onClick={() => handleAnswer(value)}
                                                className={[
                                                    "relative aspect-[1/1] select-none rounded-2xl border-2 transition-all",
                                                    "shadow-[inset_0_-2px_0_rgba(0,0,0,0.03)] hover:scale-[1.03]",
                                                    active
                                                        ? "border-[#7c6cf3] bg-[#7c6cf3] text-white"
                                                        : "border-[#e6e6f1] bg-white hover:border-[#7c6cf3]",
                                                ].join(" ")}
                                            >
                                                <span className="font-semibold">{value}</span>
                                            </button>
                                        );
                                    })}
                                </div>
                                <div className="flex justify-end text-[13px] text-gray-500 mt-2">
                                    <span>매우 그렇다</span>
                                </div>
                            </div>
                        </div>

                        {/* 네비게이션 */}
                        <div className="flex gap-3">
                            <button
                                onClick={handlePrevious}
                                disabled={currentQuestion === 0}
                                className="flex-1 rounded-2xl border border-[#e6e6f1] bg-white py-3.5 font-semibold text-slate-600 disabled:opacity-50"
                            >
                <span className="inline-flex items-center gap-2">
                  <ArrowLeft className="h-5 w-5" />
                  이전
                </span>
                            </button>
                            <button
                                onClick={handleNext}
                                disabled={currentAnswer === undefined}
                                className="flex-1 rounded-2xl bg-[#7c6cf3] py-3.5 font-semibold text-white transition-colors hover:opacity-90 disabled:opacity-50"
                            >
                <span className="inline-flex items-center gap-2">
                  {currentQuestion === questions.length - 1 ? "완료" : "다음"}
                    <ArrowRight className="h-5 w-5" />
                </span>
                            </button>
                        </div>
                    </div>

                    {/* 도움 문구 */}
                    <p className="mt-6 text-center text-sm text-gray-500">
                        솔직하게 답변할수록 더 정확한 인사이트를 얻을 수 있습니다
                    </p>
                </div>
            </div>
        </div>
    );
}
