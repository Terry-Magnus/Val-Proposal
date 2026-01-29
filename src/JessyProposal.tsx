import { useState, useEffect } from "react";
import { useWindowSize } from "react-use";
import Confetti from "react-confetti";
import { motion } from "framer-motion";
import sendEmailNotification from "./services/emailjs";
const steps = [
  {
    content: "Heyyyy, Big Titties!.",
    image: "/character/one.png",
  },
  {
    content: `Just a few months and you're already almost my favorite person`,
    image: "/character/two.png",
  },
  {
    content: `And honestly cannot wait to see you (small sha, not too much).`,
    image: "/character/three.png",
  },
  {
    content: `Can't wait to binge more episodes of The Office and even Rick and Morty while whispering certain things in your ear!`,
    image: "/character/four.png",
  },
  {
    content: `You're beautiful, you're smart, you're crazy, you're sexy asf and I absolutely love it`,
    image: "/character/five.png",
  },
  {
    content: "So Omolara, I've got just one question for you...",
    image: "/character/six.png",
  },
  {
    content: "Will you be my Valentine???",
    image: "/character/seven.png",
  },
];

function JessyProposal() {
  const email = "akanizara@gmail.com";

  const [currentStep, setCurrentStep] = useState(0);
  const [sheWantsToBeMyValentine, setSheWantsToBeMyValentine] = useState(false);
  const { width, height } = useWindowSize();

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

  const handleYesClick = () => {
    sendEmailNotification(email);
    setSheWantsToBeMyValentine(true);
  };

  return (
    <div>
      {sheWantsToBeMyValentine && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <Confetti width={width} height={height} />
          <div className="fixed top-0 left-0 w-full h-full bg-[#FF00FF] flex flex-col items-center justify-center">
            <motion.h1
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ delay: 0.3, type: "spring" }}
              className="text-white text-4xl font-bold"
            >
              Yayyyyyyy!!!!!
            </motion.h1>
            <img
              src="/character/yayyyy.png"
              alt=""
              className="w-40 animate-bounce"
            />
          </div>
        </motion.div>
      )}
      <div className="bg-[#FF00FF] min-h-screen text-white p-5 flex flex-col items-center justify-center max-w-md mx-auto">
        <motion.img
          key={currentStep}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          src={steps[currentStep].image}
          alt=""
          className="w-40"
        />
        <motion.div
          key={currentStep + "-text"}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="font-josefin text-4xl font-bold"
        >
          {steps[currentStep].content}
        </motion.div>

        {currentStep < 6 && (
          <>
            <button
              onClick={() => setCurrentStep(currentStep + 1)}
              className="bg-black cursor-pointer text-[#FFC5D3] py-3 text-xl rounded-xl w-full mt-10 font-semibold"
            >
              Next
            </button>
            {currentStep > 0 && (
              <button
                onClick={() => setCurrentStep(currentStep - 1)}
                className="bg-black cursor-pointer text-[#FFC5D3] py-3 text-xl rounded-xl w-full mt-2 font-semibold opacity-90"
              >
                Back
              </button>
            )}
          </>
        )}
        {currentStep === 6 && (
          <>
            <button
              onClick={handleYesClick}
              className="bg-black cursor-pointer text-[#FFC5D3] py-3 text-xl rounded-xl w-full mt-10 font-semibold"
            >
              Yes
            </button>

            <button
              onClick={handleYesClick}
              className="bg-black cursor-pointer text-[#FFC5D3] py-3 text-xl rounded-xl w-full mt-2 font-semibold"
            >
              Yes
            </button>
          </>
        )}
      </div>
    </div>
  );
}

export default JessyProposal;
