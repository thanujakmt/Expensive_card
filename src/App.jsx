
import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { BarData } from './components/BarData'
import Bar from './components/Bar'

function App() {

  return (
    <>
      <div className=' bg-Cream h-screen justify-center items-center flex font-font_family_DM'>
        <div className=' h-[650px] w-[550px] justify-center items-center flex flex-col gap-5'>
          <div className="mybalance w-[320px] md:w-[510px] h-[110px] bg-Soft_red rounded-[10px] flex justify-between items-center px-5">
            <div>
              <p className='text-Very_pale_orange text-[1.2em]'>My balance</p>
              <p className='text-Very_pale_orange text-[1.8em] font-[600]'>$921.48</p>
            </div>
            <div>
              <img src="public/images/logo.svg" alt=""/>
            </div>
          </div>
          <div className="spending  h-[500px] w-[330px] md:w-[510px] bg-Very_pale_orange rounded-[10px]">
            <div className="spending flex items-center">
              <h1 className=' md:text-[1.9em] text-[1.6em] font-[600] text-Dark_brown pl-6 md:pl-10 py-10'>Spending - Last 7 days</h1>            </div>
             <div className="chart h-[200px] flex justify-evenly items-end">
                {
                  BarData.map((item,index) => {
                    return <Bar key={index} item= {item} />
                  })
                }
            </div>

            <div className="border-t border-Medium_brown month flex justify-between mx-8 mt-10 pt-5">
              <div>
                <p className='text-Medium_brown'>Total this month</p>
                <p className='text-Dark_brown text-[1.8em] md:text-[2.8em] font-[600]'>$478.33</p>
              </div>
              <div className='flex justify-end flex-col items-end'>
                <p className='text-Dark_brown font-[700]'>+2.4%</p>
                <p className='text-Medium_brown'>from last month</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
