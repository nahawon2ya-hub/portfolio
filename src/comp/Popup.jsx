import { useEffect, useRef, useState } from 'react'
import project from '../json/projects.json'

function Popup({item, setItem}) {   

    const popRef = useRef();
    function outsideClose(e){

        if(e.target.contains(popRef.current)) setItem(null);
        
    }
        
  return (
    <div className='projects_popup_wrap' ref={popRef} onClick={(e)=>{outsideClose(e); document.body.style.overflow='visible'}}>
          
    <div className='projects_popup' >
        <div className='popup_cancel'><img className='clickable' onClick={() => {setItem(); document.body.style.overflow='visible'}} src='./img/cancel.svg'/></div>
        <div className='popup_box'>
            <div className='popup_title'>
                <div>{item.title}</div>
                <div>{item.subtitle}</div>
            </div>
            <div className='popup_1'>
                <div>소개</div>
                <div>{item.description}</div>
            </div>
            <div className='popup_skills'>
                <div>기술</div>
                <div>
                    {item.skills.map((tag,j)=>(
                        <img key={j} src={tag}/>
                    ))}
                </div>
            </div>
            <div className='popup_2'>
                <div className='popup_date'>
                    <div>기간</div>
                    <div>{item.date}</div>
                </div>
                <div className='popup_person'>
                    <div>참여인원</div>
                    <div>{item.person}</div>
                </div>
                <div className='popup_link'>
                    <span>
                        <a href={item.siteLink} target='blank' className='clickable'>배포URL</a>
                    </span>
                    <span>
                        <a href={item.githubLink} target='blank' className='clickable'>GitHub</a>
                    </span>
                </div>
            </div>
            <div className='popup_troubleshooting'>
                <div>트러블슈팅</div>
                <div>
                    {item.trouble.map((shoot,j)=>(
                        <div key={j} className='popup_shoot'>
                            <div>{shoot.title}</div>

                            <div>
                                <div>원인</div>
                                <div>{shoot.reason}</div>
                            </div>

                            <div>
                                <div>해결</div>
                                <div>{shoot.solve}</div>
                            </div>
                        </div>
                    ))}
                   
                </div>
            </div>
        </div>
    </div>
               

    </div>
    )
}

export default Popup