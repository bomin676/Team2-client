import React, { useState } from "react";
import HomeHero from "./pages/HomeHero";
import WelcomeForm from "./pages/WelcomeForm";
import LearnMore from "./pages/LearnMore";

export default function App() {
  // 1: 홈, 2: 이름입력, 3: 더 알아보기
  const [step, setStep] = useState<1 | 2 | 3>(1);
  const [name, setName] = useState("");

  if (step === 1) {
    return (
      <HomeHero
        onStart={() => setStep(2)}
        onLearnMore={() => setStep(3)}
      />
    );
  }
  if (step === 2) {
    return (
      <WelcomeForm
        name={name}
        onChangeName={setName}
        onNext={() => alert(`입력된 이름: ${name || "(미입력)"}`)}
        onBack={() => setStep(1)}
      />
    );
  }
  return <LearnMore onBack={() => setStep(1)} onStart={() => setStep(2)} />;
}
