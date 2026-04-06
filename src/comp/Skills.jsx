import React, { useState } from 'react'
import skill from '../json/skills.json'

function Skills() {
  const [type, setType] = useState('all'); 

  return (
    <div className='skills'>
      <div>
        <div className='skills_1'>
          <div>SKILLS</div>
          <div>현재 사용할 수 있는 기술들과 학습 중인 기술들입니다.</div>
        </div>

        <div className='skills_2'>
          <div className='skills_button'>            
            <button className={`clickable ${type === 'all' ? 'active' : ''}`} onClick={()=>{setType('all')}}>전체</button>
            <button className={`clickable ${type === 'front' ? 'active' : ''}`} onClick={()=>{setType('front')}}>프론트엔드</button>
            <button className={`clickable ${type === 'Deploy' ? 'active': ''}`} onClick={()=>{setType('Deploy')}}>배포</button>
            <button className={`clickable ${type === 'tool' ? 'active' : ''}`} onClick={()=>{setType('tool')}}>디자인</button>
          </div>

          <div className='skills_list'>
            {
              skill.map(function(item){ //item안에 json이 들어있음
                return <img src={item.url} className={(item.type===type)?'': (type==='all')?'':'active'}/>
              })
            }
           
          </div>
        </div>

        <div className='skills_background'>
          <p className='left_to_right'>TAILWIND_JAVASCRIPT_HTML_CSS_NEXT_REACT_TYPESCRIPT_ZUSTAND_SASS_GITHUB_VERCEL_PHOTOSHOP_MONGODB_FIGMA_TAILWIND_JAVASCRIPT_HTML_CSS_NEXT_REACT_TYPESCRIPT_ZUSTAND_SASS_GITHUB_VERCEL_PHOTOSHOP_MONGODB_FIGMA_TAILWIND_JAVASCRIPT_HTML_CSS_NEXT_REACT_TYPESCRIPT_ZUSTAND_SASS_GITHUB_VERCEL_PHOTOSHOP_MONGODB_FIGMA</p>
          <p className='right_to_left'>TAILWIND_JAVASCRIPT_HTML_CSS_NEXT_REACT_TYPESCRIPT_ZUSTAND_SASS_GITHUB_VERCEL_PHOTOSHOP_MONGODB_FIGMA_TAILWIND_JAVASCRIPT_HTML_CSS_NEXT_REACT_TYPESCRIPT_ZUSTAND_SASS_GITHUB_VERCEL_PHOTOSHOP_MONGODB_FIGMA_TAILWIND_JAVASCRIPT_HTML_CSS_NEXT_REACT_TYPESCRIPT_ZUSTAND_SASS_GITHUB_VERCEL_PHOTOSHOP_MONGODB_FIGMA</p>
          <p className='left_to_right'>TAILWIND_JAVASCRIPT_HTML_CSS_NEXT_REACT_TYPESCRIPT_ZUSTAND_SASS_GITHUB_VERCEL_PHOTOSHOP_MONGODB_FIGMA_TAILWIND_JAVASCRIPT_HTML_CSS_NEXT_REACT_TYPESCRIPT_ZUSTAND_SASS_GITHUB_VERCEL_PHOTOSHOP_MONGODB_FIGMA_TAILWIND_JAVASCRIPT_HTML_CSS_NEXT_REACT_TYPESCRIPT_ZUSTAND_SASS_GITHUB_VERCEL_PHOTOSHOP_MONGODB_FIGMA</p>
        </div>
      </div>
    </div>
  )
}

export default Skills



// json으로 데이터 뿌리기
// 삼항연산자   (조건) ? 조건이true일때 실행장송 :  false일때 실행하는장소
// (type==='front') 
// button클릭시 front,deploy,tool 꺼내기




