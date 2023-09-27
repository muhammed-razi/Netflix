import React, { useState } from 'react'
import './Nav.css'
import { useEffect } from 'react'

function Nav() {
    const [show,setShow] = useState(false)
    useEffect(() => {
        window.addEventListener("scroll",()=>{
            if(window.scrollY>600){
                setShow(true)
            }else{
                setShow(false)
            }
        })
    })
    //console.log(show);
  return (
    <div className={`${show && 'nav-black'} nav`}>
        <img width={'150px'} src="https://images.ctfassets.net/y2ske730sjqp/6bhPChRFLRxc17sR8jgKbe/6fa1c6e6f37acdc97ff635cf16ba6fb3/Logos-Readability-Netflix-logo.png" alt="nefix logo" />
    </div>
  )
}

export default Nav