import {useState} from 'react';
import data from './data.json'

export const App = () => {

const [items] = useState(data);

  return (
    <>
    <div className='md:flex md:items-center md:justify-center md:h-screen md:max-w-2xl md:mx-auto '>
      <section className=' md:flex bg-white rounded-3xl md:shadow-blue-100 md:shadow-xl '>
      <div  className='bg-div p-8 text-center text-white rounded-b-3xl md:flex-1 md:rounded-3xl md:pt-10 md:flex md:flex-col  md:items-center md:justify-center'>
        <p className='mb-6'>Your Result</p>
       <div className='flex items-center justify-center'>
       <p className='bg-circle items-center justify-center w-36 h-36 md:w-40 md:h-40 flex flex-col gap-2 rounded-full text-white text-5xl md:text-6xl  font-bold'>76 <p className='text-slate-500 text-base font-normal'> of 100</p>
        </p>
       </div>
        <h2 className='mt-6 mb-4 text-white font-bold md:text-2xl text-xl'> Great</h2>
        <p className='text-lg text-slate-300'>You scored higher than 65% of the people who have taken these tests.</p>
      </div>
      <div className='p-8 md:flex-1'>
       <h2 className='text-slate-700 mb-6 text-lg font-bold'> Summary</h2>


        <div className='flex flex-col gap-4' >

          {items.map((item, index) => (
           <div key={index} style={{
            backgroundColor: `${item.color}10` ,
           }} className='flex items-center justify-between p-4 rounded-lg '> 
            <h3 style={{
              color: item.color,
            }} className='flex items-center gap-2'>
              <img src={item.icon} alt={item.category}   />
              {item.category}
            </h3>
            <p className='flex items-center gap-2 text-slate-500' >
              <span className='text-slate-700 font-bold'>{item.score}</span> / 100</p>
           </div> 
          ))}
        </div>


       <button className='py-4 px-6 bg-slate-600 rounded-full text-white w-full mt-6 hover:bg-gradient-to-t from-blue-800 to-violet-700 transition-all duration-200 '>Continue</button>
      </div>
    </section>
    </div>
    <div className='w-full max-md:p-4 flex items-center justify-center  md:text-xl md:-mt-28 md:gap'>
    <p className='text-slate-700 max-md:text-xs'> Challenge by <a href="https://www.frontendmentor.io?ref=challenge" target="_blank" rel="noreferrer">Frontend Mentor</a>Coded by <a href="https://www.frontendmentor.io/profile/Leiah133" target="_blank" rel="noreferrer" > Léia Oliver</a>.</p>
  </div>
  </>
  )
}
