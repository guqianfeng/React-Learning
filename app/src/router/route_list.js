import React from 'react'

import Index from '../view/index/index'
import Course from '../view/course/index'
import Lectruer from '../view/lecturer/index'
import Login from '../view/login/index'
import Work from '../view/work/index'

const routeList = [
    {
        name: "首页",
        path: "/",
        exact: true,
        render(props){
            return <Index {...props}/>
        }
    },
    {
        name: "课程",
        path: "/course",
        exact: true,
        render(props){
            return <Course {...props}/>
        }
    },
    {
        name: "讲师团队",
        path: "/lecturer",
        exact: true,
        render(props){
            return <Lectruer {...props}/>
        }
    },
    {
        name: "登录注册",
        path: "/login",
        exact: true,
        render(props){
            return <Login {...props}/>
        }
    },
    {
        name: "作品",
        path: "/work",
        exact: true,
        render(props){
            return <Work {...props}/>
        }
    },
];

const nav = [
    {
        name: "首页",
        path: "/",
        exact: true,
        className: 'iconfont icon-home'
    },
    {
        name: "课程",
        path: "/course",
        exact: true,
        className: 'iconfont icon-kecheng'
    },
    {
        name: "讲师团队",
        path: "/lecturer",
        exact: true,
        className: 'iconfont icon-peixunjiangshi'
    },
]

export {routeList, nav};