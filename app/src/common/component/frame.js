import React, {useState, useEffect, useRef} from 'react';
import BScroll from 'better-scroll';

import Header from './header'
import Menu from './menu'

import '../css/reset.css'
import '../css/common.css'

import {useInnerHeight} from '../hook/index'

export default function Frame(props){
    const [showMenu, setShowMenu] = useState(false);
    const innerH = useInnerHeight();
    const wrap = useRef(null);
    let pageScroll = null;
    // console.log(props);
    function changeShow () {
        setShowMenu(!showMenu);
    }
    function menuHide (){
        setShowMenu(false);
    }
    useEffect(() => {
        pageScroll = new BScroll(wrap.current);
    }, [])
    return (
        <div>
            <Header changeShow={changeShow}/>
            <Menu/>
            <div 
                id="main" 
                style={{transform: `translateX(${showMenu ? 4.5 : 0}rem)`, height: innerH}}
                onTouchStart={() => {
                    menuHide();
                }}
            >
                <div className="pageWrap" ref={wrap}>
                    <div>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    )
}