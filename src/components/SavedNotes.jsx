import React from 'react'

const SavedNotes = ({notes,setNotes}) => {
    const deleteNote=(index)=>{
        const updatedNotes=[...notes]
        updatedNotes.splice(index,1)
        setNotes(updatedNotes)
    }
    
  return (
    <div className='flex text-center mt-15 flex-col gap-5'>
       <h1 className='text-green-500 text-3xl font-serif font-bold'>Saved Notes</h1>
       <ul className='flex flex-col gap-4 items-center p-0'>{
        notes.map((currentNote,index)=>(
          <li key={index} className='bg-gray-100 text-lg border-2 border-green-500 rounded-lg w-100'>
           <p>{currentNote.emoji}</p>
           <p className='text-gray-500'>{currentNote.details}</p>
           <p className='text-gray-400'>{currentNote.now.toLocaleDateString()}</p>
           <button 
           className='bg-green-500 text-white text-1xl font-bold w-40 rounded-lg cursor-pointer hover: bg-green-600'
            onClick={()=>deleteNote(index)}>
            Delete Note</button>
          </li>
          
        ))
        }

       </ul>
    </div>
  )
}

export default SavedNotes