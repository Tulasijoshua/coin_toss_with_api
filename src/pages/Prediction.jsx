import React, { useState } from "react";
import ResultModal from "../components/ResultModal";
import { usePredictionContext } from "../context/PredictionContext";
import { FcMoneyTransfer } from "react-icons/fc";
import head from "../assets/head.jpg";
import tail from "../assets/tail.jpg";
import { useAuthContext } from "../context/authContext";

const Prediction = () => {
  const { logout } = useAuthContext();
  const {
    modalIsOpen,
    setModalIsOpen,
    predict,
    setPredict,
    coinTossPrediction,
    amount, 
    setAmount,
    setCoinPrediction
  } = usePredictionContext();

  const handleSubmit = () => {

    const num = parseInt(amount, 10);
    if (num < 0) {
      alert('Enter valid amount to proceed!');
      return
    }

    const coinPrediction = coinTossPrediction(
      predict,
      num,
    );
    setCoinPrediction(coinPrediction)

    setModalIsOpen(true)
  }

  return (
    <div className="w-full">
      <div className="navbg w-full h-[100px] flex flex-col justify-center items-center fixed">
        <h2 className="xl:text-6xl text-4xl text-[#fff] italic font-semibold">
          Predict & Win
        </h2>
        <div className="absolute top-[2rem] right-[2rem]">
          <button onClick={logout} className="px-[1.5rem] py-[0.5rem] text-[1rem] bg-blue-600 text-white ">Logout</button>
        </div>
      </div>
      <div className="maxContainer w-[70%] mx-auto pt-[8rem] pb-[3rem]">
        <div className="pb-[2rem]">
          <div className="mont 2xl:w-[400px] w-[40%] mx-auto pb-[2rem] text-center 2xl:text-[1.5rem] xl:text-[1.3rem] text-[1.1rem] font-medium italic leading-[2rem]">
            Just predict a side of the coin & get{" "}
            <span className="2xl:text-[2rem] xl:text-[1.6rem] text-[1.3rem] font-semibold text-blue-600">X2</span>{" "}
            your stake.
          </div>
          <div className="mont text-center 2xl:text-[2rem] xl:text-[1.6rem] text-[1.4rem] text-blue-600 font-semibold capitalize">
            Stake now
          </div>
        </div>
        <div className="w-[70%] mx-auto ">
          <h2 className="xl:text-[1.3rem] text-[1.1rem] font-semibold text-red-600 capitalize">
            A must read!!!
          </h2>
          <div className="w-full p-4 bg-gray-200 rounded-lg">
            <h2 className="xl:text-[1.2rem] text-[1rem] font-semibold">Disclaimer:</h2>
            <p className="xl:text-[0.9rem] text-[0.8rem] xl:leading-[1.3rem] leading-[1.1rem]">
              Participation in the game involves a financial risk. Players may
              lose their entire stake on a loss, while winning results in a
              payout of double the amount staked. It is crucial to gamble
              responsibly, only using funds that can be comfortably forfeited.
              The game operates on chance, and there are no guaranteed wins.
              Participants must adhere to local gambling laws and regulations.
            </p>
          </div>
        </div>
        <div className="w-full">
          <div className="w-full py-[1.5rem] flex justify-center items-center gap-[1rem]">
            <h2 className="2xl:text-[2rem] xl:text-[1.8rem] text-[1.5rem] font-semibold">Win massive </h2>
            <div className="xl:text-[2rem] text-[1.5rem]">
              <FcMoneyTransfer />
            </div>
          </div>
          <div className="mont w-full pb-[2rem] flex flex-col justify-center items-center">
            <div className="xl:w-[280px] w-[250px] pl-[1rem] pr-[0.2rem] flex justify-between items-center text-white p bg-black rounded-md">
              <div className=" text-left xl:text-[1.2rem] text-[1rem]">Amount (GHs)</div>
              <input
                className="w-[100px] h-full px-[0.5rem] text-[1.2rem] text-black border focus:outline-none"
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
          </div>
          <div className="w-[60%] mx-auto flex justify-between items-center">
            <div className="w-fit text-center">
              <div className="xl:w-[150px] w-[120px] xl:h-[150px] h-[120px]">
                <img className="w-full h-full" src={head} alt="" />
              </div>
              <div
                className="mt-[2rem] py-[0.5rem] px-[1.5rem] bg-blue-600 rounded-md text-[1rem] text-white font-semibold active:bg-blue-700 cursor-pointer"
                onClick={() => setPredict("Head")}
              >
                Head
              </div>
            </div>
            <div className="w-fit text-center">
              <div className="xl:w-[150px] w-[120px] xl:h-[150px] h-[120px]">
                <img className="w-full h-full" src={tail} alt="" />
              </div>
              <div
                className="mt-[2rem] py-[0.5rem] px-[1.5rem] bg-blue-600 rounded-md text-[1rem] text-white font-semibold active:bg-blue-700 cursor-pointer"
                onClick={() => setPredict("Tail")}
              >
                Tail
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center pt-[2rem]">
            <button
              disabled={predict == "" || amount == ""}
              className="py-[0.7rem] px-[1.7rem] text-[1rem] font-semibold text-white bg-red-600 rounded-md disabled:bg-red-300 "
              onClick={handleSubmit}
            >
              Stake
            </button>
          </div>
        </div>
        {modalIsOpen && <ResultModal />}
      </div>
    </div>
  );
};

export default Prediction;
