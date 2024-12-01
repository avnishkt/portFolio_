import React from 'react'

export default function navCheck() {
  return (
    
    <div>
      <div id="navbarcont">
            
            <nav id="navbar">
                  
                    <HashLink 
                      id="homelink" 
                      className ={
                        activelink=='homelink' ? "linkactive": "link"  
                      }
                      onClick={(e) => {handleClick(e)}}
                      
                      smooth
                      to="#home" >Home
                    </HashLink>


                    <HashLink 
                      id="projectslink" 
                      className ={
                        activelink=='projectslink' ? "linkactive": "link"  
                      }
                      onClick={(e) => {handleClick(e)}}

                      smooth
                      to="#projects" >Projects
                    </HashLink> 

                    <HashLink 
                      onClick={(e) => {handleClick(e)}}
                      id="skillslink" 
                      className ={
                        activelink=='skillslink' ? "linkactive": "link"  
                      }
                      smooth
                      to="#skills" >Skills
                    </HashLink>


                    <HashLink 
                      id="contactlink" 
                      className ={
                        activelink=='contactlink' ? "linkactive": "link"  
                      }
                      onClick={(e) => {handleClick(e)}}

                      smooth
                      to="#contact" >Contact
                    </HashLink>  
                    <span> </span> 
            </nav>
    </div>
    </div>
    
  )
}

