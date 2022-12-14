import React from 'react'

const SecondSection = () => {
  return (
    <section className="w-full flex items-center justify-center">
      
        <div className="flex items-center flex-col justify-center w-3/5 gap-10 p-10">
          
          <div className="border-3 md:border-b-4 border-primary w-[80px]  md:w-[300px]" />
          <h1 className="font-bold md:text-3xl text-2xl text-center md:w-full w-[300px] ">
            AI-Powered Software and Analytics Platform for the Automotive
            Aftersales sector
          </h1>
          <p className="flex items-center text-lg text-center md:w-full w-[300px]">
            AutoHyve is the simple alternative to Email threads, Whatsapp pdf,
            spreadsheets or outdated fleet software – <br /> It brings all your
            vehicles’ repair and maintenance data into one place, for real-time
            insights that can reveal cost savings in the management of your
            assets, all without the need to manage any infrastructure.
          </p>
        </div>
      </section>
  )
}

export default SecondSection