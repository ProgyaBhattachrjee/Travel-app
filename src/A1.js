import React from 'react'

const A1 = ({p1,p2,h,im,ic,id,dt}) => {
  return (
    <article class="tour-card">
    <div class="tour-img-container">
      <img src={im} class="tour-img" alt="" />
      <p class="tour-date">{dt}</p>
    </div>
    <div class="tour-info">
      <div class="tour-title">
        <h4>{h}</h4>
      </div>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque
        vitae tempore voluptatum maxime reprehenderit eum quod
        exercitationem fugit, qui corporis.
      </p>
      <div class="tour-footer">
        <p>
          <span><i class={ic}></i></span> china
        </p>
        <p>{p1}</p>
        <p>{p2}</p>
      </div>
    </div>
  </article>
  )
}

export default A1
