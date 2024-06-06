import React from 'react';
import "./what.css";

const What = () => {
  return (
    <div className="flex justify-center py-10">
      <div className='bg-blue-900 p-2 md:p-7 py-10 w-[80%]'>
        <div className="title p-4 flex flex-col md:flex-row justify-center ">
          <div className="lineline w-[100%] md:w-[50%]">
            <p></p>
            <h1 className='text-subtext text-xl md:text-4xl'>What is GPT?</h1>
          </div>
          <p className='text-text text-xl'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro similique illum voluptate quia natus, autem recusandae incidunt voluptas quod accusantium neque vel ducimus cumque, expedita tempore quos, soluta nulla.</p>

        </div>

        <div className="bigbrief py-10 p-4 flex flex-col md:flex-row justify-center gap-5">

          <h1 className=' text-subtext text-4xl font-bold'>The Possibilities are beyond your imagination.</h1>
          <section className='flex flex-col'>

            <p className='text-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro similique illum voluptate quia natus, autem recusandae incidunt voluptas quod accusantium neque vel ducimus cumque, expedita tempore quos, soluta nulla.</p>
            <h3 className=' text-subtext'>Explore the Library</h3>
          </section>
        </div>

        <div className="what3feat py-10 p-4 flex flex-col md:flex-row gap-5">
          <div className="">
            <div className="lineline2">
              <p></p>
              <h1 className='text-subtext text-2xl font-bold'>Chatbots</h1>
            </div>

            <p className='text-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro similique illum voluptate quia natus, autem recusandae incidunt voluptas quod accusantium neque vel ducimus cumque, expedita tempore quos, soluta nulla.</p>
          </div>
          <div className="">
          <div className="lineline2">
              <p></p>
              <h1 className='text-subtext text-2xl font-bold'>Image Generation</h1>
            </div>
            <p className='text-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro similique illum voluptate quia natus, autem recusandae incidunt voluptas quod accusantium neque vel ducimus cumque, expedita tempore quos, soluta nulla.</p>
          </div>
          <div className="">
          <div className="lineline2">
              <p></p>
              <h1 className='text-subtext text-2xl font-bold'>Programming</h1>
            </div>
            <p className='text-text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam porro similique illum voluptate quia natus, autem recusandae incidunt voluptas quod accusantium neque vel ducimus cumque, expedita tempore quos, soluta nulla.</p>
          </div>


        </div>

      </div>

    </div>
  )
}

export default What
