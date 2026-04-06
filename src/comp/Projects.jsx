import React, { useState } from 'react'
import project from '../json/projects.json'

function Projects() {
  const [type, setType] = useState();

  return (
    <div className='projects'>
          <div className='projects_title'>PROJECTS</div>

          <div className='projects_background'>PROJECTS</div>

          {
            project.map((item,i)=>(
              <div className='projects_1' key={i}>
                <a href={item.siteLink} className='projects_img clickable'><img src={item.image}/></a>

                <div className='projects_content'>
                  <div className='projects_content_1'>
                    <div>Ongib</div>
                    <a href={item.siteLink} className='clickable'><img src='./img/link.svg' /></a>
                    <a href={item.githubLink} className='clickable'><img src='./img/projects_github.svg' /></a>
                  </div>

                  <div className='projects_content_2'>{item.subtitle}</div>

                  <div className='projects_content_3'>{item.date}</div>

                  <div className='projects_content_4'>
                    {item.description}
                  </div>

                  <div className='projects_content_5'>   
                    {item.skills.map((tag, j)=>(
                      <p key={j}>{tag}</p>
                    ))}      
                    {/* <p>HTML</p>
                    <p>CSS</p>
                    <p>JAVASCRIPT</p> */}
                  </div>
                </div>
            </div>
            ))
          }
      </div>
  )
}

export default Projects