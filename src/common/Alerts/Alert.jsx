import React, { useEffect, useState } from 'react'

function Alert({big, message, type, button1, button2, action1, action2, isON, setON}) {
  const [on, setOn] = useState(false)
  useEffect(()=>{
    setOn(()=>isON)
  }, [isON])

  useEffect(()=>{
    if(on && (button1?.length < 1 || button2?.length < 1)){
      setTimeout(() => {
        setON(false)
        setOn(()=>false)
      }, 4000);
    }
  }, [on])

  if(on){
    return (
      <div className='xs:w-[75%] w-[80%] mx-auto fixed top-0 right-0 left-0 bottom-0 flex justify-center z-50'>
        <section className={`animatefromtop border-2 ${type === 'error'?'border-red-500 bg-red-50': type === 'warning'? 'border-orange-400 bg-orange-50' : type === 'info' ? 'border-blue-400 bg-blue-50' : 'border-emerald-500 bg-emerald-50'} rounded-lg p-2 ${(button1?.length>0 || button2?.length>0) && 'pt-6'} flex flex-col absolute top-4 items-center min-h-fit lg:min-w-[400px] sm:min-w-[300px]`}>
          {big?.length>0 && <small className='text-2xl font-semibold mb-1'>{big}</small>}
          <small className='text-[0.8rem]'>{message}</small>

          {button1 && <button onClick={()=>{
            setTimeout(() => {
              action1()
            }, 1500);
          }} className="w-fit px-6 py-1 text-white bg-blue-400 mt-2">{button1}</button>}
          {button2 && <button onClick={()=>{
            setTimeout(() => {
              action2()
            }, 1500);
          }} className="w-fit px-6 py-1 text-white bg-blue-400 mt-2">{button2}</button>}


          {
            (button1?.length > 0 || button2?.length > 0) && <div onClick={()=>setON(false)} className="cursor-pointer flex justify-center items-center absolute top-0 right-0 text-white bg-red-500 rounded-md">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
          }
        </section>
      </div>
    )
  }else{
    return <></>
  }
}

export default Alert