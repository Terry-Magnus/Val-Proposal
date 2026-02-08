import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";

const steps = [
  {
    title: `Hey gorgeous....`,
    image: "/character/one.png",
    background: "bg-gradient-to-br from-[#FF00FF] to-pink-500",
  },
  {
    content: `I've been thinking about you a lot lately, and it seems you i can't get you out of my head.`,
    background: "bg-gradient-to-br from-pink-500 to-rose-400",
    image: "/character/five.png",
  },
  {
    content: `I find myself smiling at our memories together very often and I can't help but feel grateful for every moment we've shared so far.`,
    background: "bg-gradient-to-br from-rose-400 to-pink-600",
    image: "/character/four.png",
  },
  {
    content: `I know we've only been together for a while but it doesn't feel that way at all and I can't help but look forward to spending quality time with you and creating more memories...`,
    image: "/character/three.png",
    background: "bg-gradient-to-br from-pink-600 to-pink-700",
  },
  {
    content: `Funny enough, I would have sworn last year that I would never fall in love but here I am, lovestruck and dazed by you.`,
    background: "bg-gradient-to-br from-pink-700 to-fuchsia-500",
    image: "/character/three.png",
  },
  {
    content: `I've been thinking about us lately and this thing between us is so amazing that it makes me want to smile ear to ear like a newborn just by staring into your eyes and holding your hands.`,
    background: "bg-gradient-to-br from-fuchsia-700 to-purple-300",
    image: "/character/three.png",
  },
  {
    content: `So, with all my heart, I want to ask you really something special...`,
    background: "bg-gradient-to-br from-purple-300 to-purple-500",
    image: "/character/six.png",
  },
  {
    title:
      "My Sweet Woman, my Sunshine, Odinkem🤭,  Will you be my Valentine???",
    image: "/character/seven.png",
    background: "bg-gradient-to-br from-purple-500 to-purple-800",
  },
];

const RomanticValentineProposal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAccepted, setIsAccepted] = useState(false);
  const { width, height } = useWindowSize();

  const handleYesClick = () => {
    setIsAccepted(true);
  };

  const playMusic = () => {
    const audio = document.getElementById("bgm") as HTMLAudioElement | null;
    if (!audio) return;

    audio.volume = 0.8;
    audio.play().catch((error) => {
      // browser blocked — but will succeed on next interaction
      console.error(error);
    });
  };

  useEffect(() => {
    const start = () => {
      playMusic();
      window.removeEventListener("click", start);
      window.removeEventListener("touchstart", start);
    };

    window.addEventListener("click", start);
    window.addEventListener("touchstart", start);

    return () => {
      window.removeEventListener("click", start);
      window.removeEventListener("touchstart", start);
    };
  }, []);

  useEffect(() => {
    const imagePaths = [
      ...steps.map((step) => step.image),
      "/character/yayyyy.png",
    ];

    imagePaths.forEach((path) => {
      const img = new Image();
      img.src = path;
    });
  }, []);

  return (
    <div
      className={`min-h-screen flex flex-col items-center bg-violet-800 justify-center text-center p-4 ${isAccepted ? "bg-violet-800" : steps[currentStep].background}`}
    >
      <audio className="hidden" id="bgm" loop preload="auto">
        <source
          src="/music/Until-I-Found-Her-Stephen-Sanchez.m4a"
          type="audio/mp4"
        />
      </audio>

      {isAccepted ? (
        <div>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            className="bg-white rounded-full text-center py-8 px-4 mb-6"
          >
            <Confetti width={width} height={height} />

            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-rose-600 text-3xl text-center font-bold"
            >
              Yayyyyyyy!!!!!
            </motion.h1>
            <img
              src="/character/yayyyy.png"
              alt=""
              className="w-40 animate-bounce mx-auto"
            />
          </motion.div>
        </div>
      ) : (
        <>
          <div className="my-10 flex flex-col justify-center items-center text-center p-4">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentStep}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -50 }}
                transition={{ duration: 0.5 }}
                className="max-w-md"
              >
                <motion.img
                  key={currentStep}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5 }}
                  src={steps[currentStep].image}
                  alt=""
                  className="w-40 mx-auto"
                />
                <motion.div
                  key={currentStep + "-text"}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: 0.2 }}
                  className="font-josefin text-center text-white"
                >
                  <span className="text-4xl font-bold">
                    {steps[currentStep]?.title}
                  </span>
                  <span className="text-2xl font-poppins">
                    {steps[currentStep]?.content}
                  </span>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>

          {currentStep < steps.length - 1 && (
            <div className="w-80 p-4 mb-10">
              <button
                onClick={() => setCurrentStep(currentStep + 1)}
                className="bg-black cursor-pointer text-[#FFC5D3] py-3 text-xl rounded-xl w-full mt-2 font-semibold opacity-90"
              >
                Next
              </button>
              {currentStep > 0 && (
                <button
                  onClick={() => setCurrentStep(currentStep - 1)}
                  className="bg-black cursor-pointer text-[#FFC5D3] py-3 text-xl rounded-xl w-full mt-2 font-semibold opacity-90"
                >
                  Previous
                </button>
              )}
            </div>
          )}

          {currentStep === steps.length - 1 && (
            <div className="w-80 p-4 mb-10">
              {" "}
              <button
                onClick={handleYesClick}
                className="bg-black cursor-pointer text-[#FFC5D3] py-3 text-xl rounded-xl w-full mt-2 font-semibold opacity-90"
              >
                Yes
              </button>
              <button
                onClick={handleYesClick}
                className="bg-black cursor-pointer text-[#FFC5D3] py-3 text-xl rounded-xl w-full mt-2 font-semibold opacity-90"
              >
                Yes
              </button>
            </div>
          )}
        </>
      )}
    </div>
  );
};

export default RomanticValentineProposal;
