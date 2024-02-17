import React, { useState } from "react";
import Modal from "react-modal";
import { RotateLoader } from "react-spinners";
import { usePredictionContext } from "../context/PredictionContext";
import congrats from "../assets/congrats.gif";
import loss from "../assets/loss.gif";

Modal.setAppElement("#root");

const ResultModal = ({results}) => {
  const [isProcessing, setIsProcessing] = useState(true);
  const [isWon, setIsWon] = useState(results.prediction.win)
  const {
    amount,
    setAmount,
    coinPrediction,
    modalIsOpen,
    setModalIsOpen,
    predict,
    setPredict,
    amountWon,
    isWin,
    result,
  } = usePredictionContext();

  console.log(results)

  return (
    <div>
      <Modal
        isOpen={modalIsOpen}
        shouldCloseOnOverlayClick={false}
        onRequestClose={() => setModalIsOpen(false)}
        className="Modal"
        overlayClassName="Overlay"
      >
        <div className="flex flex-col items-center justify-center">
          {isProcessing ? (
            <h2 className="xl:text-[1.5rem] text-[1.3rem] font-semibold text-center">
              Processing
            </h2>
          ) : (
            <h2 className="xl:text-[1.5rem] text-[1.3rem] font-semibold text-center">Results</h2>
          )}
          {isProcessing && (
            <div className="w-[70%] mx-auto 2xl:my-[9rem] xl:my-[7rem] my-[5rem] flex flex-col items-center justify-center pt-[1rem">
              <RotateLoader
                color="#2563EB"
                cssOverride={{}}
                loading={isProcessing}
                margin={40}
                size={30}
                speedMultiplier={5}
              />
            </div>
          )}
          {!isProcessing && (
            <div className="mont my-[0.2rem]">
              {isWon === true ? (
                <div className="">
                  <div className="2xl:w-[250px] w-[150px] 2xl:h-[250px] h-[150px] mx-auto ">
                    <img
                      className="w-full h-full "
                      src={congrats}
                      alt="Congratulations message"
                    />
                  </div>
                  <div className="2xl:pt-[2rem] pt-[1rem]">
                    <div className="text-center 2xl:text-[1.8rem] text-[1.2rem]">
                      {results.message}.
                    </div>
                  </div>
                </div>
              ) : (
                <div>
                  <div className="2xl:w-[200px] xl:w-[150px] w-[130px] 2xl:h-[250px] xl:h-[150px] h-[130px] mx-auto">
                    <img
                      className="w-full h-full object-cover"
                      src={loss}
                      alt="Lost message"
                    />
                  </div>
                  <div className="2xl:pt-[1.5rem] pt-[1rem]">
                    <div className="text-center 2xl:text-[1.8rem] xl:text-[1.2rem] text-[1rem]">
                      {results.message}.
                    </div>
                    <div className="text-center 2xl:text-[1.8rem] xl:text-[1.2rem] text-[1rem] ">
                      {/* You lost GHS{amount} cedis. */}
                    </div>
                  </div>
                </div>
              )}
            </div>
          )}
          <div className="pt-[1rem]">
            {isProcessing && (
              <button
                className="py-[0.5rem] px-[1.5rem] rounded-md text-[1rem] text-white font-semibold bg-blue-600 hover:bg-blue-700"
                onClick={() => {
                  coinPrediction;
                  setIsProcessing(false);
                }}
              >
                View Results
              </button>
            )}
            {!isProcessing && (
              <button
                className="py-[0.5rem] px-[1.5rem] rounded-md text-[1rem] text-white font-semibold bg-red-600 hover:bg-red-700"
                disabled={isProcessing}
                onClick={() => {
                  setModalIsOpen(false);
                  setAmount("");
                }}
              >
                Close
              </button>
            )}
          </div>
        </div>
      </Modal>
    </div>
  );
};

export default ResultModal;