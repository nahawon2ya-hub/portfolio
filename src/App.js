import { useEffect } from 'react';
import './App.css';
import About from './comp/About';
import Contact from './comp/Contact';
import Main from './comp/Main';
import Nav from './comp/Nav';
import Projects from './comp/Projects';
import Skills from './comp/Skills';
import './font.css'

function App() {
  useEffect(()=>{
    const el_photo = document.querySelectorAll('.App div')

    //new IntersectionObserver(function(){},{옵션})
    let observer = new IntersectionObserver(function(entries){

      entries.forEach(function(entry,i){
          if(entries[i].isIntersecting){
              entries[i].target.classList.add('active');                   
          }
      });

    },{threshold:0.1});

    el_photo.forEach(function(target,i){
        observer.observe(target);
    });
  })
    
  return (
    <div className="App">
      <Main />

      <About />

      <Skills />

      <Projects />

      <Contact />

      <Nav />
    </div>
  );
}

export default App;
