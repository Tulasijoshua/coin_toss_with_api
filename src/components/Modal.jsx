import React from 'react'

function Modal({content, close}) {
  return (
    <div className='fixed top-0 right-0 bottom-0 left-0 flex justify-center items-center bg-[#15013324]'>
        <div onClick={()=>close()} className="w-full h-full absolute"></div>
        <section className='min-w-[600px] min-h-[400px] border-t-4 border-indigo-500 rounded-xl relative pt-[3rem] px-[2rem] bg-white'>
            <svg onClick={()=>close()} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 absolute top-[1.5rem] right-[1.5rem] cursor-pointer">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>

            <div>
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
            </div>
        </section>
    </div>
  )
}

export default Modal