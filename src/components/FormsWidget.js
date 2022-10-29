import React, { useState } from 'react'

function FormsWidget({
  city,
  setCity,
  housePrice,
  setHousePrice,
  deposit,
  setDeposit,
  calcule

}) {
  return (
    <div className='max-w-[590px] pr-[80px]'>
      <h3 className='text-[#0e2a63] text-[31px] mb-[3rem]'>Home details</h3>
      <div className="block p-6 rounded-lg shadow-lg w-[35rem] ">

        <div className='mb-6 flex'>
          <input
            type="text"
            className={"block w-full px-3 py-5 text-base font-normal text-[#0e2a63] bg-[#f3f4fb] bg-clip-padding rounded transition ease-in-out m-0 focus:text-[#0e2a63] focus:bg-[#ebedfb] focus:border-[#f3f4fb] focus:outline-none mr-2"}
            id="city"
            placeholder="Nom de la ville"
            onChange={(e) => setCity(e.target.value)}
            value={city}
          />
        </div>

        <div className='mb-6 flex'>
          <input
            type="number"
            className={"block w-full px-3 py-5 text-base font-normal text-[#0e2a63] bg-[#f3f4fb] bg-clip-padding rounded transition ease-in-out m-0 focus:text-[#0e2a63] focus:bg-[#ebedfb] focus:border-[#f3f4fb] focus:outline-none mr-2"}
            id="houseprice"
            placeholder="Prix de la maison"
            onChange={(e) => setHousePrice(e.target.value)}
            value={housePrice}
          />
        </div>

        <div className='mb-6 flex'>
          <input
            type="number"
            className={"block w-full px-3 py-5 text-base font-normal text-[#0e2a63] bg-[#f3f4fb] bg-clip-padding rounded transition ease-in-out m-0 focus:text-[#0e2a63] focus:bg-[#ebedfb] focus:border-[#f3f4fb] focus:outline-none mr-2"}
            id="deposit"
            placeholder="Epargne disponible"
            onChange={(e) => setDeposit(e.target.value)}
            value={deposit}
          />
        </div>

        <button
          type="submit"
          className="w-[99%] px-6 py-3 bg-[#445fdc] text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-hover hover:shadow-lg focus:bg-hover focus:shadow-lg focus:outline-none focus:ring-0 active:shadow-lg transition duration-150 ease-in-out"
          onClick={() => calcule()}
        >
          Calculer
        </button>
      </div>
    </div>
  )
}

export default FormsWidget