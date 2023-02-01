import React from 'react'
import { motion } from 'framer-motion'
import { NavLink } from 'react-router-dom'

export default function Contact() {
  return (
    <div>
     <h1 style={{color:'lightgreen'}}><b>Contact Me</b></h1> <br></br>
     <center><p style={{color:'white'}}>
I'm interested in freelance opportunities-especially front end projects.However, if you have other request or question, don't hesitate to contact me.
     </p></center>

     {/**form start */}

<center><div  style={{width:'25rem' , border:'0.1rem solid green', padding:'2rem'}}   >
     <div className="input-group">
     <div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default">FullName</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>
</div>
<br></br>
<div className="input-group mb-3">
  <span className="input-group-text" id="inputGroup-sizing-default">Mobile No</span>
  <input type="text" className="form-control" aria-label="Sizing example input" aria-describedby="inputGroup-sizing-default"/>
</div>

<br></br>

<div class="mb-3">
  <label for="exampleFormControlInput1" className="form-label" style={{color:'white'}}>Email address</label>
  <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com"/><br></br>
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" className="form-label" style={{color:'white'}}>Message</label>
  <textarea class="form-control" id="exampleFormControlTextarea1" rows="3"></textarea>
</div>
<br></br>
<motion.button whileHover={{scale:1.2}} className='btn btn-primary'>Send</motion.button>

</div></center>
{/**form ends here */}

<center><NavLink to='/Home'>Home</NavLink></center>

    </div>
  )
}
