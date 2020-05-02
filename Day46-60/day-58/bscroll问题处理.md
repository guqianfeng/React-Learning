# bscroll问题处理

## 练习

* 登录注册页面由于套了bscroll，点击事件失效，可以使用之前的onTouchStart和onTouchEnd处理

* bscroll的其他问题，把pageScroll定义在window下
```js
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
    window.pageScroll = new BScroll(wrap.current, {
      preventDefaultException: {
        tagName: /^(INPUT|TEXTAREA|BUTTON|SELECT|A)$/,
        className: /(^|\s)work_a(\s|$)/
      },
      pullUpLoad: pullUp ? { threshold: 200 } : false,
    });
    window.pageScroll.on('pullingUp', () => {
      // console.log('上滑加载更多')
      getData().then(res => {
        if (res) {
          window.pageScroll.finishPullUp()
          window.pageScroll.refresh()
        } else {
					window.pageScroll.closePullUp()
        }
      })
    })
    return () => {
      window.pageScroll = null;
    }
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
```

* 作品详情图片加载问题，我们来处理下article.js
```js
import React, { useRef, useEffect } from 'react'

function Article (props) {
  let { data } = props;
  let wrap = useRef(null);
  useEffect(() => {
    let imgs = wrap.current.querySelectorAll('img')
    // console.log(imgs)
    imgs.forEach(img => {
      img.onload = function(){
        window.pageScroll.refresh();
      }
    })
  }, [data])
  return (
    <article className="miiaov_article" ref={wrap}>
      <h3>{ data.title }</h3>
      <div 
        className="miiaov_txt"
        dangerouslySetInnerHTML={{
          __html: data.content
        }}
      ></div>
    </article>
  )
}

export default Article;
```

## 目录

* [返回目录](../../README.md)
* [上一节-发表评论](../day-57/发表评论.md)