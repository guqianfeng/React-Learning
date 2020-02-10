import React, {useState} from 'react';

import Header from './header'
import Menu from './menu'

import '../css/reset.css'
import '../css/common.css'

export default function Frame(props){
    const [showMenu, setShowMenu] = useState(false);
    // console.log(props);
    function changeShow () {
        setShowMenu(!showMenu);
    }
    function menuHide (){
        setShowMenu(false);
    }
    return (
        <div>
            <Header changeShow={changeShow}/>
            <Menu/>
            <div 
                id="main" 
                style={{transform: `translateX(${showMenu ? 4.5 : 0}rem)`}}
                onTouchStart={() => {
                    menuHide();
                }}
            >
                {props.children}
            </div>
        </div>
    )
}