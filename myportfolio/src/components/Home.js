import React from 'react'
import { NavLink, Outlet } from 'react-router-dom'
export default function Home() {
  return (
    <div>

        <h1 style={{color:'lightgreen'}}> <b>Hi, I'm Vicky, Front End developer</b></h1><hr/>
        <p style={{color:'white'}}>React js developer/javascript</p>
  <NavLink to="/Contact"><button className='btn btn-light'>contact me!</button></NavLink>
    <Outlet/>  
<hr></hr>
    <h3 style={{fontSize:"2em", color:'white'}}>My Skills:</h3>
    
    <div class="container-sm" style={{color:'white'}}>
    
   


    <div class="container text-center">
  <div class="row">
    <div class="col">
    

    <center><table style={{color:'white', border:'0.1rem solid green'}}>
    
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
    
    

    </table></center><hr style={{color:'lightgreen'}}></hr>


    </div>
    <div class="col">
      <img src='portfolio_image1-green.png' className='img-thumbnail' style={{borderRadius:"50%",height:'25rem'}}></img>
    </div>

  </div>
</div>
</div>

{/** projects*/}
<h3 style={{fontSize:"2em", color:'white'}}>My Projects:</h3>
<center><div class="container text-center" style={{color:'lightgreen'}}>

  <div class="row">
    <div class="col" >
     <NavLink to='https://bihar-tourism-vicky.netlify.app'> <h3 style={{marginTop:'2rem'}}>Bihar Tourism Website</h3></NavLink>
     <NavLink to='https://bihar-tourism-vicky.netlify.app'><img src='buddha2.jpg' className='img-thumbnail' style={{marginTop:'3rem'}}/></NavLink> 
      <div class="col" style={{marginTop:'1rem'}}>
      <p>This is a tourism website pf Bihar, state of India, where you will find the complete details of all tourist places of incredible Bihar and its cultural heritage .it has features like: Booking System, DarkMode, Bill generation,etc.</p>
    </div>
    </div>
  </div>

</div></center>
    </div>
  )
}
