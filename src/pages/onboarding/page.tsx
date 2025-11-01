import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import HomeHero from "./components/HomeHero";
import WelcomeForm from "./components/WelcomeForm";
import LearnMore from "./components/LearnMore";

export default function Onboarding() {
    // 단계: 1 = 홈, 2 = 이름 입력, 3 = 더 알아보기
    const [step, setStep] = useState<1 | 2 | 3>(1);
    const [name, setName] = useState("");
    const navigate = useNavigate();

    const handleNext = () => {
        if (name.trim()) {
            localStorage.setItem("userName", name);
            navigate("/ebti-test");
        } else {
            alert("이름을 입력해주세요!");
        }
    };

    return (
        <div className="h-full w-full overflow-y-auto">
            {step === 1 && (
                <HomeHero onStart={() => setStep(2)} onLearnMore={() => setStep(3)} />
            )}

            {step === 2 && (
                <WelcomeForm
                    name={name}
                    onChangeName={setName}
                    onNext={handleNext}
                    onBack={() => setStep(1)}
                />
            )}

            {step === 3 && (
                <LearnMore onBack={() => setStep(1)} onStart={() => setStep(2)} />
            )}
        </div>
    );
}
