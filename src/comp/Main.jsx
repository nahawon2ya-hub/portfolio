
import TypeIt from "typeit-react";

function Main() {


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