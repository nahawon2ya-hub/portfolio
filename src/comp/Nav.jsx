import React, { useEffect, useState, useRef } from 'react';

function Nav() {
    const [scrollY, setScrollY] = useState(0);           // nav 등장용
    const [clickActive, setClickActive] = useState('');  // active 메뉴
    const [sectionTops, setSectionTops] = useState({});  // 섹션 위치 저장
    const prevActiveRef = useRef('');                     // 이전 active 추적
    const [ignoreScroll, setIgnoreScroll] = useState(false); // 클릭 후 scroll 무시
    const threshold = 800;

    // 섹션 위치 한 번만 계산
    useEffect(() => {
        const about = document.querySelector('.about')?.offsetTop || 0;
        const skills = document.querySelector('.skills')?.offsetTop || 0;
        const projects = document.querySelector('.projects')?.offsetTop || 0;
        const contact = document.querySelector('.contact')?.offsetTop || 0;

        setSectionTops({ about, skills, projects, contact });
    }, []);

    // 스크롤 이벤트
    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            //if (ignoreScroll) return; // 클릭 후 잠시 무시

            const currentScrollY = window.scrollY;
            setScrollY(currentScrollY);

            if (!ticking) {
                window.requestAnimationFrame(() => {
                    let newActive = prevActiveRef.current;

                    if (sectionTops.contact && currentScrollY >= sectionTops.contact - 0) newActive = 'contact';
                    else if (sectionTops.projects && currentScrollY >= sectionTops.projects - 0) newActive = 'projects';
                    else if (sectionTops.skills && currentScrollY >= sectionTops.skills - 0) newActive = 'skills';
                    else if (sectionTops.about && currentScrollY < sectionTops.skills - 0) newActive = 'about';

                    if (prevActiveRef.current !== newActive) {
                        prevActiveRef.current = newActive;
                        setClickActive(newActive);
                    }

                    ticking = false;
                });
                ticking = true;
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, [sectionTops, ignoreScroll]);

    // 클릭 시 스크롤 이동
    function scrollMove(section) {
        const el = document.querySelector(`.${section}`);
        if (!el) return;

        //setClickActive(section);
        prevActiveRef.current = section;
        setIgnoreScroll(true); // 클릭 후 scroll 이벤트 무시

        el.scrollIntoView({ behavior: 'smooth' });

        // 애니메이션 완료 후 scroll 이벤트 다시 허용
        setTimeout(() => setIgnoreScroll(false), 700); // 필요하면 조절 가능
    }

    return (
        <nav className={scrollY > sectionTops.about ? 'active' : ''}>
            <a className={`clickable ${clickActive === 'about' ? 'active' : ''}`} onClick={() => scrollMove('about')}>
                <img src='./img/nav.svg' alt='About' />About
            </a>
            <a className={`clickable ${clickActive === 'skills' ? 'active' : ''}`} onClick={() => scrollMove('skills')}>
                <img src='./img/nav.svg' alt='Skills' />Skills
            </a>
            <a className={`clickable ${clickActive === 'projects' ? 'active' : ''}`} onClick={() => scrollMove('projects')}>
                <img src='./img/nav.svg' alt='Projects' />Projects
            </a>
            <a className={`clickable ${clickActive === 'contact' ? 'active' : ''}`} onClick={() => scrollMove('contact')}>
                <img src='./img/nav.svg' alt='Contact' />Contact
            </a>
        </nav>
    );
}

export default Nav;


//const [scollY, setScrollY] = useState(0); // 현재 스크롤 위치 저장
//const threshold = 300; (nav가 나타날 기준 위치)
// useEffect(() => {
//   const handleScroll = () => setScrollY(window.scrollY); // 현재 위치 state 업데이트
//   window.addEventListener('scroll', handleScroll);       // 이벤트 등록
//   return () => window.removeEventListener('scroll', handleScroll); // 해제
// }, []);

//window.scrollY 측정 → setScrollY(state)
// scrollY > threshold ?
//       ├── true  → className = 'active' → CSS 적용 → nav 보임
//       └── false → className = ''       → CSS 적용 → nav 숨김
//       │
//       ▼
// 컴포넌트 리렌더링 → nav 상태 반영