import menu from '../assets/img/menu.png'
import React, {Component} from "react";



class NavBar extends Component {
    
    render(){
        return (
            <div>
                <img className='ico' src={menu} alt='menu icon' />  
            </div>
        );
    }
}

export default NavBar;