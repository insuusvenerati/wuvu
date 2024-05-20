import gif from "@/assets/milk-and-mocha.gif";
import clsx from "clsx";
import { useMemo, useState } from "react";
import CuteButton from "./components/ui/cute-button";
import { TextGenerateEffect } from "./components/ui/text-generate-effect";

function App() {
  const [selectedAnswer, setSelectedAnswer] = useState<string | undefined>();
  const noAnswer = selectedAnswer === undefined;
  const isYes = useMemo(() => selectedAnswer === "yes", [selectedAnswer]);
  const isNo = useMemo(() => selectedAnswer === "no", [selectedAnswer]);

  console.log(selectedAnswer);

  return (
    <main
      className={clsx(
        { "container m-auto flex flex-col gap-4": noAnswer },
        { "bg-bsod h-screen w-screen bg-no-repeat bg-cover": isNo },
        { "container m-auto flex flex-col gap-4": isYes }
      )}>
      {noAnswer && (
        <>
          <TextGenerateEffect className="text-4xl font-bold text-rose-700" words="Do you wuv me?" />
          <img src={gif} alt="milk and mocha" />
          <div className="flex gap-4 w-96 justify-between">
            <CuteButton onClick={() => setSelectedAnswer("yes")} type="button">
              Yes!
            </CuteButton>
            <CuteButton onClick={() => setSelectedAnswer("no")} type="button">
              No!
            </CuteButton>
          </div>
        </>
      )}
      {isYes && (
        <div>
          <img src="/giphy.gif" alt="yay" className="w-screen h-screen" />
        </div>
      )}
    </main>
  );
}

export default App;
