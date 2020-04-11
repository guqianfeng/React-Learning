import React, {useEffect, useRef, useState} from 'react';
import BScroll from 'better-scroll';

export default function Tab(props){
    // console.log(props);
    let {data, render} = props;
    let bScroll = null;
    let bannerWrap = useRef(null);
    const [now, setNow] = useState(0);
    useEffect(() => {
        let timer = 0;
        bScroll = new BScroll(bannerWrap.current, {
            scrollX: true,
            scrollY: false,
            eventPassthrough: 'vertical',
            momentum: false,
            snap: {
                loop: true,
            }
        });
        bScroll.on('scrollEnd', () => {
            // console.log(bScroll.getCurrentPage());
            setNow(bScroll.getCurrentPage().pageX);
        })
        timer = setInterval(() => {
            bScroll.next(200);
        }, 2000)
        bannerWrap.current.addEventListener('touchstart', () => {
            clearInterval(timer);
        })
        bannerWrap.current.addEventListener('touchend', () => {
            timer = setInterval(() => {
                bScroll.next(200);
            }, 2000)
        })
        return () => {
            //组件摧毁时也需要关闭定时器
            clearInterval(timer);
        }
    }, [])
    return (
        <div className="banner">
            <div className="banner_img" ref={bannerWrap}>
                <ul className="banner_list clearfix">
                    {data.map((item, index) => <li key={index}>{render(item)}</li>)}
                </ul>
            </div>
            {
                data.length < 1 ? '' : (
                    <ul className="banner_nav">
                        {data.map((item, index) => {
                            return (
                                <li 
                                    key={index} 
                                    className={index===now ? 'active' : ''}>    
                                </li>
                            )
                        })}
                    </ul>
                )
            } 

        </div>
    )
}