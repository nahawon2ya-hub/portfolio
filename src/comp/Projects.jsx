import { useEffect, useState } from 'react';
import project from '../json/projects.json'
import Popup from './Popup'

function Projects() {
  const [item, setItem] = useState(null);

  

  return (
    <>
    <div className='projects'>
      <div className='projects_title'>PROJECTS</div>

      <div className='projects_background'>PROJECTS</div>

      <ul className='projects_contents'>
        {project.map((item, i) => (
          <li key={i}>
            <div onClick={() =>{setItem(item); document.body.style.overflow='hidden'}} className='clickable'><img src={item.image} /></div>
            <span>
              <div>{item.title}</div>
              <a href={item.siteLink} target='blank' className='clickable'><img src='./img/link.svg' /></a>
              <a href={item.githubLink} target='blank' className='clickable'><img src='./img/projects_github.svg' /></a>
            </span>
            <div>{item.subtitle}</div>
          </li>
        ))}
      </ul>


    </div>
    {item && <Popup item={item} setItem={setItem} /> }
  </>
  )
}

export default Projects  