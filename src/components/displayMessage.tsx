import React, { useState } from 'react'
import { RootState } from '../features/store'
import { useDispatch, useSelector } from 'react-redux'
const DisplayMessage:React.FC=()=> {
    const count:number= useSelector((state:RootState)=>state.counter.value)
    const dispatch= useDispatch()
    let message;
    count? message= `you are ${count} years of age`:message= `please enter your age`; 
    const [submitClicked, setSubmitClicked]= useState<boolean>(false)
    setTimeout(()=>{
        setSubmitClicked(false)
        // dispatch()
    },2000)
    return (
        <div>
        {submitClicked?(
        <>
        <p className='capitalize bg-red-400 backdrop-opacity-10 text-black text-xl font-semibold my-3'>{message}</p>
        <button className='bg-blue-400 text-white px-20 mt-3 text-2xl' onClick={()=>setSubmitClicked(!submitClicked)}>Submit</button>
        </>
        ):(
        <button className='bg-blue-400 text-white px-20 mt-3 text-2xl' onClick={()=>setSubmitClicked(!submitClicked)}>Submit</button>
        )}
    </div>
  )
}

export default DisplayMessage