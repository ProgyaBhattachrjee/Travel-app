import React from 'react'
const Article = ({cls,h,id}) => {
  return (
         <article class="service">
          <span class="service-icon"><i class={cls}></i></span>
          <div class="service-info">
            <h4 class="service-title">{h}</h4>
            <p class="service-text">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores, officia.
            </p>
          </div>
        </article>
    
  )
}

export default Article
