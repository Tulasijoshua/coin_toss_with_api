import React from 'react'

const Deposite = () => {
  return (
    <form className='w-full flex flex-col'>
        {/* {state.isRequesting && <ModalLoading/>} */}
        <h1 className='text-2xl font-semibold mb-5'>Add New Category</h1>

        <section className="w-full flex flex-col mb-3">
            <p className='text-[1.2rem]'>Name</p>
            <input  type="text" className='w-full h-[40px] border border-gray-500'/>
        </section>
        <section className="w-full flex flex-col mb-3">
            <p className='text-[1.2rem]'>Description</p>
            <textarea type="text" className='w-full h-[40px] border border-gray-500 max-h-[200px] min-h-[100px]'/>
        </section>

        <br /><br />
        <div className="w-full flex justify-center">
            <button className='text-white bg-indigo-500 px-10 h-[45px] rounded-lg text-lg'>Add Category</button>
        </div><br /><br /><br />
    </form>
  )
}

export default Deposite