import React from 'react'
import L1 from './L1'
import F1 from './F1'
import F2 from './F2'
import L2 from './L2'
const Foot = () => {
  return (
    <div>
          <footer class="section footer">
      <ul class="footer-links">
      {F1.map((b)=>{
    return <L1 {...b} key={b.id} >
    </L1>
 })}
      </ul>
      <ul class="footer-icons">
      {F2.map((b)=>{
    return <L2 {...b} key={b.id} >
    </L2>
 })}
      </ul>
      <p class="copyright">
        copyright &copy; Backroads travel tours company
        <span id="date"></span> all rights reserved
      </p>
    </footer>
    </div>
  )
}

export default Foot
