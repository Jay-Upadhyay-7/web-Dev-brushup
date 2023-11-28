"use client"
import React, { useState } from 'react'

const page = () => {
  const [title, settitle] = useState("")
  const [desc, setdesc] = useState("")
  const [mainTask, setmainTask] = useState([])

  const submitHandler=(e)=>{
    e.preventDefault()
    setmainTask([...mainTask,{title,desc}]);
    settitle("")
    setdesc("")
  }

  const deleteHandler=(i)=>{
      let copytask=[...mainTask]
      copytask.splice(i,1);
      setmainTask(copytask)
  }

  let renderTask = <h2>No Task Availiable</h2>

  if(mainTask.length>0){
  renderTask= mainTask.map((t,i)=>{
    return (
      <li key={i} className='flex mb-4 items-center justify-between'>
    <div className='flex items-center justify-between mb-5 w-2/3'>
      <h5 className='text-xl font-semibold'>{t.title}</h5>
      <h5 className='text-xl font-semibold'>{t.desc}</h5>
    </div> 
    <button onClick={()=>{
      deleteHandler(i);
    }}
    className='bg-red-400 p-3 text-white rounded font-bold'>Delete</button>
    </li> 
    );
  }) }
  return (
   <>
   <h1 className='bg-black text-white p-5 text-5xl font-bold text-center'>
    Jay's TODO list
   </h1>
   
   <form onSubmit={submitHandler}>
      
      <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
      placeholder='Enter Task Here'
      value={title}
      onChange={(e)=>{
        settitle(e.target.value)
      }}/>
      <input type="text" className='text-2xl border-zinc-800 border-4 m-8 px-4 py-2'
      placeholder='Enter Description'
      value={desc}
      onChange={(e)=>{
        setdesc(e.target.value)
      }}/>
       <button className='bg-black px-4 py-2 text-2xl rounded m-5 text-white'>Add Note</button>
   </form>

   <hr/>

   <div className='p-8 bg-slate-200'>
       <ul>
        {renderTask}
       </ul>
   </div>

   </>
  )
}

export default page
