import React from 'react'
import As from './As'
import A1 from './A1'
const S4 = () => {
  return (
    <section class="section" id="tours">
    <div class="section-title">
      <h2>featured <span>tours</span></h2>
    </div>

    <div class="section-center featured-center">
    {As.map((a)=>{
        return <A1 {...a} key={a.id}></A1>
    })}
    </div>
  </section>
  )
}

export default S4
