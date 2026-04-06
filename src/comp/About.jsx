import React, { useEffect } from 'react'

function About() {
  
  return (
    <div className='about'>
        <div className='about_1'>
          <div>안녕하세요.</div>
          <div>
            <div className='cube'>
                <div>
                    <span className='top'>직관적인 UI를 만드는</span>
                    <span className='front'>트렌드에 민감한</span>
                    <span className='bottom'>사용자 친화적인</span>
                    <span className='back'>꾸준히 성장하는</span>
                </div>
            </div>
            <span>이혜원</span>입니다.
          </div>
          <div>
            <span>사용자 경험을 중요하게 생각</span>하는 프론트엔드 개발자입니다. <br/>
            React를 기반으로 직관적이고 반응성있는 UI를 구현하는데 관심이 있습니다. <br/>
            실제 사용자 입장에서 고민하며 <span>꾸준히 성장하는 개발자</span>를 목표로 합니다.
          </div>
        </div>

        <div className='about_2'>
           <div>
             <div>
                <div>경력</div>
                <div>
                  <p>KTis <span>(2017.10-2021.11)</span></p>
                  <p>디씨미디어 <span>(2024.08-2025.10)</span></p>
                </div>
             </div>
             <div>
                <div>자격증</div>
                <div>
                  <p>ITQ OA MASTER(한글, 파워포인트, 엑셀, 인터넷)</p>
                  <p>GTQ 포토샵 1급</p>
                  <p>컴퓨터활용능력 2급</p>
                  <p>정보처리기능사</p>
                </div>
             </div>
           </div>
           <img src='./img/profile.jpg' />
        </div>

        <div className='about_3'>
          <div>
            <div>사용자를 위한 웹 경험</div>
            <p>
              HTML, CSS, JavaScript의 핵심 개념을 바탕으로 웹 표준을 준수한 UI를 구현합니다. <br/>
              React와 TypeScript를 활용해 상태 관리(Zustand), 라우팅, API 통신까지 적용한 프로젝트 경험이 있습니다.
            </p>
          </div>
          <div>
            <div>문제를 통한 성장</div>
            <p>
              개발 과정에서 발생한 문제를 원인 분석을 통해 해결하고, 공식 문서와 다양한 자료를 기반으로 학습한 내용을 프로젝트에 적용합니다. <br/>
              이러한 경험을 통해 꾸준히 성장하며, 작은 개선을 쌓아가는 지속적인 발전을 지향합니다.
            </p>
          </div>
          <div>
            <div>이해에서 시작되는 협업</div>
            <p>
              프로젝트를 진행할 때 협업에서 가장 중요한 것은 명확한 소통이라고 생각합니다. <br/>
              비록 현장 경험은 없지만, 기획자·디자이너·개발자 간 의견을 정확하게 전달하고 이해하는 것을 항상 중요하게 여깁니다.
            </p>
          </div>
        </div>

        <div className='about_background'>
          ABOUT <br/>
          ME
        </div>
    </div>
  )
}

export default About