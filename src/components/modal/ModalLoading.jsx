import React from 'react'
import snake from '../../assets/Snake.gif'

function ModalLoading() {
  return (
    <div className='absolute top-0 right-0 left-0 bottom-0 flex justify-center items-center bg-[rgb(0,0,0,.3)]'>
        <div className="flex justify-center items-center bg-white rounded-xl px-[3rem] py-[1.5rem]">
            <img src={snake} alt="" width={30}/>
        </div>
    </div>
  )
}

export default ModalLoading