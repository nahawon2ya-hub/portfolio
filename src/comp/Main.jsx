import { useEffect, useState, useRef } from "react"; // 1. useRef 추가
import TypeIt from "typeit-react";

function Main() {
  // 스크롤 다운 표시 여부 (처음엔 무조건 false)
  const [showScroll, setShowScroll] = useState(false);
  // 요소를 직접 선택하기 위한 ref 생성
  const scrollRef = useRef(null);

  useEffect(() => {
    // 1. 타이핑 애니메이션이 끝나는 시점(4.8초 뒤)에 스크롤 다운을 화면에 그리도록 설정
    const timer = setTimeout(() => {
      setShowScroll(true);
    }, 5500); 

    // 2. 스크롤 이벤트 함수
    const onScroll = () => {
      if (scrollRef.current) {
        // 스크롤 위치가 10보다 커지면 hide 클래스 추가
        scrollRef.current.classList.toggle("hide", window.scrollY > 10);
      }
    };

    window.addEventListener("scroll", onScroll);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return (
    <section className='main'>        
        <div className="Main_keyboard">
            <TypeIt
                getBeforeInit={(instance) => {
                instance.pause(1000).type("HYEWON P").pause(600).delete(2).pause(500).type("’S PORTFOLIO!");
                return instance;
              }}
            />
        </div>

        {/* 3. showScroll이 true가 되기 전(4.8초 전)에는 아예 HTML 태그 자체가 생성되지 않습니다 */}
        {showScroll && (
          <div className="scrolldown" ref={scrollRef}>
            <img src="./img/scrolldown.svg" alt="scroll down" />
            <p>Scroll Down</p>
            <img src="./img/scrolldown.svg" alt="scroll down" />
          </div>
        )}
    </section>
  )
}

export default Main;