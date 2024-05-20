import gif from "@/assets/milk-and-mocha.gif";
import { useMemo, useState } from "react";
import CuteButton from "./components/ui/cute-button";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";
import { Spinner } from "./components/ui/spinner";

const yesImages = [
  "yes-0.jpeg",
  "yes-1.jpeg",
  "yes-2.jpeg",
  "yes-3.jpeg",
  "yes-4.jpeg",
  "yes-5.jpeg",
  "yes-6.jpeg",
  "yes-7.jpeg",
  "yes-8.jpeg",
];

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>();
  const [isLoading, setIsLoading] = useState(false);
  const [yesImageIndex, setYesImageIndex] = useState(0);
  const noAnswer = selectedAnswer === undefined;
  const isYes = useMemo(() => selectedAnswer === "yes", [selectedAnswer]);
  const isNo = useMemo(() => selectedAnswer === "no", [selectedAnswer]);

  const handleClick = (answer: string) => {
    setIsLoading(true);
    setSelectedAnswer(answer);
    if (answer === "yes") {
      setYesImageIndex(Math.floor(Math.random() * yesImages.length));
    }
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  };

  return (
    <main className="container m-auto flex flex-col gap-4">
      {noAnswer && !isLoading && (
        <>
          <TextGenerateEffect className="text-4xl font-bold text-rose-700" words="Do you wuv me?" />
          <img src={gif} alt="milk and mocha" />
          <div className="flex gap-4 w-96 justify-between">
            <CuteButton onClick={() => handleClick("yes")} type="button">
              Yes!
            </CuteButton>
            <CuteButton onClick={() => handleClick("no")} type="button">
              No!
            </CuteButton>
          </div>
        </>
      )}
      {isLoading && <Spinner />}
      {isYes && !isLoading && (
        <div>
          <img src={yesImages[yesImageIndex]} alt="yay" className="w-screen h-screen" />{" "}
        </div>
      )}
      {isNo && !isLoading && (
        <div>
          <img src="/bsod.png" alt="sad" className="w-screen h-screen" />
        </div>
      )}
    </main>
  );
}

export default App;
