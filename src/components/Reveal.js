import React from 'react'

function Reveal({loyer, adi, budget, active}) {
  return (
    <div className={'rounded-[12px] shadow-lg bg-[#fefcff] mt-[6rem] ' + (!active && ' blur-[8px]')} >
      <div className='max-w-[400px] relative py-[48px] px-[40px]'>
      <h3 className='text-[#0e2a63] text-[31px] mb-[3rem]'>Paiment</h3>
      <div className='mb-2'>
        <p>Loyer:</p>
        {loyer}
      </div>
      <div className='mb-2'>
        <p>Epargne additionnelle:</p>
        {adi}
      </div>
      <div className='mb-2'>
        <p>Budget mensuel:</p>
        {budget}
      </div>
      </div>
    </div>
  )
}
export default Reveal