import React, { useEffect, useState } from "react";
import ResultModal from "../components/ResultModal";
import { usePredictionContext } from "../context/PredictionContext";
import { FcMoneyTransfer } from "react-icons/fc";
import head from "../assets/head.jpg";
import tail from "../assets/tail.jpg";
import { useAuthContext } from "../context/authContext";
import Deposite from "./Deposite";
import { useNavigate } from "react-router-dom";
import Modal from "../components/modal/Modal";
import { Getter } from "../utils/Getters";
import axios from "axios";
import { endpoint } from "../utils/Endpoints";

const Prediction = ({addNew}) => {
  const get = Getter()
  const navigate = useNavigate()
  const [getBalance, setGetBalance] = useState(null)
  const [results, setResults] = useState(null)
  const [state, setState] = useState({
    details: {
      side: '',
      stake_amount: '',
    },
    isRequesting: false,
  })
  const [addModal, setAddModal] = useState(false)
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

  // getting balance
  useEffect(() => {
    axios.get(endpoint.getUserBalance, get.headers)
        .then(res=>{
            // console.log(res)
            setGetBalance(res.data.balance)
        }).catch(err=>{
            console.log(err)
        })
  }, [])

// prediction
  const handleSubmit = (e) => {
    e.preventDefault();
    setState({...state, isRequesting: true})
    axios.post(endpoint.predictSide, state.details, get.headers)
    .then(res=>{
        setState({...state, isRequesting: false})
        console.log(res.data)
        setResults(res.data)
        setModalIsOpen(true)
        
    }).catch(err=>{
        setState({...state, isRequesting: false})
        console.log(err.response)
    })
  }


  return (
    <div className="w-full">
      {
          addNew && <Modal close={()=>{navigate(-1, {replace: true})}} content={<Deposite fetchData={()=>fetchDetails()} close={()=>navigate(-1, {replace: true})}/>}/>
      }
      <div className="navbg w-full h-[100px] flex flex-col justify-between items-center fixed">
        <div className="h-full w-[85%] mx-auto flex justify-between items-center">
          <div>
            <div className="mont text-white text-[1.2rem] font-semibold">Balance: <span className="text-[1.5rem]">GH₵ {getBalance}</span> </div>
          </div>
          <h2 className="xl:text-6xl text-4xl text-[#fff] italic font-semibold">
            Predict & Win
          </h2>
          <div className="flex justify-end items-center gap-2">
            <div className="">
              <button onClick={logout} className="px-[1.5rem] py-[0.5rem] text-[1rem] bg-blue-600 text-white ">Logout</button>
            </div>
            <div className="">
              <button onClick={() => navigate('prediction/deposite')} className="px-[1.5rem] py-[0.5rem] text-[1rem] bg-blue-600 text-white ">Deposite</button>
            </div>
          </div>
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
                value={state.details.stake_amount}
                // onChange={(e) => setState(e.target.value)}
                onChange={(e)=>setState({...state, details:{...state.details, stake_amount: e.target.value}})}
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
                // onClick={() => setState("head")}
                onClick={()=>setState({...state, details:{...state.details, side: 'head'}})}
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
                // onClick={() => setState("tail")}
                onClick={()=>setState({...state, details:{...state.details, side: 'tail'}})}
              >
                Tail
              </div>
            </div>
          </div>
          <div className="flex flex-col justify-center items-center pt-[2rem]">
            <button
              disabled={state.details.side == "" || state.details.stake_amount == ""}
              className="py-[0.7rem] px-[1.7rem] text-[1rem] font-semibold text-white bg-red-600 rounded-md disabled:bg-red-300 "
              onClick={handleSubmit}
            >
              Stake
            </button>
          </div>
        </div>
        {modalIsOpen && <ResultModal results={results} />}
      </div>
    </div>
  );
};

export default Prediction;
