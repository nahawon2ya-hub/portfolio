
import { useEffect } from "react";
import TypeIt from "typeit-react";

function Main() {
  useEffect(() => {
    const el = document.querySelector(".scrolldown");

    const onScroll = () => {
      el.classList.toggle("hide", window.scrollY > 10);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <section className='main'>        
        <div className="Main_keyboard">
            <TypeIt
                getBeforeInit={(instance) => {
                instance.pause(1000).type("HYEWON P").pause(600).delete(2).pause(500).type("’S PORTFOLIO!");

                // Remember to return it!
                return instance;
              }}
            />
        </div>
        <div className="scrolldown">
          <img src="./img/scrolldown.svg" />
          <p>Scroll Down</p>
          <img src="./img/scrolldown.svg" />
        </div>
    </section>
  )
}

export default Main