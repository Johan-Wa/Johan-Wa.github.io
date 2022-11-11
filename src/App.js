import logo from'./assets/img/logo.png'
import github from './assets/img/social_media/github.png'
import linkedin from './assets/img/social_media/linkedin.png'
import platzi from './assets/img/social_media/platzi.webp'
import './assets/css/App.css';

// Import components
import NavBar from './components/NavBar';
import Main from './components/Main';
import Foot from './components/Foot';


function App() {
  
  window.addEventListener("scroll",function() {
    var hide_elements = this.document.querySelectorAll('.Hide');
    for (let i=0; i< hide_elements.length; i++){
      var bounding = hide_elements[i].getBoundingClientRect();
      if (
        bounding.top >= 0 &&
        bounding.left >= 0 &&
        bounding.right <= (window.innerWidth || document.documentElement.clientWidth) &&
        bounding.bottom <= (window.innerHeight || document.documentElement.clientHeight)
      ) {
        hide_elements[i].style.opacity='100%';
      } else {
        
      }

    }
      
    if (window.screen.width >=1024) {
      this.document.querySelector(".App-header").style.width='25vw';
    } else {
      this.document.querySelector(".App-header").style.width='25vw';
      this.document.querySelector(".App-header").style.left='-25vw';
    } 
  })
  //var icon = document.querySelector('.ico')
  window.addEventListener('click',function(){
    var icon = document.querySelector('.ico')
    icon.addEventListener('click', function(){
      document.querySelector(".App-header").style.left='0';
      document.querySelector(".App-header").style.width='100vw';
    })
  })


  return (
    <div className="App">
      
      <header className="App-header">
        <div className='nav'>
          <NavBar />
        </div>
        <img className='App-logo' src={logo}/>
        <h3>
        Johan-Wa
        </h3>
        <p>
          Desarrollador back-end
        </p>
      
        <a
          className="App-link"
          href="#me"
          rel="noopener noreferrer"
        >
          Sobre mi
        </a>
        <a
          className="App-link"
          href="#lang"
          rel="noopener noreferrer"
        >
          Lenguajes
        </a>
        <a
          className="App-link"
          href="#tech"
          rel="noopener noreferrer"
        >
          Tecnologías
        </a>
        <a
          className="App-link"
          href="#portf"
          rel="noopener noreferrer"
        >
          Portafolio
        </a>
        <br />
        <div className='social-media'>
          <a href='https://www.linkedin.com/in/johan-david-wallens-pati%C3%B1o-a78401152/'
          target='blank'>
            <img className='s-red' src={linkedin}/>
          </a>
          <a href='https://github.com/Johan-Wa' target='blank'>
            <img className='s-red' src={github}/>
          </a>
          <a href='https://platzi.com/p/johan-david-wallens/' target='blank'>
            <img className='s-red' src={platzi}/>
          </a>
          
        </div>
        
      </header>
      <div className='page'>
        
        <main>
          <Main />
        </main>
        <footer>
          <Foot />
        </footer>

      </div>
      
    </div>
  );
  
}

export default App;
