import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { RootState } from '../features/store'
import { incrementAge, decrementAge,ageByUser, getInput } from '../features/slices/counterSlice'
import DisplayMessage from './displayMessage';

function Counter() {
    const [getage, setGetAge] = useState<number>(0)
    const count= useSelector((state:RootState)=>state.counter);
    const dispatch= useDispatch();
    const handleChange=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setGetAge(parseInt(event.target.value));
        }
    const handleAge=()=>{
        dispatch(ageByUser(getage))        
    }
  return (
    <>
{    count.displayClicked?(
        <>
            <div className='flex space-x-8 border-2 p-0 rounded-xl text-white'>
            <button onClick={()=>dispatch(incrementAge())} className='bg-blue-400 text-4xl text-white'>+</button>
           <input type="number" onChange={handleChange} onBlur={handleAge} className='text-black w-20' placeholder='enter you age'/>
            <button onClick={()=>dispatch(decrementAge())} className='bg-blue-400 text-4xl'>-</button>
            </div>
            <DisplayMessage/>
        </>

    ):(
        <>
            <div className='flex space-x-8 border-2 p-0 rounded-xl text-white'>
            <button onClick={()=>dispatch(incrementAge())} className='bg-blue-400 text-4xl text-white'>+</button>
            <h3 className='my-auto text-8xl text-black font-thin' onClick={()=>dispatch(getInput())}>{count.value}</h3>
            <button onClick={()=>dispatch(decrementAge())} className='bg-blue-400 text-4xl'>-</button>
            </div>
            <DisplayMessage/>
        </>
        )}

    </>
  )
}

export default Counter