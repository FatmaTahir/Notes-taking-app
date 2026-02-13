import React from 'react'
import { Link } from 'react-router-dom'
import { LuNotebookPen } from "react-icons/lu";
const Nav = () => {
  return (
    <div className='bg-green-500 h-20 text-white flex flex-row justify-between items-center font-serif font-bold'>
        <div className='flex ml-8 text-white gap-3'>
            <div className='text-5xl'><LuNotebookPen /></div>
           <h4 className='text-1xl mt-3'>MoodNotes</h4>
          
        </div>
        <div className='flex flex-row list-none gap-7 mr-7 font-bold font-serif'>
            <li><Link to="/" className='cursor-pointer' >Home</Link></li>
            <li><Link to="/saved-notes" className='cursor-pointer' >Saved Notes</Link></li>
        </div>
    </div>
  )
}

export default Nav