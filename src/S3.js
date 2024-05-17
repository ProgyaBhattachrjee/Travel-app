import React from 'react'
import Article from './Article'
import Articles from './Articles'
const S3 = () => {
  return (
    <div>
      <section class="section services" id="services">
      <div class="section-title">
        <h2>our <span>services</span></h2>
      </div>
      <div class="section-center services-center">
      {Articles.map((b)=>{
    return <Article {...b} key={b.id} >
    </Article>
 })}
      </div>
    </section>
    </div>
  )
}

export default S3
