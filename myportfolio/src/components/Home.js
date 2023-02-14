import React from 'react'
import { motion } from 'framer-motion'
import { NavLink, Outlet } from 'react-router-dom'
export default function Home() {
  return (
    <div>

        <motion.h1  
        animate={{opacity:1,scale:1.2}} 
         initial={{opacity:0}}  
         transition={{delay:0.4,duration:5,repeat:Infinity}}  style={{color:'lightgreen'}}> <b>Hi, I'm Vicky, Front End developer</b></motion.h1><hr/>
        <p style={{color:'white'}}>React js developer/javascript</p>
  <NavLink to="/Contact"><motion.button  whileHover={{scale:1.2}} className='btn btn-light'>contact me!</motion.button></NavLink>
    <Outlet/>  
<hr></hr>
    <h3 style={{fontSize:"2em", color:'white'}}>My Skills:</h3>
    
    <div class="container-sm" style={{color:'white'}}>
    
   


    <div class="container text-center">
  <div class="row">
    <div class="col">
    

    <center><motion.table whileHover={{scale:1.1}} style={{color:'white', border:'0.1rem solid green'}}>
    
    <tr>
    <th style={{color:'lightgreen'}}>Skill</th>
    <th  style={{color:'lightgreen'}}>Level</th>
    <th style={{color:'lightgreen'}}>Experience</th>
    </tr>

    <tr>
      <td>React Js</td>
      <td>Intermediate</td>
      <td>0.5 years</td>
    </tr>

    <tr>
      <td>Javascript</td>
      <td>Intermediate</td>
      <td>1.5 years</td>
      <td></td>
    </tr>

    <tr>
      <td>Jquery</td>
      <td>Intermediate</td>
      <td>0.5 years</td>
    </tr>
    <tr>
      <td>Html</td>
      <td>Intermediate</td> 
      <td>2 years</td>
    </tr>

    <tr>
      <td>Css</td>
      <td>Intermediate</td>
      <td>2 years</td>
    </tr>
    
    

    </motion.table></center><hr style={{color:'lightgreen'}}></hr>


    </div>
    <div class="col">
      <motion.img  whileHover={{scale:1.1}} src='my photo.jpg' className='img-thumbnail' style={{borderRadius:"50%",height:'25rem'}}></motion.img>
    </div>

  </div>
</div>
</div>

{/** projects*/}
<h3   style={{fontSize:"2em", color:'white'}}>My Projects:</h3>
<center><div class="container text-center" style={{color:'lightgreen'}}>

  <div class="row">
    <div class="col" >
      <NavLink to='https://bihar-tourism-vicky.netlify.app'><motion.h3  whileHover={{color:'yellow'}} animate={{scale:1.2}} transition={{duration:0.3 ,repeat:Infinity}} style={{marginTop:'2rem',color:'lightgreen'}}>Bihar Tourism Website</motion.h3></NavLink>
     <NavLink to='https://bihar-tourism-vicky.netlify.app'><motion.img whileHover={{scale:1.1}} src='buddha.jpg' className='img-thumbnail' style={{marginTop:'3rem',height:'20rem',width:'30rem'}} alt='....'/></NavLink>
     
      <div className="col" style={{marginTop:'1rem'}}>
      <motion.p whileHover={{color:'yellow'}}>This is a tourism website of Bihar, state of India, where you will find the complete details of all tourist places of incredible Bihar and its cultural heritage .it has features like: Booking System, DarkMode, Bill generation,etc.</motion.p>
    </div>
    </div>
  </div>

  <div class="row">
    <div class="col" >
      <NavLink to='https://takcart-my-shopping-app.netlify.app'><motion.h3  whileHover={{color:'yellow'}} animate={{scale:1.2}} transition={{duration:0.3 ,repeat:Infinity}} style={{marginTop:'2rem',color:'lightgreen'}}>Takcart-a shopping website</motion.h3></NavLink>
     <NavLink to='https://takcart-my-shopping-app.netlify.app'><motion.img whileHover={{scale:1.1}} src='takcart portfolio.jpg' className='img-thumbnail' style={{marginTop:'3rem',height:'20rem'}} alt='....'/></NavLink>
     
      <div className="col" style={{marginTop:'1rem'}}>
      <motion.p whileHover={{color:'yellow'}}>This is a Shopping website using React Js, Bootstrap,Formik,Material Ui and Css. It has facilities like -Cart system,automatic Total Price Calculation</motion.p>
    </div>
    </div>
  </div>
  
</div></center>
    </div>
  )
}
