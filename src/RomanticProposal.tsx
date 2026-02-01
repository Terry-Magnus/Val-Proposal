import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Confetti from "react-confetti";
import { useWindowSize } from "react-use";
import sendEmailNotification from "./services/emailjs";

const steps = [
  {
    title: `Hey Sweet Girl....`,
    image: "/character/one.png",
    background: "bg-gradient-to-br from-pink-300 to-pink-500",
  },
  {
    content: `I don't know where to begin, but it's been \n  `,
    background: "bg-gradient-to-br from-pink-500 to-rose-300",

    image: "/character/five.png",
  },
  {
    content: `There are so many things I love about you. Your beauty captivates me, your voice soothes me, and your smile brightens my day. But it's not just your outer beauty that I adore - your kindness, intelligence, and quirky personality all make my heart skip a beat.`,
    background: "bg-gradient-to-br from-rose-300 to-rose-500",

    image: "/character/four.png",
  },
  {
    content: `
      There's just something MAGICAL about you mami..... 
      `,
    image: "/character/three.png",
    background: "bg-gradient-to-br from-rose-500 to-fuchsia-300",
  },
  {
    content: `Sometimes, I catch myself smiling for no reason at all... and then I realize I'm thinking of you. It's weird, because I used to be a more distant person, but you've changed that.`,
    background: "bg-gradient-to-br from-fuchsia-300 to-fuchsia-500",
    image: "/character/three.png",
  },
  {
    content: `
      I'd catch myself and say, 
      "Ol'boy hard man like you don fall oh lol"
      `,
    background: "bg-gradient-to-br from-fuchsia-300 to-purple-300",
    image: "/character/three.png",
  },
  {
    content: `So, with all my heart, I want to ask you really something special...`,
    background: "bg-gradient-to-br from-purple-300 to-purple-500",

    image: "/character/six.png",
  },
  {
    title: "My Sweet Lollipop, my Moonshine, Will you be my Valentine???",
    image: "/character/seven.png",
    background: "bg-gradient-to-br from-purple-500 to-purple-800",
  },
];

const RomanticValentineProposal = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isAccepted, setIsAccepted] = useState(false);
  const { width, height } = useWindowSize();
  const email = "crackmastermike@gmail.com";

  const handleYesClick = () => {
    sendEmailNotification(email);
    setIsAccepted(true);
  };
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

  if (isAccepted) {
    return (
      <div className="min-h-screen flex flex-col items-center bg-violet-800 justify-center text-center p-4">
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
    );
  }

  return (
    <div
      className={`min-h-screen flex flex-col ${steps[currentStep].background}`}
    >
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
        <div className="mx-20 p-4 mb-10">
          <button
            onClick={() => setCurrentStep(currentStep + 1)}
            className="bg-white text-purple-800 py-3 text-xl rounded-xl w-full mt-5 font-semibold"
          >
            Next
          </button>
          {currentStep > 0 && (
            <button
              onClick={() => setCurrentStep(currentStep - 1)}
              className="bg-white text-purple-800 py-3 text-xl rounded-xl w-full mt-5 font-semibold"
            >
              Previous
            </button>
          )}
        </div>
      )}

      {currentStep === steps.length - 1 && (
        <div className="mx-15">
          <button
            onClick={handleYesClick}
            className="bg-white text-purple-800 py-3  text-xl rounded-xl w-full font-semibold"
          >
            Yes
          </button>

          <button
            onClick={handleYesClick}
            className="bg-white text-purple-800 py-3 text-xl rounded-xl w-full mt-5 font-semibold"
          >
            Yes
          </button>
        </div>
      )}
    </div>
  );
};

export default RomanticValentineProposal;
