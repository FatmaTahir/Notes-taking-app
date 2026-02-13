import React , { useState }from 'react'
const Main = ({notes,setNotes}) => {
  const[emoji,setEmoji] =useState("")
  const[details,setDetails] = useState("");
  
  const emojiList = ["\u{1F604}", "\u{1F613}", "\u{1F621}", "\u{1F92B}"];
  const submitHandle = (e) =>{
    e.preventDefault();
    console.log(notes)
    if(details.trim()==="" && emoji==="")
        return;
    else{
        const now =new Date();
        setNotes([...notes,{emoji,details,now}]);
        setDetails("");
        setEmoji("");
    }
    
  }

  const handleDetails =(e)=>{
    setDetails(e.target.value)
  }
 const styleEmoji = (currentEmoji)=>{
    let btnclass = "cursor-pointer hover:scale-125 ";
    if(emoji===currentEmoji)
        btnclass += "scale-150";
    else
        btnclass += "scale-100";

    return btnclass;
 };

  return (
    <div >
        <form onSubmit={submitHandle} className='flex flex-col gap-10 p-20 ml-90 '>
        <h1 className='text-green-500 text-3xl font-bold font-serif '>How do you feel today?</h1>
        <div className='flex'>
             <ul className='flex flex-row items-center gap-12 text-4xl'>
            {  emojiList.map((currentEmoji, index) => (
              <li key={index}>
                <button type="button"
                  onClick={() => setEmoji(currentEmoji)} 
                  className={styleEmoji(currentEmoji)}>
                  {currentEmoji}
                </button>
              </li>
            )) 
            }
          </ul>
           
        </div>
        <textarea rows='5'  type='text' value={details} placeholder='Add a note ...' className='font-serif w-95 border-2 border-green-500 rounded-lg '  onChange={handleDetails}></textarea>
        <button type='submit' className=' bg-green-500 font-serif text-white font-bold w-95 rounded-lg cursor-pointer'>Save</button>
      </form>
    </div>
  )
}

export default Main