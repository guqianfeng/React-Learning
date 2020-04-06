import React, { useState, useEffect, useRef } from 'react';
import BScroll from 'better-scroll';

import Header from './header'
import Menu from './menu'

import '../css/reset.css'
import '../css/common.css'

import { useInnerHeight } from '../hook/index'

export default function Frame(props) {
  const [showMenu, setShowMenu] = useState(false);
  const innerH = useInnerHeight();
  const wrap = useRef(null);
  let { pullUp, getData } = props;
  // console.log(props);
  function changeShow() {
    setShowMenu(!showMenu);
  }
  function menuHide() {
    setShowMenu(false);
  }
  useEffect(() => {
    let pageScroll = new BScroll(wrap.current, {
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/
      },
      pullUpLoad: pullUp ? { threshold: 200 } : false,
    });
    pageScroll.on('pullingUp', () => {
      // console.log('上滑加载更多')
      getData().then(res => {
        if (res) {
          pageScroll.finishPullUp()
          pageScroll.refresh()
        } else {
					pageScroll.closePullUp()
        }
      })
    })
  }, [])
  return (
    <div>
      <Header changeShow={changeShow} />
      <Menu menuHide={menuHide} />
      <div
        id="main"
        style={{ transform: `translateX(${showMenu ? 4.5 : 0}rem)`, height: innerH }}
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