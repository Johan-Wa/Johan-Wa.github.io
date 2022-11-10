import picture from '../assets/img/picture.jpg';
import python from '../assets/img/language/python.png';
import java from '../assets/img/language/java.png';
import css from '../assets/img/language/css.png';
import html from '../assets/img/language/html.png';
import js from '../assets/img/language/js.png';
import r from '../assets/img/language/r.png';
import gdscript from '../assets/img/language/godot.png';
import sql from '../assets/img/language/sql.png';

import collab_1 from '../assets/img/portfolio/collab_1.png';
import collab_2 from '../assets/img/portfolio/collab_2.png';
import deepnote_1 from '../assets/img/portfolio/deepnote_1.png';
import deepnote_2 from '../assets/img/portfolio/deepnote_2.png';
import fumigaciones from '../assets/img/portfolio/fumigaciones.png';
import picstory_index from '../assets/img/portfolio/picstory_index.png';
import picstory_login from '../assets/img/portfolio/picstory_login.png';
import storyteller_1 from '../assets/img/portfolio/storyteller_1.png';
import storyteller_2 from '../assets/img/portfolio/storyteller_2.png';
import titanic_tableu from '../assets/img/portfolio/titanic_tableu.png';
import web_inicio from '../assets/img/portfolio/web_inicio.png';
import web_tienda from '../assets/img/portfolio/web_tienda.png';

import React, {Component} from "react";
import '../assets/css/main.css';


class Main extends Component {
    render(){
        return(
            <div className="content">
                <h1>Sobre mi</h1>
                <div id='me' className='About-me'>
                    <img src={picture} alt='me'></img>
                    <div className='Me-description'>
                        <h3>Johan David Wallens Patiño</h3>
                        <h5>Programador junior</h5>
                        <p>
                            Soy un programador junior, enfocado principalmente en la ciencia de datos
                            y en el desarrolo backend.
                        </p>
                        <p>
                            Apasionado por la ciencia y la tecnologia, opte por aprender programacion con
                            dos propositos en en mente:
                            <ol>
                                <li>
                                    Desarrollar herramientas de software, que permitan el crecimiento y mejora
                                    de diferentes agentes, dentro de las dinamicas sociales y empresariales 
                                    de mi region.
                                </li>
                                <li>
                                    Lograr integrar la ingenieria de software, la ciencia de datos 
                                    y las ciencias naturales y exactas (especialmente la biologia),
                                     con el proposito de potenciar y optimizar los procesos
                                    de investigacion y la generacion de conocimientos desde las 
                                    diferentea areas del conocimiento.
                                </li>
                            </ol>    
                        </p>
                    </div>
                </div>
                <div className='Time-line'>
                    <h1>Resumen educativo</h1>
                    <ul>
                        <li>
                            <div className='Hide'>
                                <time>2014-2018</time>
                                <p>
                                    Estudios de biologia en la universidad icesi.
                                </p>
                                
                            </div>
                        </li>
                        <li>
                            <div className='Hide'>
                                <time>2018-2020</time>
                                <p>
                                    Cambio de universidad a la universidad javeriana de cali,
                                    e inicio en conceptos de programacion tanto por la carrera
                                    como de manera independiente.
                                </p>
                                
                            </div>
                        </li>
                        <li>
                            <div className='Hide'>
                                <time>2020</time>
                                <p>
                                    Empiezo a trabajar, realizando mantenimiento y actualizacion de computadoras,
                                    y empiezo a involucrarme mas en la programacion. 
                                </p>
                            </div>
                        </li>
                        <li>
                            <div className='Hide'>
                                <time>2021-2022</time>
                                <p>
                                    Realizo cursos de desarrollo y ciencia de datos en plataformas digitales,
                                    como udemy y platzi. 
                                </p>    
                            </div>
                        </li>
                        <li>
                            <div className='Hide'>
                                <time>2022</time>
                                <p>
                                    Concluyo la escuela de back-end con python en platzi,
                                    y el 80% de la carrera de ciencia de datos.
                                    Comienzo a perfilarme como desarrollador en busca de un empleo 
                                    en el area de la tecnologia.
                                </p>
                            </div>
                        </li>
                    </ul>
                </div>
                <div id='lang' className='Lang'>
                    <h1>Lenguajes</h1>
                    <div className='lang-container'>
                        
                        <h2 className='secondary-lang left'>
                            <span>
                                <img src={js} alt='Js logo'/>
                            </span>
                            JavaScript
                        </h2>
                        <h2 className='secondary-lang right'>
                            <span>
                                <img src={java} alt='Java logo' />
                            </span>
                            Java
                        </h2>
                        <h2 className='secondary-lang left'>
                            <span>
                                <img src={gdscript} alt='Godot logo' />
                            </span>
                            Gdscript
                        </h2>
                        <h2 className='main-lang'>
                            <span>
                                <img src={python} alt='Python logo' />
                            </span> Python
                        </h2>
                        <h2 className='secondary-lang right'>
                            <span>
                                <img src={html} alt='Html logo'/>
                            </span>
                            Html-5
                        </h2>
                        <h2 className='secondary-lang left'>
                            <span>
                                <img src={css} alt='Css logo'/>
                            </span>
                            CSS-3
                        </h2>
                        <h2 className='secondary-lang right'>
                            <span>
                                <img src={r} alt='R logo'/>
                            </span>
                            R
                        </h2>
                        <h2 className='secondary-lang left'>
                            <span>
                                <img src={sql} alt='Sql logo'/>
                            </span>
                            SQL
                        </h2>
                    </div>

                </div>
                <div id='tech' className='Technologies'>
                    <h1>Tecnologías</h1>
                    <ul className='tech-li'>
                        <li>Mysql</li>
                        <li>Django</li>
                        <li>Git</li>
                        <li>GitHub</li>
                        <li>Flask</li>
                        <li>Postgresql</li>
                        <li>Pandas</li>
                        <li>Matplotlib</li>
                        <li>FastApi</li>
                        <li>Tableu</li>
                        <li>Anaconda</li>
                        <li>Selenium</li>
                        <li>ReactJs</li>
                        <li>Boopstrap</li>
                        <li>Numpy</li>
                        <li>Docker</li>
                        <li>Firestore</li>
                        <li>Seaborn</li>
                        <li>Google collab</li>
                        <li>Deepnote</li>
                        <li>TypeScript</li>
                        <li>Linux</li>
                    </ul>

                </div>
                <div id='portf' className='Portfolio'>
                    <h1>Portafolio</h1>
                    <div className='all-port'>
                    <div className='portf-container'>
                            <figure>
                                <img src={collab_1}/>
                            </figure>
                            <figure>
                                <img src={collab_2}/>
                            </figure>
                            <figure>
                                <img src={deepnote_1}/>
                            </figure>
                            <figure>
                                <img src={deepnote_2}/>
                            </figure>
                            <figure>
                                <img src={fumigaciones}/>
                            </figure>
                            <figure>
                                <img src={picstory_index}/>
                            </figure>
                            <figure>
                                <img src={picstory_login}/>
                            </figure>
                            <figure>
                                <img src={storyteller_1}/>
                            </figure>
                            <figure>
                                <img src={storyteller_2}/>
                            </figure>
                            <figure>
                                <img src={titanic_tableu}/>
                            </figure>
                            <figure>
                                <img src={web_inicio}/>
                            </figure>
                            <figure>
                                <img src={web_tienda}/>
                            </figure>    
                        </div>
                    </div>
                        

                </div>
            </div>
        );
    }
}

export default Main;