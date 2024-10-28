import React from 'react'

const Steppercontrol = ({handleClick , currentStep ,steps}) => {
  return (
    <div className='container flex justify-around mt-4 mb-8'>
    {/*Back button*/}
    <button 
    onClick={()=>handleClick()}
    className={`bg-white border-2 border-slate-600 text-slate-600 uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer  hover:border-slate-400 hover:bg-slate-400 hover:text-white transition duration-200 ease-in-out ${currentStep === 1 ? "opacity-50 cursor-not-allowed" : ""}`}>
      Back
    </button>


    {/*next button*/}
    <button 
    onClick={()=>handleClick("next")}
    className='bg-slate-600 text-white uppercase py-2 px-4 rounded-xl font-semibold cursor-pointer hover:bg-green-500 hover:text-white transition duration-200 ease-in-out'
    >
      {currentStep=== steps.length ?"Submit" : "next"}

    </button>



    </div>
  )
}

export default Steppercontrol